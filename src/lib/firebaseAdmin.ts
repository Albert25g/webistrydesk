import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';

let initialized = false;

function initFirebaseAdmin() {
  if (initialized) return;

  const serviceAccountEnv = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  const serviceAccountPathEnv = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  const defaultLocalPath = path.join(
    process.env.HOME || '',
    '.secrets',
    'webistrydesk-firebase-admin.json'
  );

  try {
    // Priority: FIREBASE_SERVICE_ACCOUNT_KEY (JSON string) -> GOOGLE_APPLICATION_CREDENTIALS file -> default local secrets path
    if (serviceAccountEnv) {
      const parsed = JSON.parse(serviceAccountEnv);
      admin.initializeApp({
        credential: admin.credential.cert(parsed as admin.ServiceAccount),
      });
      initialized = true;
      return;
    }

    const candidatePath = serviceAccountPathEnv || defaultLocalPath;
    if (candidatePath && fs.existsSync(candidatePath)) {
      const raw = fs.readFileSync(candidatePath, 'utf8');
      const parsed = JSON.parse(raw);
      admin.initializeApp({
        credential: admin.credential.cert(parsed as admin.ServiceAccount),
      });
      initialized = true;
      return;
    }

    // If we reach here, do not fallback to ADC — require an explicit service account key to avoid IAM signing.
    throw new Error(
      `No Firebase service account available. Set FIREBASE_SERVICE_ACCOUNT_KEY (JSON), ` +
        `or GOOGLE_APPLICATION_CREDENTIALS to a service account file, or place the key at ${defaultLocalPath}`
    );
  } catch (err) {
    initialized = false;
    throw err;
  }
}

export async function verifyIdToken(idToken: string) {
  if (!idToken) throw new Error('No ID token provided');
  try {
    initFirebaseAdmin();
  } catch (err) {
    throw new Error(
      'Failed to initialize Firebase Admin: ' +
        (err instanceof Error ? err.message : String(err))
    );
  }

  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    return decoded;
  } catch (err) {
    throw err;
  }
}

export function isFirebaseAdminInitialized() {
  return initialized;
}

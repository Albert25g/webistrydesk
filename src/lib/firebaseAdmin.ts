import admin from 'firebase-admin';

let initialized = false;

function initFirebaseAdmin() {
  if (initialized) return;

  const serviceAccountEnv = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

  try {
    if (serviceAccountEnv) {
      // Service account provided as JSON string in env
      const parsed = JSON.parse(serviceAccountEnv);
      admin.initializeApp({
        credential: admin.credential.cert(parsed as admin.ServiceAccount),
      });
    } else {
      // Fallback to application default credentials (GOOGLE_APPLICATION_CREDENTIALS)
      admin.initializeApp();
    }
    initialized = true;
  } catch (err) {
    // If initialization fails, keep initialized=false and rethrow so callers can surface a clear error
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

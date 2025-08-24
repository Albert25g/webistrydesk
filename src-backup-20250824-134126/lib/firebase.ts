import {
  initializeApp,
  getApps,
  getApp,
  type FirebaseApp,
  type FirebaseOptions,
} from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

// Read public Firebase keys from NEXT_PUBLIC_* environment variables.
// This allows different environments (dev/staging/prod) to provide their own configs.
function getFirebaseConfigFromEnv(): FirebaseOptions | null {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
  const messagingSenderId =
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
  const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
  const measurementId = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;

  if (!apiKey || !projectId) return null;

  const cfg: FirebaseOptions = {
    apiKey,
    authDomain: authDomain || `${projectId}.firebaseapp.com`,
    projectId,
    storageBucket: storageBucket || `${projectId}.appspot.com`,
    messagingSenderId,
    appId,
    measurementId,
  };

  return cfg;
}

let _app: FirebaseApp | null = null;
let _auth: Auth | null = null;
let _db: Firestore | null = null;

function initIfNeeded() {
  if (_app) return;

  // Prefer env-driven config; fall back to any existing initialization if present.
  const cfg = getFirebaseConfigFromEnv();
  if (cfg) {
    _app = getApps().length ? getApp() : initializeApp(cfg);
  } else if (getApps().length) {
    _app = getApp();
  }

  if (_app) {
    try {
      _auth = getAuth(_app);
    } catch (e) {
      // Log the error so the caught variable is used and helpful during runtime
      // (keeps TypeScript/ESLint happy about unused variables).
      console.warn('getAuth initialization failed', e);
      _auth = null;
    }
    try {
      _db = getFirestore(_app);
    } catch (e) {
      console.warn('getFirestore initialization failed', e);
      _db = null;
    }
  }
}

export function getAuthClient(): Auth | null {
  initIfNeeded();
  return _auth;
}

export function getFirestoreClient(): Firestore | null {
  initIfNeeded();
  return _db;
}

export function isFirebaseConfigured() {
  return Boolean(getFirebaseConfigFromEnv());
}

// Expose the raw public config (safe to show) for runtime debugging and onboarding.
export function getFirebasePublicConfig(): FirebaseOptions | null {
  return getFirebaseConfigFromEnv();
}

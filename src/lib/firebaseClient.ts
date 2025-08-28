import {
  initializeApp,
  getApps,
  getApp,
  FirebaseApp,
  FirebaseOptions,
} from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

type FirebaseConfig = FirebaseOptions & {
  apiKey?: string;
  authDomain?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
  measurementId?: string;
};

function getClientConfig(): FirebaseConfig | null {
  if (typeof window === 'undefined') return null;
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  if (!apiKey) return null;
  return {
    apiKey,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };
}

export function initFirebaseClient(): FirebaseApp | null {
  if (typeof window === 'undefined') return null;
  try {
    if (!getApps().length) {
      const cfg = getClientConfig();
      if (!cfg) return null;
      return initializeApp(cfg as FirebaseOptions);
    }
    return getApp();
  } catch (err) {
    console.error('initFirebaseClient error', err);
    return null;
  }
}

export function getFirebaseAuth() {
  if (typeof window === 'undefined') return null;
  const app = initFirebaseClient();
  if (!app) return null;
  return getAuth(app);
}

export async function firebaseSignUp(email: string, password: string) {
  const auth = getFirebaseAuth();
  if (!auth) throw new Error('Firebase not configured on client');
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function firebaseSignIn(email: string, password: string) {
  const auth = getFirebaseAuth();
  if (!auth) throw new Error('Firebase not configured on client');
  return signInWithEmailAndPassword(auth, email, password);
}

export async function firebaseSignOut() {
  const auth = getFirebaseAuth();
  if (!auth) return;
  return signOut(auth);
}

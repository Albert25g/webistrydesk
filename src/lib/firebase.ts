import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCzxTv_qssucMBWwYbCWw7Xgm9K4gOHLMs',
  authDomain: 'webistrydesk-9c237.firebaseapp.com',
  projectId: 'webistrydesk-9c237',
  storageBucket: 'webistrydesk-9c237.appspot.com',
  messagingSenderId: '260507943525',
  appId: '1:260507943525:web:fe0b44148eee778fccbc8c',
  measurementId: 'G-T09ZXSVKF4',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// Small helper for components that expect a `getAuthClient()` accessor.
// Some files (eg. `Header.tsx`) import this to lazily access the auth
// client in client components without importing the `auth` constant directly.
export function getAuthClient() {
  return auth;
}

// Basic runtime check used by UI to determine whether Firebase public keys are
// present. The app expects NEXT_PUBLIC_* env vars for client side config.
export function isFirebaseConfigured() {
  // These are the typical NEXT_PUBLIC_* keys used in this project.
  return Boolean(
    process?.env?.NEXT_PUBLIC_FIREBASE_API_KEY &&
      process?.env?.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  );
}

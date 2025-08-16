import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzxTv_qssucMBWwYbCWw7Xgm9K4gOHLMs",
  authDomain: "webistrydesk-9c237.firebaseapp.com",
  projectId: "webistrydesk-9c237",
  storageBucket: "webistrydesk-9c237.appspot.com",
  messagingSenderId: "260507943525",
  appId: "1:260507943525:web:fe0b44148eee778fccbc8c",
  measurementId: "G-T09ZXSVKF4",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

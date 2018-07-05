import firebaseLegacy from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

// Initialize Firebase
var config = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID
};

firebaseLegacy.initializeApp(config);

export const firebase = firebaseLegacy;
export const firestore = firebaseLegacy.firestore();

firestore.settings({
  timestampsInSnapshots: true
});

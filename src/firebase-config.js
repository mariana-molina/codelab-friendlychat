/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
import { initializeApp } from "firebase/app";
const config = {
  apiKey: "AIzaSyBOdJzGFO2h6tCr7qTmCSRt6Lm9nEDYi04",
  authDomain: "friendlychat-mm.firebaseapp.com",
  projectId: "friendlychat-mm",
  storageBucket: "friendlychat-mm.appspot.com",
  messagingSenderId: "479962803586",
  appId: "1:479962803586:web:ca840e3ccd960fbb60f39b"
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}

const app = initializeApp(config);
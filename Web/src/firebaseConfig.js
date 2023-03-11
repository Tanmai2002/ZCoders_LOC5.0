// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNdPqdnKtwzi7yAZTX6FOylwFx-4hyFyQ",
  authDomain: "zcoders.firebaseapp.com",
  projectId: "zcoders",
  storageBucket: "zcoders.appspot.com",
  messagingSenderId: "602691800827",
  appId: "1:602691800827:web:f21cbba3b6bf9a4cd7aa5e",
  measurementId: "G-RBG56NZMEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = app.auth();
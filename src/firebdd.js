// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyAws76eFwxqhseRnYa5kvy4d8-rU7c5HC4",
//   authDomain: "aptosnft-4290b.firebaseapp.com",
//   databaseURL: "https://aptosnft-4290b-default-rtdb.firebaseio.com",
//   projectId: "aptosnft-4290b",
//   storageBucket: "aptosnft-4290b.appspot.com",
//   messagingSenderId: "392501360912",
//   appId: "1:392501360912:web:ea609db1dd671c70468d95",
//   measurementId: "G-YVMSJWEC2P"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAXfILRD1ur8vW9SgiIokG8KHCsUe_W-l0",
  authDomain: "mecollateral-f4667.firebaseapp.com",
  databaseURL: "https://mecollateral-f4667-default-rtdb.firebaseio.com",
  projectId: "mecollateral-f4667",
  storageBucket: "mecollateral-f4667.appspot.com",
  messagingSenderId: "574728994402",
  appId: "1:574728994402:web:f2a5d2528c459c61c69b3b",
  measurementId: "G-LSSFHW27S1"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firebases = firebase.initializeApp(firebaseConfig);
export default firebases;
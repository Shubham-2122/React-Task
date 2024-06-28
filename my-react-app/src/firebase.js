// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5pukFJzm04PPYmFLxHabh-P-y3ceSVH8",
  authDomain: "crud-f1a91.firebaseapp.com",
  databaseURL: "https://crud-f1a91-default-rtdb.firebaseio.com",
  projectId: "crud-f1a91",
  storageBucket: "crud-f1a91.appspot.com",
  messagingSenderId: "125875667029",
  appId: "1:125875667029:web:69e782b3880a1afa8f94dc",
  measurementId: "G-MT76FSSDXJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
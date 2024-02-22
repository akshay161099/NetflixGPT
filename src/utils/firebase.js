// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfq8YGkyDQg6_zEQ2OPwTOzj9R5Mi-T4Q",
  authDomain: "netflixgpt-f6298.firebaseapp.com",
  projectId: "netflixgpt-f6298",
  storageBucket: "netflixgpt-f6298.appspot.com",
  messagingSenderId: "638944987782",
  appId: "1:638944987782:web:3b1dfed49aac5c34501f07",
  measurementId: "G-T8618254G5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
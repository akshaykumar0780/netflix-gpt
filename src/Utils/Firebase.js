// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm7lMa3KHdCP561-f4QPnaNyp_38wpooY",
  authDomain: "netflixgpt-4646d.firebaseapp.com",
  projectId: "netflixgpt-4646d",
  storageBucket: "netflixgpt-4646d.appspot.com",
  messagingSenderId: "1081776844678",
  appId: "1:1081776844678:web:37cbf31b27cab1b5c24607",
  measurementId: "G-8P7KP9TDWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
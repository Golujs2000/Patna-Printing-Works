// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6F3t-qiSXKJ5OPWKue1MKfuw4YmndvUg",
  authDomain: "patna-printing-works.firebaseapp.com",
  projectId: "patna-printing-works",
  storageBucket: "patna-printing-works.firebasestorage.app",
  messagingSenderId: "744303328799",
  appId: "1:744303328799:web:1b8cac38a19a647ecfdf2a",
  measurementId: "G-9X1W4V22JZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics conditionally to avoid breaking in non-browser environments if any
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBDdHCZR6hHCVsQQTmGdr1_hgh0J6Yzehc",
  authDomain: "zulus-62570.firebaseapp.com",
  projectId: "zulus-62570",
  storageBucket: "zulus-62570.firebasestorage.app",
  messagingSenderId: "191259255750",
  appId: "1:191259255750:web:d0c7c97026bd644d82c8c7",
  measurementId: "G-JZQ3KR9S93"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

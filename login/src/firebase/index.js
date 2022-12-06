import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAEZ03aBftGc8Fp82fO8L4eyqlWbMALRAY",
  authDomain: "login-d7643.firebaseapp.com",
  projectId: "login-d7643",
  storageBucket: "login-d7643.appspot.com",
  messagingSenderId: "518830068782",
  appId: "1:518830068782:web:bad7485873606f95befbbf",
  measurementId: "G-EGDZLF55VC",
};

const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);
export { db };

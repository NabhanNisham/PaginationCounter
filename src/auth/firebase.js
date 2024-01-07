import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA0UDO5-uYAuJRWlq2StJi1JlyseKznUTc",
  authDomain: "paginationcounter.firebaseapp.com",
  projectId: "paginationcounter",
  storageBucket: "paginationcounter.appspot.com",
  messagingSenderId: "965060035974",
  appId: "1:965060035974:web:be7dd48b825ec4a788d807",
  measurementId: "G-2NR07JMWGB"
};

const app = initializeApp(firebaseConfig);
const authInstance = getAuth(app);

export { authInstance };

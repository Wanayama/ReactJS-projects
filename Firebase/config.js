import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";




// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBjw9rLmx4YdH-pai8oSoeprNwDcg_FXmM",
  authDomain: "chukashopee-32367.firebaseapp.com",
  projectId: "chukashopee-32367",
  storageBucket: "chukashopee-32367.appspot.com",
  messagingSenderId: "910313429191",
  appId: "1:910313429191:web:f78e827a8ae9ccefd946e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export default app;
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx27_hy88TIjQOmwKuZmROleTfQIZUOII",
  authDomain: "to-do-list-28967.firebaseapp.com",
  projectId: "to-do-list-28967",
  storageBucket: "to-do-list-28967.appspot.com",
  messagingSenderId: "769020210346",
  appId: "1:769020210346:web:93491fd9830a3d1aa1f4d3",
};

const app = initializeApp(firebaseConfig);

export default collection(getFirestore(app), "tasks");
export const db = getFirestore(app);

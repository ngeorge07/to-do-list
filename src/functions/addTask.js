import { addDoc, serverTimestamp } from "firebase/firestore";
import colRef from "./firebase";

const addTask = async (input) => {
  await addDoc(colRef, {
    title: input,
    complete: false,
    createdAt: serverTimestamp(),
  });
};

export default addTask;

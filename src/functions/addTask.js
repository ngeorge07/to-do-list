import { addDoc } from "firebase/firestore";
import colRef from "./firebase";

const addTask = async (input) => {
  await addDoc(colRef, {
    title: input,
    complete: false,
    //test2
  });
};

export default addTask;

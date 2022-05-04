import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

const updateTask = async (id, bool) =>
  await setDoc(
    doc(db, "tasks", id),
    {
      complete: bool,
    },
    { merge: true }
  );

export default updateTask;

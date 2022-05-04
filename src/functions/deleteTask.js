import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

const deleteTask = async (id) => await deleteDoc(doc(db, "tasks", id));

export default deleteTask;

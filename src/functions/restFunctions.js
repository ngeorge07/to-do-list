import colRef, { db } from "./firebase";
import {
  serverTimestamp,
  doc,
  addDoc,
  setDoc,
  deleteDoc,
  where,
  getDocs,
  query,
} from "firebase/firestore";

export const addTask = async (input) => {
  await addDoc(colRef, {
    title: input,
    complete: false,
    createdAt: serverTimestamp(),
  });
};

export const updateTask = async (id, bool) =>
  await setDoc(
    doc(db, "tasks", id),
    {
      complete: bool,
    },
    { merge: true }
  );

export const deleteTask = async (id) => await deleteDoc(doc(db, "tasks", id));

export const deleteQuery = async () => {
  const q = query(colRef, where("complete", "==", true));

  const snapshot = await getDocs(q);
  const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  results.forEach(async (result) => {
    await deleteDoc(doc(db, "tasks", result.id));
  });
};

import colRef, { db } from "./firebase";
import { onSnapshot, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

import { UnorderedList } from "@chakra-ui/react";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(
    () =>
      onSnapshot(colRef, (snapshot) =>
        setTasks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  const addTask = async () => {
    await addDoc(colRef, {
      title: input,
      complete: false,
    });
  };

  const deleteTask = async (id) => await deleteDoc(doc(db, "tasks", id));
  const updateTask = async (id) =>
    await setDoc(
      doc(db, "tasks", id),
      {
        complete: true,
      },
      { merge: true }
    );

  return (
    <div className="App">
      <input
        type="text"
        name="task"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={addTask}>Add new task</button>

      <UnorderedList>
        {tasks.map((task) => (
          <Task key={task.id} title={task.title} />
        ))}
      </UnorderedList>
    </div>
  );
}

export default App;

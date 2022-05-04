import colRef, { db } from "./firebase";
import { onSnapshot, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

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

      {tasks.map((task) => (
        <div key={task.id}>
          <p style={task.complete ? { color: "green" } : { color: "red" }}>
            {task.title}
          </p>
          <button onClick={() => deleteTask(task.id)}>Delete task</button>
          <button onClick={() => updateTask(task.id)}>Complete</button>
        </div>
      ))}
    </div>
  );
}

export default App;

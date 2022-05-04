import colRef from "./functions/firebase";
import addTask from "./functions/addTask";

import { onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";

import { UnorderedList } from "@chakra-ui/react";
import InputTask from "./components/InputTask";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(
    () =>
      onSnapshot(colRef, (snapshot) =>
        setTasks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  return (
    <div className="App">
      {/* <input
        type="text"
        name="task"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={() => addTask(input)}>Add new task</button> */}

      <InputTask />

      <UnorderedList styleType="none">
        {tasks.map((task) => (
          <Task
            key={task.id}
            title={task.title}
            id={task.id}
            isComplete={task.complete}
          />
        ))}
      </UnorderedList>
    </div>
  );
}

export default App;

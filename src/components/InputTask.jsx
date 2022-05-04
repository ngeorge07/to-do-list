import { FormControl, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

import addTask from "../functions/addTask";

export default function InputTask() {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);

  const sendTask = (e) => {
    e.preventDefault();
    addTask(input);
    setInput("");
  };

  return (
    <form action="" onSubmit={sendTask}>
      <FormControl>
        <Input
          id="inputTask"
          type="text"
          value={input}
          onChange={handleInputChange}
        />
      </FormControl>

      <Button type="submit">Add new task</Button>
    </form>
  );
}

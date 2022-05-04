import { FormControl, Input, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";

import addTask from "../functions/addTask";

export default function InputTask({ id }) {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);

  const sendTask = (e) => {
    e.preventDefault();
    addTask(input);
    setInput("");
  };

  return (
    <Flex
      as="form"
      onSubmit={sendTask}
      gap="5"
      w="100%"
      direction={{ base: "column", sm: "row" }}
    >
      <FormControl>
        <Input
          id="inputTask"
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Create a new to do..."
        />
      </FormControl>

      <Button type="submit" colorScheme="teal" size="md" px={10}>
        Add new task
      </Button>
    </Flex>
  );
}

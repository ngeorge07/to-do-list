import { FormControl, Input, Button, Flex } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";

import { addTask } from "../functions/restFunctions";

export default function InputTask() {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const sendTask = (e) => {
    e.preventDefault();
    addTask(input);
    inputRef.current.focus();
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
          ref={inputRef}
          id="inputTask"
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Write a new to do..."
        />
      </FormControl>

      <Button
        isDisabled={input === "" ? true : false}
        type="submit"
        colorScheme="teal"
        size="md"
        px={10}
      >
        Add new task
      </Button>
    </Flex>
  );
}

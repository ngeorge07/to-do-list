import { Checkbox, Flex, Button } from "@chakra-ui/react";

import deleteTask from "../functions/deleteTask";
import updateTask from "../functions/updateTask";

export default function Task({ title, id, isComplete }) {
  return (
    <Flex as="li" justify="space-between" w="100%">
      <Checkbox
        isChecked={isComplete ? true : false}
        onChange={(e) =>
          e.target.checked ? updateTask(id, true) : updateTask(id, false)
        }
        textDecoration={isComplete ? "line-through" : "none"}
      >
        {title}
      </Checkbox>
      <Button colorScheme="red" onClick={() => deleteTask(id)}>
        Delete
      </Button>
    </Flex>
  );
}

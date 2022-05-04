import { Checkbox, ListItem, Button } from "@chakra-ui/react";

import deleteTask from "../functions/deleteTask";
import updateTask from "../functions/updateTask";

export default function Task({ title, id }) {
  return (
    <ListItem>
      <Checkbox
        onChange={(e) =>
          e.target.checked ? updateTask(id, true) : updateTask(id, false)
        }
      >
        {title}
      </Checkbox>
      <Button onClick={() => deleteTask(id)}>Delete</Button>
    </ListItem>
  );
}

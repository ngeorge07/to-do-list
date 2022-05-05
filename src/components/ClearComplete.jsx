import { Button } from "@chakra-ui/react";
import { deleteQuery } from "../functions/restFunctions";

export default function ClearComplete() {
  return (
    <Button colorScheme="red" onClick={deleteQuery} w="fit-content" mb={"10"}>
      Clear Completed
    </Button>
  );
}

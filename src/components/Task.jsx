import {
  Checkbox,
  Flex,
  Box,
  Button,
  ScaleFade,
  useDisclosure,
} from "@chakra-ui/react";

import { deleteTask, updateTask } from "../functions/restFunctions";

export default function Task({ title, id, isComplete }) {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <Box as="article" w="100%">
      <ScaleFade in={isOpen} initialScale={0.7}>
        <Flex justify="space-between" w="100%">
          <Checkbox
            isChecked={isComplete ? true : false}
            onChange={(e) =>
              e.target.checked ? updateTask(id, true) : updateTask(id, false)
            }
            textDecoration={isComplete ? "line-through" : "none"}
          >
            {title}
          </Checkbox>
          <Button
            colorScheme="red"
            onClick={() => {
              onClose();
              setTimeout(() => {
                deleteTask(id);
              }, 250);
            }}
          >
            Delete
          </Button>
        </Flex>
      </ScaleFade>
    </Box>
  );
}

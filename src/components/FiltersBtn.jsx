import { where, onSnapshot, query, orderBy } from "firebase/firestore";
import colRef from "../functions/firebase";
import { deleteQuery } from "../functions/restFunctions";

import { RadioGroup, Radio, HStack, Button, Flex } from "@chakra-ui/react";

export default function FiltersBtn({ setTasks }) {
  const handleQuery = async (field, operator, value) => {
    const q = query(
      colRef,
      where(field, operator, value),
      orderBy("createdAt", "desc")
    );

    const snapshot = onSnapshot(q, (snapshot) =>
      setTasks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return snapshot;
  };

  return (
    <Flex w="100%" align="center" gap={6} direction="column">
      <RadioGroup name="filters" defaultValue="all">
        <HStack spacing={4}>
          <Radio
            value="all"
            onChange={() => handleQuery("createdAt", "!=", "")}
          >
            All
          </Radio>
          <Radio
            value="active"
            onChange={() => handleQuery("complete", "==", false)}
          >
            Active
          </Radio>
          <Radio
            value="completed"
            onChange={() => handleQuery("complete", "==", true)}
          >
            Completed
          </Radio>
        </HStack>
      </RadioGroup>
    </Flex>
  );
}

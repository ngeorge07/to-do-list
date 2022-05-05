import colRef from "./functions/firebase";
import { onSnapshot, orderBy, query, where } from "firebase/firestore";

import { useState, useEffect } from "react";
import {
  StackDivider,
  Flex,
  VStack,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";

import InputTask from "./components/InputTask";
import Task from "./components/Task";
import ThemeButton from "./components/ThemeButton";
import ClearComplete from "./components/ClearComplete";

function App() {
  const [tasks, setTasks] = useState([{ id: "loading" }]);

  useEffect(() => {
    const q = query(colRef, orderBy("createdAt", "desc"));
    const snapshot = onSnapshot(q, (snapshot) =>
      setTasks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return snapshot;
  }, []);

  return (
    <main>
      <Flex
        justify="space-between"
        maxW="md"
        w={["80%", 400, 600]}
        mx="auto"
        my={10}
      >
        <Heading as="h1" size="xl">
          To-do List
        </Heading>
        <ThemeButton />
      </Flex>

      <Flex
        as="section"
        flexDirection="column"
        gap="10"
        align="center"
        maxW="md"
        w={["80%", 400, 600]}
        mx="auto"
      >
        <InputTask />
        {tasks.length === 0 ? (
          <Text>- Add a new task -</Text>
        ) : (
          <VStack
            as="section"
            w="100%"
            spacing="5"
            ms="0"
            divider={<StackDivider borderColor="gray.200" />}
          >
            {tasks.map((task) =>
              task.id === "loading" ? (
                <Button
                  isLoading
                  colorScheme="cyan"
                  variant="solid"
                  key="loading"
                >
                  Loading
                </Button>
              ) : (
                <Task
                  key={task.id}
                  title={task.title}
                  id={task.id}
                  isComplete={task.complete}
                />
              )
            )}
          </VStack>
        )}

        <ClearComplete />
      </Flex>
    </main>
  );
}

export default App;

import colRef from "./functions/firebase";
import { onSnapshot, orderBy, query } from "firebase/firestore";

import { useState, useEffect } from "react";
import { StackDivider, Flex, VStack, Heading, Button } from "@chakra-ui/react";

import InputTask from "./components/InputTask";
import Task from "./components/Task";
import ThemeButton from "./components/ThemeButton";
import FiltersBtn from "./components/FiltersBtn";

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
      <Heading as="h1" size="xl" align="center">
        Todo List
      </Heading>
      <Flex
        as="section"
        flexDirection="column"
        gap="10"
        align="center"
        maxW="md"
        w={["80%", 400, 600]}
        mx="auto"
      >
        <ThemeButton />
        <InputTask />

        <VStack
          as="ul"
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

        <FiltersBtn setTasks={setTasks} />
      </Flex>
    </main>
  );
}

export default App;

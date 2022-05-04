import colRef from "./functions/firebase";

import { onSnapshot, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { handleQueyDelete } from "./functions/restFunctions";
import { StackDivider, Flex, VStack, Heading, Button } from "@chakra-ui/react";
import InputTask from "./components/InputTask";
import Task from "./components/Task";
import ThemeButton from "./components/ThemeButton";

function App() {
  const [tasks, setTasks] = useState([]);

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
        w={["80%", 400, 500]}
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
          {tasks.map((task) => (
            <Task
              key={task.id}
              title={task.title}
              id={task.id}
              isComplete={task.complete}
            />
          ))}
        </VStack>

        <Button onClick={handleQueyDelete}></Button>
      </Flex>
    </main>
  );
}

export default App;

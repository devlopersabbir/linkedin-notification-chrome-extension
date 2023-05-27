import { Container, Heading } from "@chakra-ui/react";

const App = () => {
  chrome.runtime.sendMessage({ action: "fetchNotifications" });

  return (
    <Container w="400px" h="auto" mx="auto" p={4}>
      <Heading>Hello</Heading>
    </Container>
  );
};

export default App;

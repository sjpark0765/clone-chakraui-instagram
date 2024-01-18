// import React from "react";

import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Box display={{ base: "none", md: "block" }}>
          <Image
            src="https://media.geeksforgeeks.org/wp-content/uploads/20200902092211/Screenshot626.png"
            h={650}
          />
        </Box>
        <VStack></VStack>
      </Container>
    </Flex>
  );
};

export default AuthPage;

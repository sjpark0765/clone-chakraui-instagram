import { Flex, VStack, Text, Box } from "@chakra-ui/react";

import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
const SuggerstedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser name="user01" followers={1234} avatar="/img2.png" />
      <SuggestedUser name="user02" followers={1234} avatar="/img3.png" />
      <SuggestedUser name="user03" followers={1234} avatar="/img4.png" />
      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        2024 Built by{" "}
        <Text as={"span"} color={"blue.500"}>
          asaprogrammer01
        </Text>
      </Box>
    </VStack>
  );
};
export default SuggerstedUsers;

import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name={"asaprogrammer01"} size={"lg"} src={"/profilepic.png"} />
        <Text fontSize={8} fontWeight={"bold"}>
          asaprogrammer01
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={12}
        fontWeight={"bold"}
        color={"blue.500"}
        _hover={{ color: "white" }}
      >
        Log Out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;

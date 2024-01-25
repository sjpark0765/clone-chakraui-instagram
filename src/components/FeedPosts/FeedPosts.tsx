import {
  Container,
  VStack,
  SkeletonCircle,
  Flex,
  Skeleton,
  Box,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useState, useEffect } from "react";

const FeedPosts = () => {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height={"10px"} w={"200px"} />
                <Skeleton height={"10px"} w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"300px"} />
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPost
            username="asaprogrammer01"
            img="/img1.png"
            avatar="/img1.png"
          />
          <FeedPost username="park" img="/img2.png" avatar="/img2.png" />
          <FeedPost username="john" img="/img3.png" avatar="/img3.png" />
          <FeedPost username="danny" img="/img4.png" avatar="/img4.png" />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;

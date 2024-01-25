import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const FeedPost = ({ img, username, avatar }) => {
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
      <Box my={4} borderRadius={4} overflow={"hidden"}>
        <Image src={img} alt={username}></Image>
      </Box>
      <PostFooter username={username} />
    </>
  );
};

export default FeedPost;

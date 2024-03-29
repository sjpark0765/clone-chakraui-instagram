import {
  Flex,
  GridItem,
  Text,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Avatar,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3s ease"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={5}>
            <Flex>
              <AiFillHeart size={20}></AiFillHeart>
              <Text fontWeight={"bold"} ml={2}>
                1.2k
              </Text>
            </Flex>
            <Flex>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>
                1.2k
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src={img}
          alt={"post"}
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
        ></Image>
      </GridItem>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "3xl", md: "5xl" }}
        isCentered={true}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex
              gap={4}
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
              maxH={"90vh"}
              minH={"50vh"}
            >
              <Flex
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src={img}></Image>
              </Flex>
              <Flex
                flex={1}
                flexDir={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}
              ></Flex>
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Flex alignItems={"center"} gap={4}>
                  <Avatar src={"/profilepic.png"} size={"sm"}></Avatar>
                  <Text fontWeight={"bold"} fontSize={12}>
                    asaprogrammer01
                  </Text>
                  <Box
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={3}
                  >
                    <MdDelete size={20} cursor={"pointer"} />
                  </Box>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;

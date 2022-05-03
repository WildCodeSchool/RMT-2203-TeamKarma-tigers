import { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Divider,
  useDisclosure,
  Button,
  Select,
  Text,
  Flex,
  HStack,
} from "@chakra-ui/react";
import getGenreList from "../services/GetGenreList";

export default function ModalInspiration() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    getGenreList().then((result) => setGenreList(result));
  }, []);

  return (
    <Button onClick={onOpen} variant="ghost" _hover={{ bgColor: "#2B3543" }}>
      I need inspiration
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Get Inspired</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              direction="column"
              gap={6}
              justify="center"
              align="center"
              width="100%"
            >
              <Text
                fontWeight="bold"
                color="teal.400
"
              >
                Select your preferences{" "}
              </Text>

              <HStack>
                <Text>I would like to watch an </Text>

                <Flex gap="6px" wrap="wrap">
                  <FormControl isRequired>
                    <Select id="genre" placeholder="Select option" isRequired>
                      {genreList.map((genre) => (
                        <option value={genre.id}>{genre.name}</option>
                      ))}
                    </Select>
                  </FormControl>
                </Flex>
                <Text>movie</Text>
              </HStack>
              <HStack>
                <Text>Released in </Text>
                <FormControl isRequired>
                  <Select id="genre" placeholder="Select option" isRequired>
                    {genreList.map((genre) => (
                      <option value={genre.id}>{genre.name}</option>
                    ))}
                  </Select>
                </FormControl>
              </HStack>

              <Button
                size="lg"
                onClick={onOpen}
                variant="outline"
                colorScheme="red"
              >
                See Movies
              </Button>
              <Divider />
              <Text color="gray.500">OR</Text>

              <Button
                onClick={onOpen}
                size="lg"
                variant="solid"
                colorScheme="red"
              >
                Generate a Random Movie
              </Button>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Button>
  );
}

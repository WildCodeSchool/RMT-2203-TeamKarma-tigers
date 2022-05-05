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
  useDisclosure,
  Button,
  Select,
  Box,
  Image,
  Text,
  Flex,
  VStack,
} from "@chakra-ui/react";
import discover from "../assets/discover.gif";
import MovieCard from "./MovieCard";
import getGenreList from "../services/GetGenreList";
import getTotalPageResult from "../services/GetTotalPages";
import getRandomMovie from "../services/GetRandomMovie";

export default function ModalInspiration() {
  const [currentMovie, setCurrentMovie] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    getGenreList().then((result) => setGenreList(result));
  }, []);

  return (
    <Button onClick={onOpen} variant="ghost" _hover={{ bgColor: "#2B3543" }}>
      I need inspiration
      <Modal
        closeOnOverlayClick={false}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        size="3xl"
        z-index="auto"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Get Inspired</ModalHeader>
          <ModalCloseButton onClick={() => setCurrentMovie("")} />
          {!currentMovie ? (
            <>
              <ModalBody>
                <Flex
                  direction="column"
                  gap={6}
                  justify="center"
                  align="center"
                  width="100%"
                >
                  <Image
                    src={discover}
                    alt="discover-gif"
                    objectFit="cover"
                    width="100%"
                    height="90%"
                    filter="auto"
                    borderRadius="md"
                    blur="3px"
                  />

                  <form>
                    <Flex
                      position="absolute"
                      top="50%"
                      left="50%"
                      gap={6}
                      transform="translate(-50%, -50%)"
                      width="90%"
                      align="center"
                      justify="center"
                      wrap="wrap"
                    >
                      <Text fontSize="5xl" color="white" fontWeight="600">
                        Show me any
                      </Text>

                      <Flex gap="6px" wrap="wrap">
                        <FormControl isRequired>
                          <Select
                            bg="white"
                            size="lg"
                            id="genre"
                            placeholder="Select option"
                            isRequired
                          >
                            {genreList.map((genre) => (
                              <option value={genre.id}>{genre.name}</option>
                            ))}
                          </Select>
                        </FormControl>
                      </Flex>
                      <Text fontSize="5xl" color="white" fontWeight="600">
                        movie
                      </Text>
                      <VStack>
                        <Button
                          size="lg"
                          onClick={onOpen}
                          variant="solid"
                          type="submit"
                          colorScheme="twitter"
                        >
                          Show me what you got{" "}
                        </Button>

                        <Text color="white">OR</Text>
                        <Button
                          align="center"
                          onClick={() => {
                            getTotalPageResult().then((nb) => {
                              getRandomMovie(nb).then((movie) =>
                                setCurrentMovie(movie)
                              );
                            });
                          }}
                          size="lg"
                          variant="solid"
                          colorScheme="facebook"
                        >
                          Get Random Movie
                        </Button>
                      </VStack>
                    </Flex>
                  </form>
                </Flex>
              </ModalBody>
              <ModalFooter />
            </>
          ) : (
            <>
              <ModalBody
                display="flex"
                direction="column"
                justifyContent="center"
                align="center"
              >
                <Box border="1px solid gray.200">
                  <MovieCard movie={currentMovie} isInspiration />
                </Box>
              </ModalBody>
              <ModalFooter
                w="100%"
                m="auto"
                direction="column"
                justifyContent="center"
                align="center"
              >
                <Button
                  align="center"
                  onClick={() => {
                    getTotalPageResult().then((nb) => {
                      getRandomMovie(nb).then((movie) =>
                        setCurrentMovie(movie)
                      );
                    });
                  }}
                  size="lg"
                  variant="solid"
                  colorScheme="facebook"
                >
                  Show another movie{" "}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Button>
  );
}

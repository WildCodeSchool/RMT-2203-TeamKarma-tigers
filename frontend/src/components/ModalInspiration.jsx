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
  const [genreFilter, setGenreFilter] = useState("");
  const [genreFilterName, setGenreFilterName] = useState("");

  useEffect(() => {
    getGenreList().then((result) => setGenreList(result));
  }, []);

  const filterByGenre = (e) => {
    if (parseInt(e.target.value, 10)) {
      setGenreFilter(parseInt(e.target.value, 10));
      setGenreFilterName(
        genreList.find((genre) => genre.id === parseInt(e.target.value, 10))
          .name
      );
    } else {
      setGenreFilter("");
      setGenreFilterName("");
    }
  };

  return (
    <Button
      onClick={onOpen}
      variant="solid"
      _hover={{ bgColor: "#2B3543" }}
      size="lg"
      colorScheme="red"
    >
      I need inspiration
      <Modal
        closeOnOverlayClick={false}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        size="3xl"
        height="30vh"
        z-index="auto"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Get Inspired</ModalHeader>
          <ModalCloseButton
            onClick={() => {
              setCurrentMovie("");
              setGenreFilter("");
              setGenreFilterName("");
            }}
          />
          {!currentMovie ? (
            <ModalBody
              bgImage={discover}
              bgSize="cover"
              bgRepeat="no-repeat"
              bgPosition="center"
            >
              <Flex
                direction="column"
                justify="center"
                align="center"
                width="100%"
              >
                <form onSubmit={(e) => e.preventDefault()}>
                  <Flex direction="column">
                    <Flex
                      direction="row"
                      gap={6}
                      width="100%"
                      align="center"
                      justify="center"
                      wrap="wrap"
                      paddingY="50px"
                    >
                      <Text
                        fontSize="5xl"
                        color="white"
                        fontWeight="600"
                        textAlign="center"
                      >
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
                            onChange={filterByGenre}
                          >
                            {genreList.map((genre) => (
                              <option value={genre.id} name={genre.name}>
                                {genre.name}
                              </option>
                            ))}
                          </Select>
                        </FormControl>
                      </Flex>
                      <Text
                        fontSize="5xl"
                        color="white"
                        fontWeight="600"
                        textAlign="center"
                      >
                        movie
                      </Text>
                    </Flex>
                    <VStack paddingBottom={50}>
                      <Button
                        size="lg"
                        onClick={() => {
                          getTotalPageResult().then((nb) => {
                            getRandomMovie(nb, genreFilter).then((movie) => {
                              setCurrentMovie(movie);
                            });
                          });
                        }}
                        variant="solid"
                        type="submit"
                        colorScheme="twitter"
                      >
                        Show me what you got
                      </Button>

                      <Text color="white">OR</Text>
                      <Button
                        align="center"
                        onClick={() => {
                          getTotalPageResult().then((nb) => {
                            getRandomMovie(nb, genreFilter).then((movie) =>
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
                      getRandomMovie(nb, genreFilter).then((movie) =>
                        setCurrentMovie(movie)
                      );
                    });
                  }}
                  size="lg"
                  variant="solid"
                  colorScheme="facebook"
                >
                  {genreFilterName
                    ? `Show another ${genreFilterName} movie`
                    : `Show another random movie`}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Button>
  );
}

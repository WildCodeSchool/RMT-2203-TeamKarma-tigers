import { Container, Flex, Heading, Box } from "@chakra-ui/react";

export default function CardDetailOverall() {
  return (
    <Container border="1px solid black" maxW="95%" marginBottom="16px">
      <Flex>
        <Box
          w="350px"
          h="500px"
          border="1px solid black"
          m="1rem"
          overflow="hidden"
          borderRadius="lg"
        />
        <Flex flexDir="column" marginTop="1rem">
          <Heading as="h2" size="xl">
            MOVIE TITLE
          </Heading>
          <Heading as="h3" size="sm" marginTop="1rem">
            MOVIE MINUTES + RATING
          </Heading>
          <Box w="200px" h="50px" border="1px solid black" marginTop="1rem">
            LINK INFO CARD
          </Box>
          <Box
            marginTop="1rem"
            borderTop="1px solid black"
            borderBottom="1px solid black"
            borderRadius="lg"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            quidem debitis praesentium. In aperiam soluta enim corporis iusto
            laboriosam excepturi dolores, culpa autem, eum repellendus!
            Perferendis porro tempora dicta eveniet!
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}

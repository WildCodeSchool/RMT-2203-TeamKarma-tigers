import React from "react";
import {
  Avatar,
  Container,
  Flex,
  Text,
  Box,
  HStack,
  Button,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import moment from "moment";

function CardReview({ review }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container
      h={{ sm: "22vh", md: "22vh", lg: "22vh", xl: "18vh" }}
      color="white"
      margin="0.5rem"
      padding="0.5rem"
      mb="2rem"
    >
      <Flex justifyContent="space-between">
        <HStack spacing="30px">
          <Avatar
            marginLeft="1rem"
            alignSelf="center"
            size="md"
            src={
              review.author_details.avatar_path === null ||
              review.author_details.avatar_path.includes("gravatar") === true
                ? `https://bit.ly/broken-link`
                : `https://image.tmdb.org/t/p/w500/${review.author_details.avatar_path}`
            }
            alt=""
          />
          <Flex flexDirection="column">
            <Text fontSize="xl">{review.author}</Text>
            <Text mb={2} fontSize="md" fontStyle="italic">
              {moment(review.updated_at).format("MMMM Do YYYY")}
            </Text>
          </Flex>
        </HStack>
        <Box display="flex" alignSelf="center" margin="0.5rem" width="30%">
          {review.author_details.rating === null
            ? null
            : Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    w={5}
                    h={5}
                    key={review.id}
                    color={
                      i < Math.round(review.author_details.rating / 2)
                        ? "teal.500"
                        : "gray.300"
                    }
                  />
                ))}
        </Box>
      </Flex>
      <Flex
        bg="#2b3543"
        h={{ sm: "16vh", md: "16vh", lg: "16vh", xl: "11vh" }}
        borderRadius="8px"
        justifyContent="center"
        mt="0.5rem"
      >
        {isOpen ? null : (
          <Text fontSize="sm" margin="0.9rem" lineHeight="1.7" noOfLines="auto">
            {review.content}
          </Text>
        )}

        {isOpen || `${review.content.length}` < 300 ? null : (
          <Button
            onClick={onToggle}
            alignSelf="flex-end"
            justifySelf="flex-end"
            color="#15141f"
            h={7}
            mb="0.5rem"
            mr="0.5rem"
          >
            More
          </Button>
        )}

        <Collapse in={isOpen}>
          <Box
            margin=".5rem"
            h={{ sm: "14vh", md: "14vh", lg: "14vh", xl: "9vh" }}
            scrollBehavior="smooth"
            overflowY="auto"
            sx={{
              "&::-webkit-scrollbar": {
                width: "14px",
                borderRadius: "8px",
                backgroundColor: "white",
              },
              "&::-webkit-scrollbar-thumb": {
                borderRadius: "5.9px",
                backgroundColor: "#15141f",
              },
            }}
          >
            <Text
              fontSize="sm"
              marginLeft="1rem"
              marginRight="1rem"
              marginBottom="1rem"
              lineHeight="1.7"
            >
              {review.content}
            </Text>
            <Button onClick={onToggle} color="#15141f" h={7} mb="0.5rem">
              Less
            </Button>
          </Box>
        </Collapse>
      </Flex>
    </Container>
  );
}
export default CardReview;

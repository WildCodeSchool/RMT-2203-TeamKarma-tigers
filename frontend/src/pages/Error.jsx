import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import fond404 from "../assets/fond_404.jpg";

function Error() {
  return (
    <div>
      <Header isOnHome={false} />
      <Box bgColor="#15141f" w="100vw" h="73vh">
        <Flex justifyContent="center">
          <Text
            position="absolute"
            zIndex="1"
            color="white"
            padding="2rem"
            fontSize="3xl"
          >
            &ldquo;I don&apos;t believe there is a good or bad situation&rdquo;
            &hellip; however this page cannot be found
          </Text>
        </Flex>
        <Image
          position="absolute"
          left="4rem"
          right="4rem"
          zIndex="0"
          src={fond404}
          objectFit="contain"
          w="87vw"
          h="73vh"
        />
        <Text
          position="absolute"
          zIndex="1"
          top="50%"
          left="20%"
          right="60%"
          color="white"
          fontSize="3xl"
          transform="rotate(-11deg)"
        >
          Error 404, Page not found !
        </Text>
      </Box>
      <Footer />
    </div>
  );
}
export default Error;

import React from "react";
import {
  Text,
  Image,
  Flex,
  SkeletonCircle,
  Heading,
  Box,
} from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img404 from "../assets/img404.png";

function Error() {
  return (
    <Box bg="#15141f">
      <Header isOnHome={false} />
      <Flex
        bgColor="#15141f"
        h="75.9vh"
        flexDirection="column"
        justifyContent="space-around"
      >
        <Flex
          h="80%"
          justifyContent="space-between"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Image
            alignSelf="center"
            src={img404}
            objectFit="contain"
            w={{
              base: "40%",
              lg: "50%",
              xl: "60%",
            }}
            h="100%"
          />
          <Flex
            flexDirection="column"
            justifyContent="space-around"
            h={{ lg: "60%", xl: "auto" }}
            alignSelf={{ lg: "center" }}
          >
            <Flex
              alignSelf={{ base: "center", lg: "flex-start" }}
              padding="2rem"
              h="30%"
            >
              <Heading
                paddingRight="1.5rem"
                fontSize={{
                  base: "6xl",
                  sm: "7xl",
                  xl: "9xl",
                }}
                color="white"
                alignSelf="center"
              >
                PAGE
              </Heading>
              <Heading
                paddingRight="0.5rem"
                fontSize={{
                  base: "6xl",
                  sm: "7xl",
                  xl: "9xl",
                }}
                color="white"
                alignSelf="center"
              >
                4
              </Heading>
              <SkeletonCircle
                mt={{
                  base: "0.5rem",
                  sm: "0.5rem",
                  xl: "1rem",
                }}
                startColor="white"
                endColor="#15141f"
                size={{
                  base: "50px",
                  sm: "60px",
                  xl: "110px",
                }}
                alignSelf="center"
                speed="1.5"
              />
              <Heading
                paddingLeft="0.5rem"
                fontSize={{
                  base: "6xl",
                  sm: "7xl",
                  xl: "9xl",
                }}
                color="white"
                alignSelf="center"
              >
                4
              </Heading>
            </Flex>
            <Flex
              alignSelf={{ base: "center", lg: "flex-start" }}
              h="60%"
              alignItems="center"
              width="90%"
            >
              <Text
                color="white"
                padding="2rem"
                fontSize={{
                  base: "2xl",
                  sm: "4xl",
                  xl: "5xl",
                }}
                align="justify"
              >
                &ldquo;I don&apos;t believe there is a good or bad
                situation&rdquo; &hellip; however this page cannot be found
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
}
export default Error;

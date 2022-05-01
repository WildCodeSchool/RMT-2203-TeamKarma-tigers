import React from "react";
import { Text, Image, Flex, SkeletonCircle, Heading } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img404 from "../assets/img404.png";

function Error() {
  return (
    <div>
      <Header isOnHome={false} />
      <Flex
        bgColor="#15141f"
        h="75.9vh"
        flexDirection="column"
        justifyContent="space-around"
      >
        <Flex alignSelf="center" marginTop="2rem">
          <Heading paddingRight="1.5rem" fontSize="6xl" color="white">
            PAGE
          </Heading>
          <Heading
            paddingRight="0.5rem"
            fontSize="6xl"
            color="white"
            alignSelf="center"
          >
            4
          </Heading>
          <SkeletonCircle
            startColor="white"
            endColor="#15141f"
            size="60px"
            alignSelf="center"
            speed="1.5"
          />
          {/* <CircularProgress isIndeterminate color="#15141f" size="70px" /> */}
          <Heading paddingLeft="0.5rem" fontSize="6xl" color="white">
            4
          </Heading>
        </Flex>
        <Flex h="80%" justifyContent="space-between">
          <Image
            alignSelf="center"
            src={img404}
            objectFit="contain"
            w="60%"
            h="100%"
          />
          <Text color="white" padding="2rem" fontSize="4xl" alignSelf="center">
            &ldquo;I don&apos;t believe there is a good or bad situation&rdquo;
            &hellip; however this page cannot be found
          </Text>
        </Flex>
      </Flex>
      <Footer />
    </div>
  );
}
export default Error;

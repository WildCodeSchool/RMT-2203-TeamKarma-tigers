import React from "react";
import { Text, Image, Flex, SkeletonCircle } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import fond404 from "../assets/fond_404.jpg";

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
          <Text paddingRight="1rem" fontSize="7xl" color="white">
            PAGE
          </Text>
          <Text
            paddingRight="0.5rem"
            fontSize="7xl"
            color="white"
            alignSelf="center"
          >
            4
          </Text>
          <SkeletonCircle
            startColor="white"
            endColor="#15141f"
            size="70px"
            alignSelf="center"
            speed="1.5"
          />
          {/* <CircularProgress isIndeterminate color="#15141f" size="70px" /> */}
          <Text paddingLeft="0.5rem" fontSize="7xl" color="white">
            4
          </Text>
        </Flex>
        <Flex h="80%" justifyContent="space-between">
          <Image
            alignSelf="center"
            opacity="0.5"
            src={fond404}
            objectFit="cover"
            w="50%"
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

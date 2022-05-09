import React from "react";
import {
  Flex,
  Text,
  LinkBox,
  LinkOverlay,
  Button,
  Image,
} from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

import footerImg from "../assets/footerImg.png";
import gitHubIcon from "../assets/gitHubIcon.png";
import chackaui from "../assets/chakraui.png";
import react from "../assets/react.png";
import wild from "../assets/wild.png";

export default function Footer() {
  return (
    <Flex
      borderTop="2px"
      color="white"
      bgColor="#15141f"
      bgPosition="center"
      height={{
        base: "180px",
        sm: "300px",
        xl: "190px",
      }}
      justifyContent="space-around"
    >
      <Image
        src={footerImg}
        width={{
          base: "90px",
          sm: "160px",
          md: "200px",
          lg: "300px",
          xl: "180px",
        }}
        alignSelf="center"
        objectFit="contain"
      />
      <Flex
        justifyContent={{
          base: "space-around",
          xl: "space-between",
        }}
        width="60%"
        height={{ base: "90%", sm: "100%" }}
        alignSelf="center"
        flexDirection={{
          base: "column",
          xl: "row",
        }}
      >
        <Flex
          justifyContent="space-around"
          alignSelf="center"
          flexDirection="column"
          height={{
            base: "50%",
            xl: "90%",
          }}
          width={{
            base: "100%",
            xl: "55%",
          }}
        >
          <Text
            color="white"
            as="ins"
            fontSize={{
              base: "xl",
              sm: "2xl",
              lg: "4xl",
            }}
            fontStyle="italic"
            alignSelf="center"
          >
            Directed by:
          </Text>
          <Flex
            alignSelf="center"
            justifyContent="center"
            flexWrap={{ base: "wrap", md: "nowrap" }}
          >
            <LinkBox>
              <LinkOverlay href="https://github.com/JulieCombeau">
                <Text
                  width="95%"
                  color="white"
                  fontSize={{
                    base: "xs",
                    sm: "sm",
                    md: "xl",
                  }}
                  fontStyle="italic"
                  alignSelf="center"
                >
                  Marie Serradori
                </Text>
              </LinkOverlay>
            </LinkBox>
            <LinkBox justifyContent="space-between">
              <LinkOverlay href="https://github.com/Pyramate">
                <Text
                  width="95%"
                  color="white"
                  fontSize={{
                    base: "xs",
                    sm: "sm",
                    md: "xl",
                  }}
                  fontStyle="italic"
                  alignSelf="center"
                >
                  Julie Combeau
                </Text>
              </LinkOverlay>
            </LinkBox>
            <LinkBox justifyContent="space-between">
              <LinkOverlay href="https://github.com/moumax">
                <Text
                  width="95%"
                  color="white"
                  fontSize={{
                    base: "xs",
                    sm: "sm",
                    md: "xl",
                  }}
                  fontStyle="italic"
                  alignSelf="center"
                >
                  Marc Lantol
                </Text>
              </LinkOverlay>
            </LinkBox>
            <LinkBox justifyContent="space-between">
              <LinkOverlay href="https://github.com/kaitolight">
                <Text
                  width="95%"
                  color="white"
                  fontSize={{
                    base: "xs",
                    sm: "sm",
                    md: "xl",
                  }}
                  fontStyle="italic"
                  alignSelf="center"
                >
                  Alexandre Pilias
                </Text>
              </LinkOverlay>
            </LinkBox>
            <LinkBox justifyContent="space-between">
              <LinkOverlay href="https://github.com/Robz53">
                <Text
                  width="95%"
                  color="white"
                  fontSize={{
                    base: "xs",
                    sm: "sm",
                    md: "xl",
                  }}
                  fontStyle="italic"
                  alignSelf="center"
                >
                  Robin Renée
                </Text>
              </LinkOverlay>
            </LinkBox>
          </Flex>
        </Flex>
        <Flex
          justifyContent="space-around"
          height={{
            base: "50%",
            xl: "90%",
          }}
          alignSelf="center"
          flexDirection="column"
          width={{
            base: "90%",
            md: "70%",
            lg: "60%",
            xl: "40%",
            "2xl": "40%",
          }}
        >
          <Text
            color="white"
            as="ins"
            fontSize={{
              base: "xl",
              sm: "2xl",
              lg: "4xl",
            }}
            fontStyle="italic"
            alignSelf="center"
          >
            Partners media:
          </Text>
          <Flex justifyContent="space-between">
            <LinkBox>
              <LinkOverlay href="https://www.wildcodeschool.com/fr-FR">
                <Image
                  src={wild}
                  height={{
                    base: "1.5rem",
                    sm: "2rem",
                    lg: "3rem",
                  }}
                />
              </LinkOverlay>
            </LinkBox>
            <LinkBox>
              <LinkOverlay href="https://github.com/">
                <Image
                  src={gitHubIcon}
                  height={{
                    base: "1.5rem",
                    sm: "2rem",
                    lg: "3rem",
                  }}
                />
              </LinkOverlay>
            </LinkBox>
            <LinkBox>
              <LinkOverlay href="https://reactjs.org/">
                <Image
                  src={react}
                  height={{
                    base: "1.5rem",
                    sm: "2rem",
                    lg: "3rem",
                  }}
                />
              </LinkOverlay>
            </LinkBox>
            <LinkBox>
              <LinkOverlay href="https://chakra-ui.com/">
                <Image
                  src={chackaui}
                  height={{
                    base: "1.5rem",
                    sm: "2rem",
                    lg: "3rem",
                  }}
                />
              </LinkOverlay>
            </LinkBox>
          </Flex>
        </Flex>
      </Flex>
      <LinkBox justify="flex-end" alignSelf="center">
        <LinkOverlay href="#">
          <Button
            variant="solid"
            borderRadius="100%"
            w={{ base: 5, sm: 12, lg: 16 }}
            h={{ base: 9, sm: 12, lg: 16 }}
          >
            <ArrowUpIcon
              w={{ base: 7, sm: 10, lg: 14 }}
              h={{ base: 9, sm: 10, lg: 14 }}
              color="#15141f"
            />
          </Button>
        </LinkOverlay>
      </LinkBox>
    </Flex>
  );
}

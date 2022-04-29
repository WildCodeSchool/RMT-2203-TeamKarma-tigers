import React from "react";
import {
  Flex,
  Text,
  LinkBox,
  LinkOverlay,
  Button,
  Image,
  Avatar,
} from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

import tigerLogo from "../assets/tiger-logo.jpg";
import gitHubIcon from "../assets/gitHubIcon.png";

export default function Footer() {
  return (
    <Flex
      borderTop="2px"
      color="white"
      flexDirection="row"
      bgColor="#15141f"
      bgPosition="center"
      height="120px"
      opacity="0.9"
      justifyContent="space-around"
    >
      <Flex flexDirection="column" justifyContent="space-around" width="100px">
        <Text color="white" alignSelf="center">
          TITRE PROJET
        </Text>
        <Image src={tigerLogo} width="70px" alignSelf="center" />
      </Flex>
      <Flex justifyContent="space-between">
        <Flex flexDirection="column" justifyContent="space-around">
          <Text color="white" width="90%" alignSelf="center">
            Julie Combeau
          </Text>
          <LinkBox justifyContent="space-between">
            <LinkOverlay href="https://github.com/JulieCombeau">
              <Avatar bg="#15141f" src={gitHubIcon} />
            </LinkOverlay>
          </LinkBox>
        </Flex>
        <Flex flexDirection="column" justifyContent="space-around">
          <Text color="white" width="90%" alignSelf="center">
            Marie Serradori
          </Text>
          <LinkBox justifyContent="space-between">
            <LinkOverlay href="https://github.com/Pyramate">
              <Avatar bg="#15141f" src={gitHubIcon} />
            </LinkOverlay>
          </LinkBox>
        </Flex>
        <Flex flexDirection="column" justifyContent="space-around">
          <Text color="white" width="90%" alignSelf="center">
            Marc Lantol
          </Text>
          <LinkBox justifyContent="space-between">
            <LinkOverlay href="https://github.com/moumax">
              <Avatar bg="#15141f" src={gitHubIcon} />
            </LinkOverlay>
          </LinkBox>
        </Flex>
        <Flex flexDirection="column" justifyContent="space-around">
          <Text color="white" width="90%" alignSelf="center">
            Alexandre Pilias
          </Text>
          <LinkBox justifyContent="space-between">
            <LinkOverlay href="https://github.com/kaitolight">
              <Avatar bg="#15141f" src={gitHubIcon} />
            </LinkOverlay>
          </LinkBox>
        </Flex>
        <Flex flexDirection="column" justifyContent="space-around">
          <Text color="white" width="90%" alignSelf="center">
            Robin Renée
          </Text>
          <LinkBox justifyContent="space-between">
            <LinkOverlay href="https://github.com/Robz53">
              <Avatar bg="#15141f" src={gitHubIcon} />
            </LinkOverlay>
          </LinkBox>
        </Flex>
      </Flex>
      <LinkBox justify="flex-end" alignSelf="center">
        <LinkOverlay href="/#">
          <Button variant="solid" borderRadius="100%" w={12} h={12}>
            <ArrowUpIcon w={10} h={10} color="#15141f" />
          </Button>
        </LinkOverlay>
      </LinkBox>
    </Flex>
  );
}

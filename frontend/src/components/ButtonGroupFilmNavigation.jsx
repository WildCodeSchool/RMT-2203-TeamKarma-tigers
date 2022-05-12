import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import CardReviewCarousel from "./CardReviewCarousel";
import CardDetailSynopsis from "./CardDetailSynopsis";
import CardCastingCarousel from "./Casting/CardCastingCarousel";
import MovieVideoCarousel from "./MovieVideoCarousel";

export default function ButtonGroupFilmNavigation({ movie }) {
  return (
    <Tabs
      variant="solid-rounded"
      colorScheme="red"
      isFitted
      w="100%"
      m="0 auto"
      marginTop="1rem"
    >
      <TabList
        border="1px"
        borderColor="#313D4D"
        variant="solid-rounded"
        borderRadius="3xl"
        p={1}
        _focus={{
          borderColor: "teal",
        }}
      >
        <Tab fontSize={{ base: "sm", sm: "md", md: "xl" }}>Synopsis</Tab>
        <Tab fontSize={{ base: "sm", sm: "md", md: "xl" }}>Casting</Tab>
        <Tab fontSize={{ base: "sm", sm: "md", md: "xl" }}>Reviews</Tab>
        <Tab fontSize={{ base: "sm", sm: "md", md: "xl" }}>Trailers</Tab>
      </TabList>

      <TabPanels>
        <TabPanel mt={{ base: "0.5rem", sm: "1rem", md: "2rem" }} p="0">
          <CardDetailSynopsis movie={movie} />
        </TabPanel>
        <TabPanel mt={{ base: "0.5rem", sm: "1rem", md: "1.5rem" }} p="0">
          <CardCastingCarousel movie={movie} />
        </TabPanel>
        <TabPanel
          mt={{ base: "0.5rem", sm: "1rem", md: "2rem", lg: "1rem" }}
          p="0"
        >
          <CardReviewCarousel movie={movie} />
        </TabPanel>
        <TabPanel mt={{ base: "0.5rem", sm: "1rem", md: "2rem" }} p="0">
          <MovieVideoCarousel movie={movie} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

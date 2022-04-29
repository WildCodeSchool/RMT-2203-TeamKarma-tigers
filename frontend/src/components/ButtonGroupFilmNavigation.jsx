import {
  // Button,
  // Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

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
      minW="90%"
      margin="0 auto"
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
        <Tab>Synopsis</Tab>
        <Tab>Casting</Tab>
        <Tab>Reviews</Tab>
        <Tab>Trailers</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <CardDetailSynopsis movie={movie} />
        </TabPanel>
        <TabPanel>
          <CardCastingCarousel movie={movie} />
        </TabPanel>
        <TabPanel>
          <CardReviewCarousel movie={movie} />
        </TabPanel>
        <TabPanel>
          <MovieVideoCarousel movie={movie} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

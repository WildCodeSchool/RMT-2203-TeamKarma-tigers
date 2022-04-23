import {
  // Button,
  // Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

// import { useState } from "react";
import CardReviewCarousel from "./CardReviewCarousel";
import CardDetailSynopsis from "./CardDetailSynopsis";
import CardCastingCarousel from "./Casting/CardCastingCarousel";
import MovieVideoCarousel from "./MovieVideoCarousel";

export default function ButtonGroupFilmNavigation({ movie }) {
  // const [isActive, setIsActive] = useState("Synopsis");
  // const buttonNames = ["Synopsis", "Casting", "Reviews", "Trailers"];

  // const handleClick = (btnName) => {
  //   setIsActive(btnName);
  // };

  return (
    <Tabs variant="solid-rounded" colorScheme="red" isFitted>
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

    // <div>
    //     <Container
    //       isAttached
    //       border="1px"
    //       borderRadius="base"
    //       borderColor="gray.200"
    //     >
    //       {buttonNames.map((name, i) => (
    //         <Button
    //           key={buttonNames[i]}
    //           onClick={(e) => {
    //             e.preventDefault();
    //             handleClick(buttonNames[i]);
    //           }}
    //           variant={buttonNames[i] === isActive ? "solid" : "ghost"}
    //           colorScheme="teal"
    //         >
    //           {name}
    //         </Button>
    //       ))}
    //     </Container>

    //     {isActive === "Synopsis" && <CardDetailSynopsis movie={movie} />}
    //     {isActive === "Casting" && <CardCastingCarousel movie={movie} />}
    //     {isActive === "Reviews" && <CardReviewCarousel movie={movie} />}
    //     {isActive === "Trailers" && <MovieVideoCarousel movie={movie} />}
    //   </div>
  );
}

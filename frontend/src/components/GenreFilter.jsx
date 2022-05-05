import { useState, useEffect } from "react";
import {
  Select,
  Box,
  Flex,
  Heading,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderMark,
} from "@chakra-ui/react";

import getGenreList from "../services/GetGenreList";

export default function GenreFilter({ setGenreFilter, setRating }) {
  const [dropDownGenre, setDropDownGenre] = useState([]);
  const [sliderValue, setSliderValue] = useState([0, 10]);

  useEffect(() => {
    getGenreList().then((result) => setDropDownGenre(result));
  }, []);

  const filterByGenre = (e) => {
    if (parseInt(e.target.value, 10)) {
      setGenreFilter(parseInt(e.target.value, 10));
    } else {
      setGenreFilter("");
    }
  };
  const filterByRating = () => {
    setRating(sliderValue);
  };

  return (
    <Flex
      pos="sticky"
      p={10}
      marginTop="2.5vh"
      marginLeft={{ base: "2.5vh" }}
      marginRight={{ base: "2.5vh" }}
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w={{ xl: "20vw" }}
      minW="20%"
      h={{ base: "60vh", sm: "30vh", md: "30vh", lg: "30vh", xl: "100vh" }}
      gap={10}
      bg="white"
      borderRadius="md"
      flexDir={{
        base: "column",
        sm: "row",
        xl: "column",
      }}
      justifyContent={{ base: "space-around", xl: "flex-start" }}
      align="flex-start"
    >
      <Flex
        flexDir="column"
        w={{ base: "75vw", md: "30vw", lg: "45vw", xl: "15vw" }}
      >
        <Heading
          as="h5"
          color="#15141f"
          textAlign="left"
          pb={5}
          borderBottom="1px solid #eee"
          width="100%"
        >
          Filters
        </Heading>
        <Select
          size="lg"
          color="#15141f"
          width="100%"
          variant="filled"
          onChange={filterByGenre}
          mt={{ base: "2vh" }}
        >
          <option value={0}>All Genres</option>
          {dropDownGenre.map((genre) => (
            <option value={genre.id}>{genre.name}</option>
          ))}
        </Select>
      </Flex>
      <Flex
        flexDir="column"
        w={{ base: "65vw", md: "30vw", lg: "45vw", xl: "15vw" }}
      >
        <Heading
          as="h6"
          color="#15141f"
          textAlign="left"
          pb={5}
          borderBottom="1px solid #eee"
          width="100%"
        >
          Ratings
        </Heading>
        <RangeSlider
          mt="50px"
          defaultValue={[0, 10]}
          min={0}
          max={10}
          onChange={(val) => {
            const newVal = setSliderValue(val);
            filterByRating(newVal);
          }}
        >
          <RangeSliderMark value={0} mt="3" ml="-2.5" fontSize="sm">
            0
          </RangeSliderMark>
          <RangeSliderMark value={2} mt="3" ml="-2.5" fontSize="sm">
            2
          </RangeSliderMark>
          <RangeSliderMark value={4} mt="3" ml="-2.5" fontSize="sm">
            4
          </RangeSliderMark>
          <RangeSliderMark value={6} mt="3" ml="-2.5" fontSize="sm">
            6
          </RangeSliderMark>
          <RangeSliderMark value={8} mt="3" ml="-2.5" fontSize="sm">
            8
          </RangeSliderMark>
          <RangeSliderMark value={10} mt="3" ml="-2.5" fontSize="sm">
            10
          </RangeSliderMark>
          <RangeSliderMark
            value={sliderValue[0]}
            textAlign="center"
            bg="teal.500"
            color="white"
            borderRadius="md"
            mt="-12"
            ml="-5"
            p="3px"
            w="12"
          >
            {sliderValue[0]}
          </RangeSliderMark>
          <RangeSliderMark
            value={sliderValue[1]}
            textAlign="center"
            bg="teal.500"
            color="white"
            borderRadius="md"
            mt="-12"
            ml="-5"
            p="3px"
            w="12"
          >
            {sliderValue[1]}
          </RangeSliderMark>
          <RangeSliderTrack h="10px" bg="teal.100">
            <RangeSliderFilledTrack bg="teal.400" />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0}>
            <Box color="teal.400" />
          </RangeSliderThumb>
          <RangeSliderThumb boxSize={6} index={1}>
            <Box color="teal.400" />
          </RangeSliderThumb>
        </RangeSlider>
      </Flex>
    </Flex>
  );
}

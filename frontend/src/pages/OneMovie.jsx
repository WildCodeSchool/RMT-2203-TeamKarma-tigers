import { React } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import CardDetailOverall from "../components/CardDetailOverall";

export default function OneMovie() {
  const { movieid } = useParams();

  return (
    <Box bg="#15141f" minH="100vh">
      <Header isOnHome={false} />
      <CardDetailOverall movie={movieid} />
      <Footer />
    </Box>
  );
}

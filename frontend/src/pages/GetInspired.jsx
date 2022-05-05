import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function GetInspired() {
  return (
    <Box bg="#15141f">
      <Header isOnHome={false} />
      <p>Page inpired</p>
      <Footer />
    </Box>
  );
}

export default GetInspired;

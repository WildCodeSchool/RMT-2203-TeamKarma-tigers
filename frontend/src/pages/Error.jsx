import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Error() {
  return (
    <div>
      <Header isOnHome={false} />
      <Box bg="#15141f" color="white" h="100vh">
        <p>page 404</p>
        {/* Importer movie carousel filtered by the query */}
      </Box>
      <Footer />
    </div>
  );
}
export default Error;

import React from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function GetInspired() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <Box bg="#15141f">
        <Header isOnHome={false} />
        <p>Page inpired</p>
        <Footer />
      </Box>
    </motion.div>
  );
}

export default GetInspired;

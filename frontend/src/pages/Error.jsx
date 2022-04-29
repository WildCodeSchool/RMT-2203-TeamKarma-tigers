import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Error() {
  return (
    <div>
      <Header />
      <p>page 404</p>
      {/* Importer movie carousel filtered by the query */}
      <Footer />
    </div>
  );
}
export default Error;

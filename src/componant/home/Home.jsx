import React from "react";
import AllProduct from "./AllProduct";
import Banner from "./Banner";
import Contact from "./Contact";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllProduct></AllProduct>
      <Services></Services>
      <Contact></Contact>
    </div>
  );
};

export default Home;

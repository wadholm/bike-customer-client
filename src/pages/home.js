import React from "react";
import Payment from "../components/payment/payment";
import Travels from "../components/travels/travels";

const Home = (props) => {
  return (
    <>
      <h3 className="mt-3" data-testid="home">
        Home
      </h3>
      <Payment />
      <Travels />
    </>
  );
};

export default Home;

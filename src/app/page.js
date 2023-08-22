import CardsContainer from "@/components/cardsContainer/CardsContainer";
import Filter from "@/components/filter/Filter";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div style={{ margin: "30px 0" }}>
        <div
          style={{
            width: "94%",
            margin: "auto",
            display: "flex",
            gap: "30px",
          }}
        >
          <Filter />
          <CardsContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;

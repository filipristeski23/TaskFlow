import React from "react";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import MainDashboard from "../components/MainDashboard";
import Motivation from "../components/Motivation";

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

function HomePage() {
  return (
    <Div>
      <SearchBar />
      <MainDashboard />
      <Motivation />
    </Div>
  );
}

export default HomePage;

import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

const Div = styled.div`
  width: 100%;
  height: 15%;
  padding-bottom: 20px;
`;

const DivWrapper = styled.div`
  max-width: 85rem;
  margin: 0 auto;
  border-radius: 30px;
  background-color: #c8f8cd;
`;

const H3 = styled.h3`
  font-size: 20px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: center;
`;

function Motivation() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://gomezmig03.github.io/MotivationalAPI/en.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to retrieve data from the server.");
        }
        return response.json();
      })
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const phrase = data[randomIndex].phrase;
        setQuote(phrase);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <Div>
      <DivWrapper>
        <H3>{quote}</H3>
      </DivWrapper>
    </Div>
  );
}

export default Motivation;

import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 25%;
  padding-bottom: 20px;
`;

const DivWrapper = styled.div`
  max-width: 85rem;
  margin: 0 auto;
  border-radius: 30px;
  background-color: #c8f8cd;
`;

const H3 = styled.h3`
  font-size: 25px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Motivation() {
  return (
    <Div>
      <DivWrapper>
        <H3>The motivation goes here</H3>
      </DivWrapper>
    </Div>
  );
}

export default Motivation;

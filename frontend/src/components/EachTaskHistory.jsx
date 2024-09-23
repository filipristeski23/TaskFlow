import React from "react";
import styled from "styled-components";
import Check from "../assets/Check.svg";
import clock from "../assets/clock.svg";

const Div = styled.div`
  max-width: 264px;
  height: auto;
  background-color: #d3d3d3;
  border-radius: 30px;
  position: relative;
`;

const DivWrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 25px;
`;

const H4 = styled.h4`
  font-size: 25px;
  font-weight: 500;
  height: auto;
  width: 100%;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const ImgCheck = styled.img`
  width: 40px;
  height: 40px;
`;

const ACheck = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  padding: 20px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 10px;
  margin-right: 10px;
`;

const DivTaskWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: auto;
`;

const H5 = styled.h5`
  display: flex;
  align-items: center;
  height: auto;
  text-decoration: none;
  font-size: 15px;
  color: black;
  font-weight: 500;
`;

const ClockDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

function EachTask() {
  return (
    <Div>
      <DivWrapper>
        <ACheck href="">
          <ImgCheck src={Check} />
        </ACheck>
        <DivTaskWrap>
          <H4>Code the tasks section</H4>
          <ClockDiv>
            <Img src={clock} />
            <H5>18 Feb 2024</H5>
          </ClockDiv>
        </DivTaskWrap>
      </DivWrapper>
    </Div>
  );
}

export default EachTask;

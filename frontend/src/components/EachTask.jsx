import React from "react";
import styled from "styled-components";
import clock from "../assets/clock.svg";
import Tick from "../assets/tick.svg";
import Bin from "../assets/bin.svg";
import Edit from "../assets/Edit.svg";
/* eslint-disable react/prop-types */

const Div = styled.div`
  min-width: 440px;
  height: auto;
  background-color: #f8dfc8;
  border-radius: 30px;
  position: relative;
`;

const DivWrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  padding-bottom: 25px;
`;

const H4 = styled.h4`
  font-size: 22px;
  font-weight: 600;
  height: auto;
  width: 100%;
  white-space: normal;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const ImgCheck = styled.img`
  width: 20px;
  height: 20px;
`;

const ACheck = styled.a`
  width: 50px;
  height: 50px;
  padding: 20px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const DivTaskWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
  padding: 0;
  height: auto;
  width: auto;
`;

const H6 = styled.h5`
  font-size: 15px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  height: auto;
  width: auto;
`;

const DivWrapText = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  gap: 10px;
`;

const DivWrapActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  height: 20%;
`;

function EachTask({ task }) {
  return (
    <Div>
      <DivWrapper>
        <DivTaskWrap>
          <DivWrapText>
            <H4>{task.title}t</H4>
            <H6>{task.description}</H6>
            <ClockDiv>
              <Img src={clock} />
              <H5>{task.dueDate}</H5>
            </ClockDiv>
          </DivWrapText>
          <DivWrapActions>
            <ACheck href="">
              <ImgCheck src={Tick} />
            </ACheck>
            <ACheck href="">
              <ImgCheck src={Edit} />
            </ACheck>
            <ACheck href="">
              <ImgCheck src={Bin} />
            </ACheck>
          </DivWrapActions>
        </DivTaskWrap>
      </DivWrapper>
    </Div>
  );
}

export default EachTask;

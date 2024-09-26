import React from "react";
import styled from "styled-components";
import clock from "../assets/clock.svg";
/* eslint-disable react/prop-types */

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

const DivWrapText = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  gap: 10px;
`;

const H6 = styled.h5`
  font-size: 15px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  height: auto;
  width: auto;
`;

function EachTaskHistory({ task }) {
  return (
    <Div>
      <DivWrapper>
        <DivTaskWrap>
          <DivWrapText>
            <H4>{task.title}</H4>
            <H6>{task.description}</H6>
            <ClockDiv>
              <Img src={clock} />
              <H5>{task.dueDate}</H5>
            </ClockDiv>
          </DivWrapText>
        </DivTaskWrap>
      </DivWrapper>
    </Div>
  );
}

export default EachTaskHistory;

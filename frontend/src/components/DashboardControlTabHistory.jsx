import React from "react";
import styled from "styled-components";
import LeftArrow from "../assets/LeftArrow.svg";
import RightArrow from "../assets/RightArrow.svg";
import HistoryImg from "../assets/HistoryImg.svg";
import ReportsImg from "../assets/ReportsImg.svg";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */

const Div = styled.div`
  width: 100%;
  height: 20%;
`;

const DivWrapper = styled.div`
  max-width: 85rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DivDashboard = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;
`;

const DivArrows = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

const H3 = styled.h3`
  font-size: 2.188rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DivAddTask = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.875rem;
`;

const A = styled.a`
  height: 40%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 0.625rem;
  color: white;
  padding-top: 0.18rem;
  padding-bottom: 0.18rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  text-decoration: none;
  cursor: pointer;
  font-size: 0.9rem;
`;

const DivWrapperReports = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  gap: 1.875rem;
`;

const DivWrapperHistory = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.313rem;
  align-items: center;
  width: auto;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: underline;
  width: auto;
  color: black;
  height: auto;
`;

const DivWrapperCheckReports = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.313rem;
  align-items: center;
  width: auto;
`;

const ImgNew = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  cursor: pointer;
`;

function DashboardControlTab({ toggleDashboardNewItemWindowOpen }) {
  return (
    <Div>
      <DivWrapper>
        <DivDashboard>
          <H3>History</H3>
          <DivArrows>
            <Img src={LeftArrow} alt="Left Arrow" />
            <Img src={RightArrow} alt="Right Arrow" />
          </DivArrows>
        </DivDashboard>
        <DivAddTask>
          <DivWrapperReports>
            <DivWrapperCheckReports>
              <StyledLink to="/dashboard">All Tasks</StyledLink>
            </DivWrapperCheckReports>
            <DivWrapperHistory>
              <ImgNew src={HistoryImg} alt="History" />
              <StyledLink to="/dashboard/history">History</StyledLink>
            </DivWrapperHistory>
            <DivWrapperCheckReports>
              <ImgNew src={ReportsImg} alt="Check Reports" />
              <StyledLink to="/dashboard/reports">Reports</StyledLink>
            </DivWrapperCheckReports>
          </DivWrapperReports>
          <A onClick={toggleDashboardNewItemWindowOpen}>New Task</A>
        </DivAddTask>
      </DivWrapper>
    </Div>
  );
}

export default DashboardControlTab;

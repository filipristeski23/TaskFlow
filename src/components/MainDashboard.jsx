import React from "react";
import styled from "styled-components";
import DashboardControlTab from "./DashboardControlTab";

const Div = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f8f9f7;
`;

function MainDashboard() {
  return (
    <Div>
      <DashboardControlTab />
    </Div>
  );
}

export default MainDashboard;

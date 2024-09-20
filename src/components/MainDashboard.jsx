import React, { useState } from "react";
import styled from "styled-components";
import DashboardControlTab from "./DashboardControlTab";
import DashboardAddNewItem from "./DashboardAddNewItem";

const Div = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f8f9f7;
  overflow: hidden;
`;

function MainDashboard() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDashboardNewItemWindowOpen = () => {
    setIsVisible(true);
  };

  const toggleDashboardNewItemWindowClose = () => {
    setIsVisible(false);
  };

  return (
    <Div>
      <DashboardControlTab
        toggleDashboardNewItemWindowOpen={toggleDashboardNewItemWindowOpen}
      />
      <DashboardAddNewItem
        isVisible={isVisible}
        toggleDashboardNewItemWindowClose={toggleDashboardNewItemWindowClose}
      />
    </Div>
  );
}

export default MainDashboard;

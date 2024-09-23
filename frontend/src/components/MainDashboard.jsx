import React, { useState } from "react";
import styled from "styled-components";
import DashboardControlTabHistory from "./DashboardControlTabHistory";
import DashboardAddNewItem from "./DashboardAddNewItem";
import DashboardReportsSection from "./DashboardReportsSection";

const Div = styled.div`
  height: 65%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
      <DashboardControlTabHistory
        toggleDashboardNewItemWindowOpen={toggleDashboardNewItemWindowOpen}
      />
      <DashboardReportsSection></DashboardReportsSection>
      <DashboardAddNewItem
        isVisible={isVisible}
        toggleDashboardNewItemWindowClose={toggleDashboardNewItemWindowClose}
      />
    </Div>
  );
}

export default MainDashboard;

import React, { useState } from "react";
import styled from "styled-components";
import DashboardControlTab from "./DashboardControlTab";
import DashboardAddNewItem from "./DashboardAddNewItem";
import DashboardItemsSection from "./DashboardItemsSection";
import { useRef } from "react";

const Div = styled.div`
  height: 65%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #f8f9f7;
`;

function MainDashboard() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDashboardNewItemWindowOpen = () => {
    setIsVisible(true);
  };

  const toggleDashboardNewItemWindowClose = () => {
    setIsVisible(false);
  };

  const itemsRef = useRef(null);

  const scrollAmount = 1380;

  const moveLeft = () => {
    if (itemsRef.current) {
      itemsRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const moveRight = () => {
    if (itemsRef.current) {
      itemsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <Div>
      <DashboardControlTab
        toggleDashboardNewItemWindowOpen={toggleDashboardNewItemWindowOpen}
        moveLeft={moveLeft}
        moveRight={moveRight}
      />
      <DashboardItemsSection ref={itemsRef} />
      <DashboardAddNewItem
        isVisible={isVisible}
        toggleDashboardNewItemWindowClose={toggleDashboardNewItemWindowClose}
      />
    </Div>
  );
}

export default MainDashboard;

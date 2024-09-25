import React from "react";
import styled from "styled-components";
import EachTask from "./EachTask";

const Div = styled.div`
  width: 100%;
  height: 60%;
  overflow: hidden;
`;

const DivWrapper = styled.div`
  max-width: 85rem;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: auto;
  overflow-y: hidden;
`;

function DashboardItemsSection() {
  return (
    <Div>
      <DivWrapper>
        <EachTask />
        <EachTask />
        <EachTask />
        <EachTask />
        <EachTask />
        <EachTask />
        <EachTask />
        <EachTask />
        <EachTask />
      </DivWrapper>
    </Div>
  );
}

export default DashboardItemsSection;

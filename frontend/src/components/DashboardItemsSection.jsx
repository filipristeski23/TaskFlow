import React, { forwardRef } from "react";
import styled from "styled-components";
import EachTask from "./EachTask";

const Div = styled.div`
  width: 100%;
  height: 80%;
`;

const DivWrapper = styled.div`
  max-width: 85rem;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const DashboardItemsSection = forwardRef((props, ref) => {
  return (
    <Div>
      <DivWrapper ref={ref}>
        <EachTask />
        <EachTask />
        <EachTask />
        <EachTask />
        <EachTask />
        <EachTask />
        <EachTask />
        <EachTask />
        <EachTask />
        <EachTask />
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
});

DashboardItemsSection.displayName = "DashboardItemsSection";

export default DashboardItemsSection;

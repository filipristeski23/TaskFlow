import React from "react";
import styled from "styled-components";
import EachTaskHistory from "./EachTaskHistory";

const Div = styled.div`
  width: 100%;
  height: 60%;
`;

const DivWrapper = styled.div`
  max-width: 85rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

function DashboardHistorySection() {
  return (
    <Div>
      <DivWrapper>
        <EachTaskHistory />
        <EachTaskHistory />
        <EachTaskHistory />
        <EachTaskHistory />
        <EachTaskHistory />
      </DivWrapper>
    </Div>
  );
}

export default DashboardHistorySection;

import React from "react";
import styled from "styled-components";

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
      <DivWrapper></DivWrapper>
    </Div>
  );
}

export default DashboardHistorySection;

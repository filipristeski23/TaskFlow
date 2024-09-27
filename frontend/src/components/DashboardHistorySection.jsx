import React from "react";
import styled from "styled-components";
import EachTaskHistory from "./EachTaskHistory";
import { useState } from "react";
import { useEffect } from "react";

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
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/task/history")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <Div>
      <DivWrapper>
        {tasks.map((task) => (
          <EachTaskHistory key={task.id} task={task} />
        ))}
      </DivWrapper>
    </Div>
  );
}

export default DashboardHistorySection;

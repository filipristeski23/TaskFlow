import React, { forwardRef } from "react";
import styled from "styled-components";
import EachTask from "./EachTask";
import { useState } from "react";
import { useEffect } from "react";

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
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:8080/user/tasks");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error fetching tasks: {error}</p>;

  return (
    <Div>
      <DivWrapper ref={ref}>
        {tasks.map((task, index) => (
          <EachTask key={index} task={task} />
        ))}
      </DivWrapper>
    </Div>
  );
});

DashboardItemsSection.displayName = "DashboardItemsSection";

export default DashboardItemsSection;

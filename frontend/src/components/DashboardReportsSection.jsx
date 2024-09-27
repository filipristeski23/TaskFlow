import React, { useEffect, useState } from "react";
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
  height: 100%;
`;

const DivLine = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const H3 = styled.h3`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  height: auto;
  background-color: lightgreen;
`;

const H3H = styled.h3`
  width: auto;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  border-top: 1px solid black;
`;

const DivLineInside = styled.div`
  height: ${(props) => props.height || "auto"};
  background-color: lightgreen; // Just to make it visually clearer
`;

function DashboardHistorySection() {
  const [data, setData] = useState([]);

  // Fetch data from the endpoint
  useEffect(() => {
    fetch("http://localhost:8080/task/analytics") // Replace with your actual API URL
      .then((response) => response.json()) // Parse the JSON from the response
      .then((data) => {
        // Convert the object to an array with { day, number } format
        const transformedData = Object.keys(data).map((day) => ({
          day,
          number: data[day],
        }));
        setData(transformedData); // Set the transformed data
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle any errors
      });
  }, []);
  return (
<Div>
      <DivWrapper>
        {data.map((item, index) => (
          <DivLine key={index}>
            <H3>{item.number}</H3> {/* Display the number */}
            <DivLineInside height={`${item.number * 5}%`}></DivLineInside> {/* Adjust the height based on the number */}
            <H3H>{item.day.charAt(0).toUpperCase() + item.day.slice(1)}</H3H> {/* Display the day with the first letter capitalized */}
          </DivLine>
        ))}
      </DivWrapper>
    </Div>
  );
}

export default DashboardHistorySection;
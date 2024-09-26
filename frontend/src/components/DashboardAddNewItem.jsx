import React from "react";
import styled from "styled-components";
import Close from "../assets/Close.svg";
import { useState } from "react";
/* eslint-disable react/prop-types */

const Div = styled.div`
  background-color: #e0ebf2;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: 9999;
`;

const DivWrapper = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 80%;
  background-color: black;
`;

const Form = styled.form`
  background-color: #e0ebf2;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

const H4 = styled.h4`
  height: auto;
  width: auto;
  font-size: 1.875rem;
  font-weight: 600;
`;

const DivWrapEveryInput = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  gap: 0.313rem;
`;

const Input = styled.input`
  border-radius: 0.625rem;
  border: 0.094rem #d9d9d9 solid;
  height: 3.5rem;
  width: 100%;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  font-weight: 500;
  font-size: 1.125rem;
  color: black;

  &::placeholder {
    color: #9a9a9a;
    font-family: Poppins;
    font-size: 1rem;
    font-weight: 500;
  }

  &:focus {
    font-family: Poppins;
    font-size: 1.125rem;
    font-weight: 500;
  }
`;

const Label = styled.label`
  color: black;
  font-weight: 500;
  margin-left: 0.125rem;
  font-size: 1.125rem;
  height: auto;
`;

const Img = styled.img`
  width: 1.875rem;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 0.938rem;
  margin-left: 1.563rem;
  cursor: pointer;
`;

const TextArea = styled.textarea`
  border-radius: 0.625rem;
  border: 0.094rem #d9d9d9 solid;
  height: 12rem;
  width: 100%;
  padding-left: 0.625rem;
  padding-top: 0.625rem;

  &::placeholder {
    color: #9a9a9a;
    font-family: Poppins;
    font-size: 1rem;
    font-weight: 500;
  }

  &:focus {
    color: black;
    font-family: Poppins;
    font-size: 1rem;
    font-weight: 500;
  }
`;

function DashboardAddNewItem({ isVisible, toggleDashboardNewItemWindowClose }) {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formattedDueDate = dueDate + "T00:00:00";

    console.log("Due date: ", formattedDueDate);

    const newTask = {
      taskName,
      dueDate: formattedDueDate,
      description,
    };

    fetch("http://localhost:8080/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask), // Sending the task data
    });

    // You can still log the task data to ensure it's being sent
    console.log("Task data sent:", newTask);

    // Optionally, you can reset the form or close the modal after sending
    setTaskName("");
    setDueDate("");
    setDescription("");
    toggleDashboardNewItemWindowClose();
  };

  return (
    <>
      {isVisible && (
        <Div isVisible={isVisible}>
          <Img
            src={Close}
            alt="Close"
            onClick={toggleDashboardNewItemWindowClose}
          />
          <DivWrapper>
            <Form onSubmit={handleSubmit}>
              <H4>Whats cooking?</H4>
              <DivWrapEveryInput>
                <Label htmlFor="">Task Name :</Label>
                <Input
                  type="text"
                  id="taskName"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  placeholder="Writing Tests"
                  required
                />
              </DivWrapEveryInput>
              <DivWrapEveryInput>
                <Label>Due Date :</Label>
                <Input
                  type="date"
                  id="dueDate"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  required
                />
              </DivWrapEveryInput>
              <DivWrapEveryInput>
                <Label htmlFor="">Description :</Label>
                <TextArea
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter the task description here..."
                  required
                ></TextArea>
              </DivWrapEveryInput>
              <button type="submit">Add Task</button>
          
            </Form>
          </DivWrapper>
        </Div>
      )}
      ;
    </>
  );
}

export default DashboardAddNewItem;

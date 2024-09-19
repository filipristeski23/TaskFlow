import React from "react";
import styled from "styled-components";
import Close from "../assets/Close.svg";

const Div = styled.div`
  background-color: #e0ebf2;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  z-index: 9999;
  display: none;
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

function DashboardAddNewItem() {
  return (
    <Div>
      <Img src={Close} alt="Close" />
      <DivWrapper>
        <Form>
          <H4>Whats cooking?</H4>
          <DivWrapEveryInput>
            <Label htmlFor="">Task Name :</Label>
            <Input type="text" placeholder="Writing Tests" />
          </DivWrapEveryInput>
          <DivWrapEveryInput>
            <Label>Due Date :</Label>
            <Input type="date" />
          </DivWrapEveryInput>
          <DivWrapEveryInput>
            <Label htmlFor="">Description :</Label>
            <TextArea
              id="description"
              name="description"
              placeholder="Enter the task description here..."
            ></TextArea>
          </DivWrapEveryInput>
        </Form>
      </DivWrapper>
    </Div>
  );
}

export default DashboardAddNewItem;

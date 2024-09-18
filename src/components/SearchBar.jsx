import React from "react";
import styled from "styled-components";
import SearchIcon from "../assets/SearchIcon.svg";

const Div = styled.div`
  width: 100%;
  height: 10%;
`;

const DivWrapper = styled.div`
  max-width: 85rem;
  margin: 0 auto;
  background-color: white;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Form = styled.form`
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0;
  padding: 0;
  margin: 0;
  border-radius: 0.625rem;
  padding-left: 20px;
`;

const DivTwo = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

const DivFour = styled.div`
  width: 18%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const Img = styled.img`
  width: 20px;
`;
const Input = styled.input`
  height: 100%;
  width: 100%;
  padding-left: 1rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 0.625rem;
  &:focus {
    outline: none;
  }
`;
const A = styled.a`
  height: 50%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 0.625rem;
  color: white;
  padding-top: 0.18rem;
  padding-bottom: 0.18rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  text-decoration: none;
  cursor: pointer;
  font-size: 0.9rem;
`;

const Support = styled.a`
  height: 50%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.9rem;
  color: black;
`;

function SearchBar() {
  return (
    <Div>
      <DivWrapper>
        <Form>
          <DivTwo>
            <Img src={SearchIcon} />
            <Input type="text" placeholder="Search..." />
          </DivTwo>
        </Form>
        <DivFour>
          <Support href="">Support</Support>
          <A href="">Sign Out</A>
        </DivFour>
      </DivWrapper>
    </Div>
  );
}

export default SearchBar;

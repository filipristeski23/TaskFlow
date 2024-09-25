import React from "react";
import styled from "styled-components";
import { useState } from "react";

const DivWrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  border-radius: 0.625rem;
  border: 0.094rem #d9d9d9 solid;
  height: 3.5rem;
  width: 100%;
  padding-left: 1rem;
  font-size: 1rem;
  font-weight: 500;

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 80%;
  height: auto;
`;

const Button = styled.button`
  border-radius: 0.625rem;
  height: 3.5rem;
  width: 100%;
  background-color: black;
  border: none;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 1.5rem;
  cursor: pointer;
`;

const H2 = styled.h2`
  color: black;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

const H4 = styled.h4`
  color: #969696;
  font-weight: 400;
  font-size: 1.1rem;
`;

const DivWrapperTwo = styled.div`
  margin-bottom: 1rem;
`;

const DivWrapperThree = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: black;
  font-weight: 500;
  margin-left: 2px;
  font-size: 1.125rem;
`;

const A = styled.a`
  color: black;
  font-weight: 400;
  font-size: 1rem;
`;

function SignInPageForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("YOUR_BACKEND_URL/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("Login success:", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <DivWrapper>
      <Form onSubmit={handleFormSubmit}>
        <DivWrapperTwo>
          <H2>Welcome</H2>
          <H4>Log In to enjoy the features of TaskFlow</H4>
        </DivWrapperTwo>
        <DivWrapperThree>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </DivWrapperThree>
        <DivWrapperThree>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </DivWrapperThree>
        <Button type="submit">Log In</Button>
        <div>
          <A href="www.google.com">Don&apos;t have an account yet? Sign Up</A>
        </div>
      </Form>
    </DivWrapper>
  );
}

export default SignInPageForm;

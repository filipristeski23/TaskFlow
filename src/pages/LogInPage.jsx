import React from "react";
import styled from "styled-components";
import SignInPagePicture from "../components/SignInPagePicture";
import LogInPageForm from "../components/LogInPageForm";

const DivWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

function SignInPage() {
  return (
    <DivWrapper>
      <LogInPageForm />
      <SignInPagePicture />
    </DivWrapper>
  );
}

export default SignInPage;

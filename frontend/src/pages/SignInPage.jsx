import React from "react";
import styled from "styled-components";
import SignInPagePicture from "../components/SignInPagePicture";
import SignInPageForm from "../components/SignInPageForm";

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
      <SignInPageForm />
      <SignInPagePicture />
    </DivWrapper>
  );
}

export default SignInPage;

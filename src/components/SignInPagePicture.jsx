import React from "react";
import PictureDesign from "../assets/SignInPagePictureDesign.svg";
import styled from "styled-components";

const DivWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

function SignInPagePicture() {
  return (
    <DivWrapper>
      <Img src={PictureDesign} alt="Sign In Page Design" />
    </DivWrapper>
  );
}

export default SignInPagePicture;

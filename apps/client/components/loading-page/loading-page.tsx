import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoadingPage = () => {
  return (
    <StyledDiv>
      <CircularProgress />
    </StyledDiv>
  );
};

export default LoadingPage;

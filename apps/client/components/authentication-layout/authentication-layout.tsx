import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import Paper from "@material-ui/core/Paper";

const StyledDiv = styled.div`
  display: grid;
  height: 100vh;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    grid-template-columns: 2fr 3fr;
  }
`;

const StyledSidebarSection = styled.section`
  background-image: url("https://source.unsplash.com/random");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

// FIXME: !important
// https://github.com/mui-org/material-ui/issues/16609
const StyledMainSection = styled(Container)`
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
` as typeof Container;

const AuthenticationLayout: React.FC = ({ children }) => {
  return (
    <StyledDiv>
      <Hidden xsDown>
        <StyledSidebarSection />
      </Hidden>
      <StyledMainSection component={Paper} elevation={8} square>
        {children}
      </StyledMainSection>
    </StyledDiv>
  );
};

export default AuthenticationLayout;

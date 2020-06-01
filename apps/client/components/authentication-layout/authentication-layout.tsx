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
  display: grid !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)}px;
` as typeof Container;

const StyledNav = styled.nav`
  padding: 1rem;
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledContentDiv = styled.div`
  width: 25rem;
`;

interface AuthenticationLayoutProps {
  navigationElement: JSX.Element;
}

const AuthenticationLayout: React.FC<AuthenticationLayoutProps> = ({
  children,
  navigationElement,
}) => {
  return (
    <StyledDiv>
      <Hidden xsDown>
        <StyledSidebarSection />
      </Hidden>
      <StyledMainSection component={Paper} elevation={8} square>
        <StyledNav>{navigationElement}</StyledNav>
        <StyledContentDiv>{children}</StyledContentDiv>
      </StyledMainSection>
    </StyledDiv>
  );
};

export default AuthenticationLayout;

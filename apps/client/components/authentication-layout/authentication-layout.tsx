import React from "react";
import styled from "styled-components";
import Hidden from "@material-ui/core/Hidden";

const StyledDiv = styled.div`
  display: grid;
  height: 100vh;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    grid-template-columns: 1fr 3fr;
  }
`;

const StyledSidebarSection = styled.section`
  background-image: url("https://source.unsplash.com/random");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const AuthenticationLayout: React.FC = ({ children }) => {
  return (
    <StyledDiv>
      <Hidden xsDown>
        <StyledSidebarSection />
      </Hidden>
      {children}
    </StyledDiv>
  );
};

export default AuthenticationLayout;

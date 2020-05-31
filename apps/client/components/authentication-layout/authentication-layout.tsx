import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  min-height: 100vh;

  @media (min-width: 900px) {
    grid-template-columns: 20rem 1fr;
  }
`;

const StyledSidebarSection = styled.section`
  background-color: grey;
  display: none;

  @media (min-width: 900px) {
    display: flex;
  }
`;

const AuthenticationLayout: React.FC = ({ children }) => {
  return (
    <StyledDiv>
      <StyledSidebarSection>Sidebar</StyledSidebarSection>
      <div>{children}</div>
    </StyledDiv>
  );
};

export default AuthenticationLayout;

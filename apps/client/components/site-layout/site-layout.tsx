import React from "react";
import styled from "styled-components";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Header from "../header/header";
import Footer from "../footer/footer";

interface LayoutContainerProps {
  isDesktop: boolean;
}

const LayoutContainer = styled.div<LayoutContainerProps>`
  padding-top: 56px;
  height: 100%;
  min-height: 100vh;
  display: grid;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding-top: 64px;
  }
`;

const MainContainer = styled.main`
  display: grid;
  grid-template-rows: 1fr max-content;
`;

const SiteLayout: React.FC = ({ children }) => {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <LayoutContainer isDesktop={isDesktop}>
      <Header />
      <MainContainer>
        {children}
        <Footer />
      </MainContainer>
    </LayoutContainer>
  );
};

export default SiteLayout;

import React from "react";
import styled from "styled-components";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Header from "../header/header";
import Footer from "../footer/footer";
import Container from "@material-ui/core/Container";

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

const MainContainer = styled(Container)`
  display: grid;
  grid-template-rows: 1fr max-content;
` as typeof Container;

const SiteLayout: React.FC = ({ children }) => {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <LayoutContainer isDesktop={isDesktop}>
      <Header />
      <MainContainer component="main" maxWidth="md">
        {children}
        <Footer />
      </MainContainer>
    </LayoutContainer>
  );
};

export default SiteLayout;

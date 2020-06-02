import React, { useState } from "react";
import styled from "styled-components";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Sidebar from "../sidebar/sidebar";
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
  grid-template-rows: max-content 1fr;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding-top: 64px;
  }
  padding-left: ${({ isDesktop }) => (isDesktop ? 240 : 0)}px;
`;

const MainContainer = styled.main`
  display: grid;
  grid-template-rows: 1fr max-content;
`;

const SiteLayout: React.FC = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const sidebarIsOpen = isDesktop ? true : openSidebar;

  return (
    <LayoutContainer isDesktop={isDesktop}>
      <Header onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={sidebarIsOpen}
        variant={isDesktop ? "persistent" : "temporary"}
      />
      <MainContainer>
        {children}
        <Footer />
      </MainContainer>
    </LayoutContainer>
  );
};

export default SiteLayout;

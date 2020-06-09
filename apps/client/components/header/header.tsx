import React from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import NavigationLink from "../navigation-link/navigation-link";
import HeaderAvatar from "../header-avatar/header-avatar";
import ToggleThemeIconButton from "../toggle-theme-icon-button/toggle-theme-icon-button";

const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  background-color: transparent;
`;

const StyledDiv = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(1)}px;
  grid-auto-flow: column;
  align-items: center;
`;

const Header: React.FC = () => {
  return (
    <StyledAppBar>
      <Toolbar>
        <NavigationLink href="/" underline="none">
          Home
        </NavigationLink>
        <div style={{ flexGrow: 1 }} />
        <StyledDiv>
          <ToggleThemeIconButton />
          <HeaderAvatar />
        </StyledDiv>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;

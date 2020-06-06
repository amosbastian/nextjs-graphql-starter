import React from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import NavigationLink from "../navigation-link/navigation-link";
import HeaderAvatar from "../header-avatar/header-avatar";

const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  background-color: transparent;
`;

const Header: React.FC = () => {
  return (
    <StyledAppBar>
      <Toolbar>
        <NavigationLink href="/" underline="none">
          Home
        </NavigationLink>
        <div style={{ flexGrow: 1 }} />
        <HeaderAvatar />
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;

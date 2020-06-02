import React from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";

const StyledAppBar = styled(AppBar)`
  box-shadow: none !important;
`;

interface HeaderProps {
  onSidebarOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSidebarOpen }) => {
  return (
    <StyledAppBar>
      <Toolbar>
        <Typography variant="h6">nextjs-graphql-starter</Typography>
        <div style={{ flexGrow: 1 }} />
        <Hidden mdUp>
          <IconButton
            aria-label="open sidebar"
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;

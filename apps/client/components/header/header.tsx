import React from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const StyledAppBar = styled(AppBar)`
  box-shadow: none !important;
`;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <StyledAppBar>
      <Toolbar>
        <Typography variant="h6">nextjs-graphql-starter</Typography>
        <div style={{ flexGrow: 1 }} />
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;

import React from "react";
import styled from "styled-components";
import Drawer, { DrawerProps } from "@material-ui/core/Drawer";

const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    width: 240px;
    ${({ theme }) => theme.breakpoints.up("md")} {
      margin-top: 64px;
      height: calc(100% - 64px);
    }
  }
`;

const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(2)}px;
`;

const Sidebar: React.FC<DrawerProps> = ({
  children,
  onClose,
  open,
  variant,
}) => {
  return (
    <StyledDrawer
      anchor="left"
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <DrawerContainer>{children}</DrawerContainer>
    </StyledDrawer>
  );
};

export default Sidebar;

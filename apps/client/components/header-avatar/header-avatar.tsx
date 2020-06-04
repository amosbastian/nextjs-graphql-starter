import React from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import NavigationLink from "../navigation-link/navigation-link";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { UsernameQuery } from "@nextjs-graphql-starter/codegen";

const StyledAvatar = styled(Avatar)`
  &.MuiAvatar-root {
    height: ${({ theme }) => theme.spacing(4)}px;
    width: ${({ theme }) => theme.spacing(4)}px;
  }
`;

const StyledButton = styled(Button)`
  color: white;

  span.MuiButton-label {
    text-transform: none;
    display: grid;
    gap: ${({ theme }) => theme.spacing(2)}px;
    grid-template-columns: max-content max-content;
  }
`;

const USERNAME = gql`
  query username {
    me {
      id
      username
    }
  }
`;

export const HeaderAvatar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(
    null,
  );

  const { data } = useQuery<UsernameQuery>(USERNAME);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <StyledButton
        aria-controls="user-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <StyledAvatar alt="Amos Bastian" />
        {data?.me.username}
      </StyledButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        id="user-menu"
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem>
          <NavigationLink
            color="textPrimary"
            href="account"
            underline="none"
          >
            Account
          </NavigationLink>
        </MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default HeaderAvatar;

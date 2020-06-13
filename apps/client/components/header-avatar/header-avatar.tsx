import React from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import NavigationLink from "../navigation-link/navigation-link";
import { gql } from "apollo-boost";
import {
  useQuery,
  useApolloClient,
  useMutation,
} from "@apollo/react-hooks";
import { UsernameQuery } from "@nextjs-graphql-starter/codegen";
import { useRouter } from "next/router";
import cloudinaryUrl from "../../utilities/cloudinary";

const StyledAvatar = styled(Avatar)`
  &.MuiAvatar-root {
    height: ${({ theme }) => theme.spacing(4)}px;
    width: ${({ theme }) => theme.spacing(4)}px;
  }
`;

const StyledIconButton = styled(IconButton)`
  padding: 0;
`;

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

const USERNAME = gql`
  query username {
    me {
      id
      username
      pictureId
    }
  }
`;

export const HeaderAvatar = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(
    null,
  );

  const client = useApolloClient();
  const [logout] = useMutation(LOGOUT, {
    onCompleted: () => {
      client.resetStore();
      router.push("/login");
    },
  });
  const { data } = useQuery<UsernameQuery>(USERNAME);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
  };

  const src = data?.me?.pictureId
    ? cloudinaryUrl(data.me.pictureId)
    : undefined;

  return (
    <div>
      <StyledIconButton
        aria-controls="user-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <StyledAvatar alt={data?.me?.username} src={src} />
      </StyledIconButton>
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
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default HeaderAvatar;

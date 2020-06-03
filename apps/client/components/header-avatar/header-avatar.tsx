import React from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
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
  const { data } = useQuery<UsernameQuery>(USERNAME);

  return (
    <StyledButton>
      <StyledAvatar alt="Amos Bastian" />
      {data?.me.username}
    </StyledButton>
  );
};

export default HeaderAvatar;

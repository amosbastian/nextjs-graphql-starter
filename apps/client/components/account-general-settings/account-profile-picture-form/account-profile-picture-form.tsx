import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { AccountProfilePictureFormUserFragment } from "@nextjs-graphql-starter/codegen";

const StyledAvatar = styled(Avatar)`
  height: 100px;
  width: 100px;
  justify-self: center;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const StyledCardContent = styled(CardContent)`
  display: grid;
  gap: ${({ theme }) => theme.spacing(2)}px;
  justify-content: center;
  align-items: center;
`;

export const ACCOUNT_PROFILE_PICTURE_FORM_USER_FRAGMENT = gql`
  fragment accountProfilePictureFormUser on User {
    username
  }
`;

export interface AccountProfilePictureFormProps {
  user: AccountProfilePictureFormUserFragment;
}

export const AccountProfilePictureForm: React.FC<AccountProfilePictureFormProps> = ({
  user,
}) => {
  const { username } = user;

  return (
    <Card variant="outlined" component="form">
      <StyledCardContent>
        <StyledAvatar alt="Username" />
        <Typography align="center">{username}</Typography>
      </StyledCardContent>
      <CardActions>
        <StyledButton variant="text">Edit picture</StyledButton>
      </CardActions>
    </Card>
  );
};

export default AccountProfilePictureForm;

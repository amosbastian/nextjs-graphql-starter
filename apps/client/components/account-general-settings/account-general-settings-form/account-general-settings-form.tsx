import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { gql } from "apollo-boost";
import { AccountGeneralSettingsFormUserFragment } from "@nextjs-graphql-starter/codegen";

const StyledCardActions = styled(CardActions)`
  justify-content: flex-end;
`;

const StyledCardContent = styled(CardContent)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const ACCOUNT_GENERAL_SETTINGS_FORM_USER_FRAGMENT = gql`
  fragment accountGeneralSettingsFormUser on User {
    username
    email
  }
`;

export interface AccountGeneralSettingsFormProps {
  user: AccountGeneralSettingsFormUserFragment;
}

export const AccountGeneralSettingsForm: React.FC<AccountGeneralSettingsFormProps> = ({
  user,
}) => {
  const { username, email } = user;

  return (
    <Card variant="outlined" component="form">
      <CardHeader title="Profile" />
      <Divider />
      <StyledCardContent>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
        />
        <TextField
          label="Email Address"
          variant="outlined"
          value={email}
        />
      </StyledCardContent>
      <Divider />
      <StyledCardActions>
        <Button color="primary" variant="contained" type="submit">
          Save changes
        </Button>
      </StyledCardActions>
    </Card>
  );
};

export default AccountGeneralSettingsForm;

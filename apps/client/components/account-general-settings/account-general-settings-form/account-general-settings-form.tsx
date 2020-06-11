import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { gql } from "apollo-boost";
import {
  AccountGeneralSettingsFormUserFragment,
  UpdateUserAccountSettingsMutation,
  UpdateUserAccountSettingsMutationVariables,
} from "@nextjs-graphql-starter/codegen";
import { useMutation } from "@apollo/react-hooks";
import ProgressButton from "../../progress-button/progress-button";

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
    id
    username
    email
  }
`;

const UPDATE_USER_ACCOUNT_SETTINGS = gql`
  mutation updateUserAccountSettings(
    $id: ID!
    $input: UpdateUserInput!
  ) {
    updateUser(id: $id, input: $input) {
      id
      email
      username
    }
  }
`;

export interface AccountGeneralSettingsFormProps {
  user: AccountGeneralSettingsFormUserFragment;
}

export const AccountGeneralSettingsForm: React.FC<AccountGeneralSettingsFormProps> = ({
  user,
}) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const [updateUser, { error, loading }] = useMutation<
    UpdateUserAccountSettingsMutation,
    UpdateUserAccountSettingsMutationVariables
  >(UPDATE_USER_ACCOUNT_SETTINGS);

  const handleUsernameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();

    const input: UpdateUserAccountSettingsMutationVariables["input"] = {};

    if (user.username !== username) input.username = username;
    if (user.email !== email) input.email = email;

    if (!Object.keys(input).length) {
      return;
    }

    updateUser({
      variables: {
        id: user.id,
        input,
      },
    });
  };

  const initialChanged =
    user.username !== username || user.email !== email;

  return (
    <Card variant="outlined" component="form" onSubmit={handleSubmit}>
      <CardHeader title="Profile" />
      <Divider />
      <StyledCardContent>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          label="Email Address"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
        />
      </StyledCardContent>
      <Divider />
      <StyledCardActions>
        <ProgressButton
          color="primary"
          loading={loading}
          variant="contained"
          type="submit"
          disabled={!initialChanged}
        >
          Save changes
        </ProgressButton>
      </StyledCardActions>
    </Card>
  );
};

export default AccountGeneralSettingsForm;

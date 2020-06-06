import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import ProgressButton from "../../progress-button/progress-button";
import {
  UpdateUserPasswordMutation,
  UpdateUserPasswordMutationVariables,
} from "@nextjs-graphql-starter/codegen";

/* eslint-disable-next-line */
export interface AccountSecurityFormProps {}

const StyledCardActions = styled(CardActions)`
  justify-content: flex-end;
`;

const StyledCardContent = styled(CardContent)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing(2)}px;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    grid-template-columns: 1fr 1fr;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const UPDATE_USER_PASSWORD = gql`
  mutation updateUserPassword($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
    }
  }
`;

export const AccountSecurityForm: React.FC<AccountSecurityFormProps> = () => {
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const [updatePassword, { loading }] = useMutation<
    UpdateUserPasswordMutation,
    UpdateUserPasswordMutationVariables
  >(UPDATE_USER_PASSWORD);

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPassword(event.target.value);
  };

  const handleRepeatedPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRepeatedPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (password !== repeatedPassword) {
      // TODO: show an error to the user
      return;
    }

    updatePassword({
      variables: {
        input: {
          password,
        },
      },
    });
  };

  return (
    <Card variant="outlined" component="form" onSubmit={handleSubmit}>
      <CardHeader title="Change password" />
      <Divider />
      <StyledCardContent>
        <TextField
          label="Password"
          variant="outlined"
          onChange={handlePasswordChange}
          value={password}
        />
        <TextField
          label="Confirm password"
          variant="outlined"
          onChange={handleRepeatedPasswordChange}
          value={repeatedPassword}
        />
      </StyledCardContent>
      <Divider />
      <StyledCardActions>
        <ProgressButton
          color="primary"
          variant="contained"
          type="submit"
          loading={loading}
        >
          Change password
        </ProgressButton>
      </StyledCardActions>
    </Card>
  );
};

export default AccountSecurityForm;

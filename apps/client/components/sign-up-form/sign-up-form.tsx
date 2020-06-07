import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { gql } from "apollo-boost";
import ProgressButton from "../progress-button/progress-button";
import { useMutation } from "@apollo/react-hooks";
import {
  SignUpMutation,
  SignUpMutationVariables,
} from "@nextjs-graphql-starter/codegen";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 1rem;
`;

const SIGN_UP = gql`
  mutation signUp($input: SignUpInput!) {
    signUp(input: $input) {
      id
    }
  }
`;

export const SignUpForm: React.FC = () => {
  const [signUp, { loading }] = useMutation<
    SignUpMutation,
    SignUpMutationVariables
  >(SIGN_UP, {
    onCompleted: () => console.log("User has signed up!"),
    onError: (error) =>
      console.error(`User could not sign up: ${error}`),
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const usernameElement = event.currentTarget.elements.username;
    const emailElement = event.currentTarget.elements.email;
    const passwordElement = event.currentTarget.elements.password;

    signUp({
      variables: {
        input: {
          username: usernameElement.value,
          email: emailElement.value,
          password: passwordElement.value,
        },
      },
    });
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
        autoFocus
        size="small"
      />
      <TextField
        variant="outlined"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        size="small"
      />
      <TextField
        variant="outlined"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="password"
        size="small"
      />
      <ProgressButton
        color="primary"
        fullWidth
        type="submit"
        loading={loading}
        variant="contained"
      >
        Sign up
      </ProgressButton>
    </StyledForm>
  );
};

export default SignUpForm;

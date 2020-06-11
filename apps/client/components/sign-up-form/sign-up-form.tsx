import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { gql } from "apollo-boost";
import ProgressButton from "../progress-button/progress-button";
import { useMutation } from "@apollo/react-hooks";
import {
  SignUpMutation,
  SignUpMutationVariables,
  SignUpInput,
} from "@nextjs-graphql-starter/codegen";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import PasswordField from "../password-field/password-field";

const validationSchema: yup.ObjectSchema<SignUpInput> = yup
  .object()
  .shape({
    username: yup
      .string()
      .required("Enter a username")
      .min(3, "Username must be at least 3 characters")
      .max(30, "Username can be 30 characters at most"),
    email: yup
      .string()
      .required("Enter an email address")
      .email("Enter a valid email address"),
    password: yup
      .string()
      .required("Enter a password")
      .min(6, "Must be at least 6 characters long"),
  })
  .defined();

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
  const { errors, handleSubmit, register } = useForm<SignUpInput>({
    validationSchema,
  });

  const [signUp, { loading }] = useMutation<
    SignUpMutation,
    SignUpMutationVariables
  >(SIGN_UP, {
    onCompleted: () => console.log("User has signed up!"),
    onError: (error) =>
      console.error(`User could not sign up: ${error}`),
  });

  async function onSubmit(input: SignUpInput) {
    signUp({
      variables: {
        input,
      },
    });
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TextField
        variant="outlined"
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
        autoFocus
        size="small"
        inputRef={register}
        helperText={errors?.username?.message}
        error={Boolean(errors?.username?.message)}
      />
      <TextField
        variant="outlined"
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        size="small"
        inputRef={register}
        helperText={errors?.email?.message}
        error={Boolean(errors?.email?.message)}
      />
      <PasswordField
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="password"
        size="small"
        inputRef={register}
        helperText={errors?.password?.message}
        error={Boolean(errors?.password?.message)}
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

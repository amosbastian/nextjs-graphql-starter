import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import ProgressButton from "../progress-button/progress-button";
import {
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables,
} from "@nextjs-graphql-starter/codegen";
import { useRouter } from "next/router";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 1rem;
`;

const FORGOT_PASSWORD = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

export const ResetPasswordForm: React.FC = () => {
  const router = useRouter();

  const [forgotPassword, { loading }] = useMutation<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >(FORGOT_PASSWORD, {
    onCompleted: (data) => {
      if (data) {
        router.push("/login");
      }
    },
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const emailElement = event.currentTarget.elements.email;

    try {
      await forgotPassword({
        variables: {
          email: emailElement.value,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        size="small"
      />
      <ProgressButton
        color="primary"
        fullWidth
        loading={loading}
        type="submit"
        variant="contained"
      >
        Send instructions
      </ProgressButton>
    </StyledForm>
  );
};

export default ResetPasswordForm;

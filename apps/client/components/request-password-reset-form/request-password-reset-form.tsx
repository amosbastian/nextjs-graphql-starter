import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import ProgressButton from "../progress-button/progress-button";
import {
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables,
} from "@nextjs-graphql-starter/codegen";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

const FORGOT_PASSWORD = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

export const RequestPasswordResetForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const [forgotPassword, { loading }] = useMutation<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >(FORGOT_PASSWORD, {
    onCompleted: () => setEmail(""),
  });

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await forgotPassword({
        variables: {
          email,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setEmail(event.target.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        required
        fullWidth
        label="Email Address"
        value={email}
        autoComplete="email"
        autoFocus
        size="small"
        onChange={handleEmailChange}
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

export default RequestPasswordResetForm;

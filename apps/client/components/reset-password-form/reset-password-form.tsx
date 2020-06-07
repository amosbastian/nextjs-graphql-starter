import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import ProgressButton from "../progress-button/progress-button";
import { useRouter } from "next/router";
import {
  ChangePasswordMutation,
  ChangePasswordMutationVariables,
} from "@nextjs-graphql-starter/codegen";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

const CHANGE_PASSWORD = gql`
  mutation changePassword($input: ChangePasswordInput!) {
    changePassword(input: $input) {
      id
    }
  }
`;

interface ResetPasswordFormProps {
  token: string;
}

export const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  token,
}) => {
  const router = useRouter();

  const [changePassword, { loading }] = useMutation<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >(CHANGE_PASSWORD, {
    onCompleted: (data) => {
      if (data) {
        router.push("/login");
      }
    },
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const passwordElement = event.currentTarget.elements.newPassword;

    try {
      await changePassword({
        variables: {
          input: {
            password: passwordElement.value,
            token,
          },
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
        id="newPassword"
        label="New password"
        name="newPassword"
        autoComplete="password"
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
        Reset password
      </ProgressButton>
    </StyledForm>
  );
};

export default ResetPasswordForm;

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
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";

const validationSchema: yup.ObjectSchema<ForgotPasswordInput> = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("Enter your email address")
      .email("Enter a valid email address"),
  })
  .defined();

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

type ForgotPasswordInput = {
  email: string;
};

export const RequestPasswordResetForm: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { errors, handleSubmit, register, reset } = useForm<
    ForgotPasswordInput
  >({
    validationSchema,
  });

  const [forgotPassword, { loading }] = useMutation<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >(FORGOT_PASSWORD, {
    onCompleted: () => {
      reset();
      enqueueSnackbar("Email sent!", { variant: "success" });
    },
    onError: () =>
      enqueueSnackbar("Something went wrong", { variant: "error" }),
  });

  async function onSubmit(input: ForgotPasswordInput) {
    const { email } = input;

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

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TextField
        variant="outlined"
        fullWidth
        label="Email Address"
        autoComplete="email"
        autoFocus
        name="email"
        size="small"
        inputRef={register}
        helperText={errors?.email?.message}
        error={Boolean(errors?.email?.message)}
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

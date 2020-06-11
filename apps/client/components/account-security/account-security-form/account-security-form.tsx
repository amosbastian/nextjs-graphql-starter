import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import ProgressButton from "../../progress-button/progress-button";
import {
  UpdateUserPasswordMutation,
  UpdateUserPasswordMutationVariables,
} from "@nextjs-graphql-starter/codegen";
import { useForm } from "react-hook-form";
import PasswordField from "../../password-field/password-field";
import styled from "styled-components";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .required("Enter a new password")
    .min(6, "Must be at least 6 characters long"),
  repeatedPassword: yup
    .string()
    .required("Repeat the password")
    .min(6, "Must be at least 6 characters long")
    .equals([yup.ref("password")], "Passwords must match"),
});

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

type ChangePasswordFormData = {
  password: string;
  repeatedPassword: string;
};

export const AccountSecurityForm: React.FC = () => {
  const { errors, handleSubmit, register } = useForm<
    ChangePasswordFormData
  >({ validationSchema });

  // FIXME: use error from mutation as well
  const [updatePassword, { loading }] = useMutation<
    UpdateUserPasswordMutation,
    UpdateUserPasswordMutationVariables
  >(UPDATE_USER_PASSWORD);

  const onSubmit = (data: ChangePasswordFormData) => {
    const { password } = data;

    updatePassword({
      variables: {
        input: {
          password,
        },
      },
    });
  };

  return (
    <Card
      variant="outlined"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <CardHeader title="Change password" />
      <Divider />
      <StyledCardContent>
        <PasswordField
          id="outlined-adornment-password"
          name="password"
          label="Password"
          inputRef={register}
          helperText={errors?.password?.message}
          error={Boolean(errors?.password?.message)}
        />
        <PasswordField
          id="outlined-adornment-repeated-password"
          name="repeatedPassword"
          label="Repeat password"
          inputRef={register}
          helperText={errors?.repeatedPassword?.message}
          error={Boolean(errors?.repeatedPassword?.message)}
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

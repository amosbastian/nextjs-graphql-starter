import React from "react";
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
  UpdateUserInput,
} from "@nextjs-graphql-starter/codegen";
import { useMutation } from "@apollo/react-hooks";
import ProgressButton from "../../progress-button/progress-button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { updatedObject } from "../../../utilities";

const validationSchema: yup.ObjectSchema<UpdateUserInput> = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("Enter your email address")
      .email("Enter a valid email address"),
    username: yup
      .string()
      .required("Enter a username")
      .min(3, "Username must be at least 3 characters")
      .max(30, "Username can be 30 characters at most"),
  })
  .defined();

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
  const defaultValues: UpdateUserInput = {
    username: user.username,
    email: user.email,
  };

  const { errors, handleSubmit, register } = useForm<UpdateUserInput>(
    {
      validationSchema,
      defaultValues,
    },
  );

  // FIXME: use error from mutation as well
  const [updateUser, { loading }] = useMutation<
    UpdateUserAccountSettingsMutation,
    UpdateUserAccountSettingsMutationVariables
  >(UPDATE_USER_ACCOUNT_SETTINGS);

  const onSubmit = (input: UpdateUserInput) => {
    const updatedInput = updatedObject(input, defaultValues);

    updateUser({
      variables: {
        id: user.id,
        input: updatedInput,
      },
    });
  };

  return (
    <Card
      variant="outlined"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <CardHeader title="Profile" />
      <Divider />
      <StyledCardContent>
        <TextField
          label="Username"
          variant="outlined"
          name="username"
          inputRef={register}
          helperText={errors?.username?.message}
          error={Boolean(errors?.username?.message)}
        />
        <TextField
          label="Email Address"
          variant="outlined"
          name="email"
          inputRef={register}
          helperText={errors?.email?.message}
          error={Boolean(errors?.email?.message)}
        />
      </StyledCardContent>
      <Divider />
      <StyledCardActions>
        <ProgressButton
          color="primary"
          loading={loading}
          variant="contained"
          type="submit"
        >
          Save changes
        </ProgressButton>
      </StyledCardActions>
    </Card>
  );
};

export default AccountGeneralSettingsForm;

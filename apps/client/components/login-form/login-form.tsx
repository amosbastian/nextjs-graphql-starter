import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import {
  LoginMutation,
  LoginMutationVariables,
  LoginInput,
} from "@nextjs-graphql-starter/codegen";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { gql } from "apollo-boost";
import ProgressButton from "../progress-button/progress-button";
import NavigationLink from "../navigation-link/navigation-link";
import { USER_LOGGED_IN } from "../../hooks/use-user";
import { useForm } from "react-hook-form";
import PasswordField from "../password-field/password-field";
import * as yup from "yup";

const validationSchema: yup.ObjectSchema<LoginInput> = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("Enter your email address")
      .email("Enter a valid email address"),
    password: yup
      .string()
      .required("Enter your password")
      .min(6, "Must be at least 6 characters long"),
  })
  .defined();

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 1rem;
`;

const StyledSpan = styled.span`
  display: flex;
  justify-content: flex-end;
`;

const LOGIN = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      id
      username
    }
  }
`;

export const LoginForm: React.FC = () => {
  const client = useApolloClient();
  const router = useRouter();
  const { errors, handleSubmit, register } = useForm<LoginInput>({
    validationSchema,
  });

  // FIXME: use error from mutation as well
  const [login, { loading }] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LOGIN, {
    update: (cache, { data }) => {
      if (!data || !data.login) {
        return;
      }

      cache.writeQuery({
        query: USER_LOGGED_IN,
        data: {
          me: data.login,
        },
      });
    },
    onCompleted: (data) => {
      if (data.login?.username) {
        router.push("/");
      }
    },
  });

  async function onSubmit(data: LoginInput) {
    const { email, password } = data;

    try {
      await client.resetStore();
      await login({
        variables: {
          input: {
            email,
            password,
          },
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
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        size="small"
        inputRef={register}
        helperText={errors?.email?.message}
        error={Boolean(errors?.email?.message)}
      />
      <PasswordField
        fullWidth
        name="password"
        label="Password"
        id="password"
        autoComplete="password"
        size="small"
        inputRef={register}
        helperText={errors?.password?.message}
        error={Boolean(errors?.password?.message)}
      />
      <StyledSpan>
        <NavigationLink underline="none" href="/reset-password">
          Forgot password?
        </NavigationLink>
      </StyledSpan>
      <ProgressButton
        color="primary"
        fullWidth
        loading={loading}
        type="submit"
        variant="contained"
      >
        Log in
      </ProgressButton>
    </StyledForm>
  );
};

export default LoginForm;

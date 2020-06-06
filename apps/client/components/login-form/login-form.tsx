import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import {
  LoginMutation,
  LoginMutationVariables,
} from "@nextjs-graphql-starter/codegen";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { gql } from "apollo-boost";
import ProgressButton from "../progress-button/progress-button";
import NavigationLink from "../navigation-link/navigation-link";
import { USER_LOGGED_IN } from "apps/client/hooks/use-user";

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
      if (data.login.username) {
        router.push("/");
      }
    },
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const emailElement = event.currentTarget.elements.email;
    const passwordElement = event.currentTarget.elements.password;

    try {
      await client.resetStore();
      await login({
        variables: {
          input: {
            email: emailElement.value,
            password: passwordElement.value,
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
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
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
      <StyledSpan>
        <NavigationLink href="reset-password">
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

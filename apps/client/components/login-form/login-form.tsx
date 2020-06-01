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
import { ME } from "../../pages/index";
import ProgressButton from "../progress-button/progress-button";
import NavigationLink from "../navigation-link/navigation-link";

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
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
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
        query: ME,
        data: {
          me: data.login,
        },
      });
    },
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const emailElement = event.currentTarget.elements.email;
    const passwordElement = event.currentTarget.elements.password;

    try {
      await client.resetStore();
      const { data } = await login({
        variables: {
          email: emailElement.value,
          password: passwordElement.value,
        },
      });

      if (data.login.username) {
        await router.push("/");
      }
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

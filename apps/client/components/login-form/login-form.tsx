import React from "react";
import styled from "styled-components";
import { useLoginMutation } from "@nextjs-graphql-starter/codegen";
import TextInput from "../text-input/text-input";
import { useApolloClient } from "@apollo/react-hooks";
import { useRouter } from "next/router";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 0.5rem;

  width: 20rem;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const LoginForm: React.FC = () => {
  const client = useApolloClient();
  const router = useRouter();
  const [login] = useLoginMutation();

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
      <TextInput label="Email" required type="email" name="email" />
      <TextInput
        label="Password"
        name="password"
        type="password"
        required
      />
      <StyledDiv>Forgot your password?</StyledDiv>
      <p>
        <button type="submit">Login</button>
      </p>
    </StyledForm>
  );
};

export default LoginForm;

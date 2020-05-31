import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 1rem;
  width: 20rem;
`;

export const SignUpForm: React.FC = () => {
  async function handleSubmit(event) {
    event.preventDefault();

    const usernameElement = event.currentTarget.elements.username;
    const emailElement = event.currentTarget.elements.email;
    const passwordElement = event.currentTarget.elements.password;

    console.log(
      usernameElement.value,
      emailElement.value,
      passwordElement.value,
    );
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
        autoFocus
        size="small"
      />
      <TextField
        variant="outlined"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
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
      <Button
        color="primary"
        fullWidth
        type="submit"
        variant="contained"
      >
        Sign up
      </Button>
    </StyledForm>
  );
};

export default SignUpForm;

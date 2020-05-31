import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

import AuthenticationLayout from "../components/authentication-layout/authentication-layout";
import LoginForm from "../components/login-form/login-form";
import withApollo from "../apollo/withApollo";

const StyledNav = styled.nav`
  padding: 1rem;
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledMain = styled.main`
  display: grid;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(4)}px;
`;

export const Login = () => {
  return (
    <AuthenticationLayout>
      <StyledNav>
        Not a member?{" "}
        <Link href="signup">
          <a>Sign up now!</a>
        </Link>
      </StyledNav>
      <StyledDiv>
        <Typography component="h1" variant="h5">
          Login to nextjs-graphql-starter!
        </Typography>
        <StyledMain>
          <LoginForm />
        </StyledMain>
      </StyledDiv>
    </AuthenticationLayout>
  );
};

export default withApollo(Login);

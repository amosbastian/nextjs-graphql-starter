import React from "react";
import styled from "styled-components";
import AuthenticationLayout from "../components/authentication-layout/authentication-layout";
import LoginForm from "../components/login-form/login-form";
import withApollo from "../apollo/withApollo";
import Link from "next/link";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
`;

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
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Login = () => {
  return (
    <AuthenticationLayout>
      <StyledSection>
        <StyledNav>
          Not a member?{" "}
          <Link href="signup">
            <a>Sign up now!</a>
          </Link>
        </StyledNav>
        <StyledDiv>
          <header>
            <h1>Login to client!</h1>
          </header>
          <StyledMain>
            <LoginForm />
          </StyledMain>
        </StyledDiv>
      </StyledSection>
    </AuthenticationLayout>
  );
};

export default withApollo(Login);

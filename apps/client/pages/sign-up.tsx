import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import AuthenticationLayout from "../components/authentication-layout/authentication-layout";
import NavigationLink from "../components/navigation-link/navigation-link";
import withApollo from "../apollo/withApollo";
import SignUpForm from "../components/sign-up-form/sign-up-form";

const StyledMain = styled.main`
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const SignUp = () => {
  const navigationElement = (
    <>
      Already a member?{" "}
      <NavigationLink href="login" underline="none">
        Log in now!
      </NavigationLink>
    </>
  );

  return (
    <AuthenticationLayout navigationElement={navigationElement}>
      <Typography component="h1" variant="h5">
        Sign up for nextjs-graphql-starter!
      </Typography>
      <StyledMain>
        <SignUpForm />
      </StyledMain>
    </AuthenticationLayout>
  );
};

export default withApollo(SignUp);

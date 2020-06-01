import React from "react";
import Typography from "@material-ui/core/Typography";

import AuthenticationLayout from "../components/authentication-layout/authentication-layout";
import LoginForm from "../components/login-form/login-form";
import NavigationLink from "../components/navigation-link/navigation-link";
import withApollo from "../apollo/withApollo";

export const Login = () => {
  const navigationElement = (
    <>
      Not a member?{" "}
      <NavigationLink href="sign-up" underline="none">
        Sign up now!
      </NavigationLink>
    </>
  );

  return (
    <AuthenticationLayout navigationElement={navigationElement}>
      <Typography component="h1" variant="h5" paragraph>
        Login to nextjs-graphql-starter!
      </Typography>
      <main>
        <LoginForm />
      </main>
    </AuthenticationLayout>
  );
};

export default withApollo(Login);

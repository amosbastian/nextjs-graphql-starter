import React from "react";
import Typography from "@material-ui/core/Typography";

import AuthenticationLayout from "../components/authentication-layout/authentication-layout";
import NavigationLink from "../components/navigation-link/navigation-link";
import withApollo from "../apollo/withApollo";
import SignUpForm from "../components/sign-up-form/sign-up-form";

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
      <Typography component="h1" variant="h5" paragraph>
        Sign up for nextjs-graphql-starter!
      </Typography>
      <main>
        <SignUpForm />
      </main>
    </AuthenticationLayout>
  );
};

export default withApollo(SignUp);

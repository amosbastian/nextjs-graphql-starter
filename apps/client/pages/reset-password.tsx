import React from "react";
import Typography from "@material-ui/core/Typography";

import AuthenticationLayout from "../components/authentication-layout/authentication-layout";
import NavigationLink from "../components/navigation-link/navigation-link";
import withApollo from "../apollo/withApollo";

export const ResetPassword = () => {
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
        Forgot your password?
      </Typography>
      <Typography>
        Enter the email address you used for signing up and we'll send
        you instructions on how to reset your password.
      </Typography>
      <main>xxx</main>
    </AuthenticationLayout>
  );
};

export default withApollo(ResetPassword);

import React from "react";
import Typography from "@material-ui/core/Typography";
import withApollo from "../../apollo/withApollo";
import AuthenticationLayout from "../../components/authentication-layout/authentication-layout";
import useUser from "../../hooks/use-user";
import { useRouter } from "next/router";
import NavigationLink from "../../components/navigation-link/navigation-link";
import ResetPasswordForm from "../../components/reset-password-form/reset-password-form";

export const ResetPassword = () => {
  const router = useRouter();
  const { data } = useUser(false);
  const { token } = router.query;

  console.log(token);

  if (data && data.me) {
    router.push("/");
  }

  const navigationElement = (
    <>
      Already a member?{" "}
      <NavigationLink href="/login" underline="none">
        Log in now!
      </NavigationLink>
    </>
  );

  return (
    <AuthenticationLayout navigationElement={navigationElement}>
      <Typography component="h1" variant="h5" paragraph>
        Reset your password
      </Typography>
      <main>
        <ResetPasswordForm token={token as string} />
      </main>
    </AuthenticationLayout>
  );
};

export default withApollo(ResetPassword);

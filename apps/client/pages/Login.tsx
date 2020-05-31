import React from "react";
import withApollo from "../apollo/withApollo";
import AuthenticationLayout from "../components/AuthenticationLayout";

export const Login = () => {
  return (
    <AuthenticationLayout>
      <section>
        <nav></nav>
        <header>
          <h1>Welcome to client!</h1>
        </header>
        <main>Login</main>
      </section>
    </AuthenticationLayout>
  );
};

export default Login;

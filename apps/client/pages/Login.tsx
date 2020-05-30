import React from "react";
import withApollo from "../apollo/withApollo";

export const Login = () => {
  return (
    <div>
      <header>
        <h1>Welcome to client!</h1>
      </header>
      <main>Login</main>
    </div>
  );
};

export default withApollo(Login);

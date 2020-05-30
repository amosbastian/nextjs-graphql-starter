import React from "react";
import withApollo from "../apollo/client";
import {
  useQuery,
  useMutation,
  useApolloClient,
} from "@apollo/react-hooks";
import gql from "graphql-tag";

const ME = gql`
  query me {
    me {
      id
      username
    }
  }
`;

const LOGIN = gql`
  mutation login {
    login(
      input: { email: "amos_bastian@hotmail.com", password: "123456" }
    ) {
      id
      username
    }
  }
`;

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

export const Index = () => {
  const client = useApolloClient();
  const { data } = useQuery(ME, { fetchPolicy: "network-only" });
  const [login] = useMutation(LOGIN);
  const [logout] = useMutation(LOGOUT, {
    onCompleted: () => client.resetStore(),
  });

  console.log(data);

  return (
    <div>
      <header>
        <h1>Welcome to client!</h1>
      </header>
      <main>
        <button type="button" onClick={() => login()}>
          Login
        </button>
        <button type="button" onClick={() => logout()}>
          Logout
        </button>
      </main>
    </div>
  );
};

export default withApollo(Index);

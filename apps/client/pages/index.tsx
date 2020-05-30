import React from "react";
import withApollo from "../apollo/withApollo";
import {
  useQuery,
  useMutation,
  useApolloClient,
} from "@apollo/react-hooks";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const client = useApolloClient();
  const { data, loading } = useQuery(ME);

  const [login] = useMutation(LOGIN, {
    update: (cache, { data }) => {
      if (!data || !data.login) {
        return;
      }
      cache.writeQuery({
        query: ME,
        data: {
          me: data.login,
        },
      });
    },
  });
  const [logout] = useMutation(LOGOUT, {
    onCompleted: () => client.resetStore(),
  });

  if (!loading && data.me === null && typeof window !== "undefined") {
    router.push("/login");
  }

  if (data && data.me) {
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
          <pre>{JSON.stringify(data?.me, null, 2)}</pre>
        </main>
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default withApollo(Index);

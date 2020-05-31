import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import withApollo from "../apollo/withApollo";
import {
  useQuery,
  useMutation,
  useApolloClient,
} from "@apollo/react-hooks";
import { useRouter } from "next/router";
import gql from "graphql-tag";

export const ME = gql`
  query me {
    me {
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

const StyledDiv = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledMain = styled.main`
  display: grid;
  gap: 1rem;
`;

export const Index = () => {
  const router = useRouter();
  const client = useApolloClient();
  const { data, loading } = useQuery(ME);
  const [logout] = useMutation(LOGOUT, {
    onCompleted: () => client.resetStore(),
  });

  if (!loading && data.me === null && typeof window !== "undefined") {
    router.push("/login");
  }

  if (data && data.me) {
    return (
      <StyledDiv>
        <StyledMain>
          <Typography variant="h1">You are logged in!</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => logout()}
          >
            Logout
          </Button>
          <pre>{JSON.stringify(data?.me, null, 2)}</pre>
        </StyledMain>
      </StyledDiv>
    );
  }

  return (
    <StyledDiv>
      <CircularProgress />
    </StyledDiv>
  );
};

export default withApollo(Index);

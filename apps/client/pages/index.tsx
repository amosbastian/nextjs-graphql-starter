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
import SiteLayout from "../components/site-layout/site-layout";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
      <SiteLayout>
        <StyledDiv>
          <Typography variant="h1">You are logged in!</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => logout()}
          >
            Logout
          </Button>
          <pre>{JSON.stringify(data?.me, null, 2)}</pre>
        </StyledDiv>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <StyledDiv>
        <CircularProgress />
      </StyledDiv>
    </SiteLayout>
  );
};

export default withApollo(Index);

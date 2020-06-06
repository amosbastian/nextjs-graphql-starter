import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import withApollo from "../apollo/withApollo";
import SiteLayout from "../components/site-layout/site-layout";
import useUser from "../hooks/use-user";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Index = () => {
  const { data } = useUser();

  if (data && data.me) {
    return (
      <SiteLayout>
        <Typography variant="h1">You are logged in!</Typography>
        <pre>{JSON.stringify(data?.me, null, 2)}</pre>
      </SiteLayout>
    );
  }

  return (
    <StyledDiv>
      <CircularProgress />
    </StyledDiv>
  );
};

export default withApollo(Index);

import React from "react";
import Typography from "@material-ui/core/Typography";
import withApollo from "../apollo/withApollo";
import SiteLayout from "../components/site-layout/site-layout";
import useUser from "../hooks/use-user";
import LoadingPage from "../components/loading-page/loading-page";

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

  return <LoadingPage />;
};

export default withApollo(Index);

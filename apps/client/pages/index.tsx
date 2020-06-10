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
        <Typography variant="h1">Hi, {data.me.username}</Typography>
      </SiteLayout>
    );
  }

  return <LoadingPage />;
};

export default withApollo(Index);

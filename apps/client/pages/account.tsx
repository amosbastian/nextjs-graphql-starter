import React from "react";
import SiteLayout from "../components/site-layout/site-layout";
import styled from "styled-components";
import withApollo from "../apollo/withApollo";

/* eslint-disable-next-line */
export interface AccountProps {}

export const Account = (props: AccountProps) => {
  return (
    <SiteLayout>
      <h1>Welcome to Account!</h1>
    </SiteLayout>
  );
};

export default withApollo(Account);

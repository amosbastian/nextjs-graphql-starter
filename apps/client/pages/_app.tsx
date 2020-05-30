import React from "react";
import { AppProps } from "next/app";
import { NextPage } from "next";
import SiteLayout from "../components/SiteLayout";

function MyApp({ Component, pageProps }: AppProps) {
  // FIXME:
  const getLayout =
    (Component as any).getLayout ||
    ((page: NextPage) => <SiteLayout children={page} />);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;

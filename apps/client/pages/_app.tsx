import React, { useEffect } from "react";
import { AppProps } from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import Providers from "../components/providers/providers";

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <Providers>
      <CssBaseline />
      <Component {...pageProps} />
    </Providers>
  );
}

export default CustomApp;

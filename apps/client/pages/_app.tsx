import React, { useEffect } from "react";
import { AppProps } from "next/app";
import {
  MuiThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import useTheme from "../hooks/use-theme";

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  const [theme] = useTheme();

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </StyledComponentsThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default CustomApp;

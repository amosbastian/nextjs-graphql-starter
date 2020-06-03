import React from "react";
import App from "next/app";
import {
  MuiThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/ui/theme";

class CustomApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <StylesProvider injectFirst>
            <CssBaseline />
            <Component {...pageProps} />
          </StylesProvider>
        </StyledComponentsThemeProvider>
      </MuiThemeProvider>
    );
  }
}

export default CustomApp;

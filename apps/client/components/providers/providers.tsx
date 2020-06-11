import React from "react";
import {
  MuiThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../ui/theme";
import useDarkMode from "use-dark-mode";
import SnackbarProvider from "./snackbar-provider";

export const Providers = ({ children }) => {
  const darkMode = useDarkMode(false);

  const theme = darkMode.value ? darkTheme : lightTheme;

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <SnackbarProvider>{children}</SnackbarProvider>
        </StyledComponentsThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default Providers;

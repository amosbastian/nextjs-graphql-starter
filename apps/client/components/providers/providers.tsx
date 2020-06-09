import React from "react";
import {
  MuiThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../ui/theme";
import useDarkMode from "use-dark-mode";

export const Providers = ({ children }) => {
  const darkMode = useDarkMode(false);

  const theme = darkMode.value ? darkTheme : lightTheme;

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          {children}
        </StyledComponentsThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default Providers;

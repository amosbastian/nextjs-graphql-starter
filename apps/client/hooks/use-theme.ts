import { useMemo, useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, Theme } from "@material-ui/core/styles";
import { themeOptions } from "../ui/theme";
import { PaletteType } from "@material-ui/core";

const useTheme = () => {
  const prefersDarkMode = useMediaQuery(
    "(prefers-color-scheme: dark)",
  );

  const paletteType: PaletteType = prefersDarkMode ? "dark" : "light";
  const theme = useMemo(() => createMuiTheme(themeOptions), []);

  const [customTheme, setCustomTheme] = useState<Theme>({
    ...theme,
    palette: {
      ...theme.palette,
      type: paletteType,
    },
  });

  const toggleTheme = () => {
    const updatedPaletteType: PaletteType =
      theme.palette.type === "light" ? "dark" : "light";

    const updatedTheme = {
      ...customTheme,
      palette: {
        ...customTheme.palette,
        type: updatedPaletteType,
      },
    };

    setCustomTheme(updatedTheme);
  };

  return [customTheme, toggleTheme] as const;
};

export default useTheme;

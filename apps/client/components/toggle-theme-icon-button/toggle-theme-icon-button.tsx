import React from "react";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import useDarkMode from "use-dark-mode";

export const ToggleThemeIconButton = () => {
  const { value, toggle } = useDarkMode(false);

  return (
    <Tooltip title={`Switch to ${value ? "dark" : "light"} mode`}>
      <IconButton aria-label="toggle theme" onClick={toggle}>
        {value ? <WbSunnyIcon /> : <Brightness2Icon />}
      </IconButton>
    </Tooltip>
  );
};

export default ToggleThemeIconButton;

import React from "react";
import { render } from "@testing-library/react";

import ToggleThemeIconButton from "./toggle-theme-icon-button";

describe(" ToggleThemeIconButton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ToggleThemeIconButton />);
    expect(baseElement).toBeTruthy();
  });
});

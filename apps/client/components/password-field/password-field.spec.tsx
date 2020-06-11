import React from "react";
import { render } from "@testing-library/react";

import PasswordField from "./password-field";

describe(" PasswordField", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<PasswordField />);
    expect(baseElement).toBeTruthy();
  });
});

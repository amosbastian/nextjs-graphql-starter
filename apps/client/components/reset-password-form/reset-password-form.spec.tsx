import React from "react";
import { render } from "@testing-library/react";

import ResetPasswordForm from "./reset-password-form";

describe(" ResetPasswordForm", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ResetPasswordForm />);
    expect(baseElement).toBeTruthy();
  });
});

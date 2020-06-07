import React from "react";
import { render } from "@testing-library/react";

import RequestPasswordResetForm from "./request-password-reset-form";

describe(" ResetPasswordForm", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<RequestPasswordResetForm />);
    expect(baseElement).toBeTruthy();
  });
});

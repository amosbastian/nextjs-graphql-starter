import React from "react";
import { render } from "@testing-library/react";

import AccountSecurityForm from "./account-security-form";

describe(" AccountSecurityForm", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AccountSecurityForm />);
    expect(baseElement).toBeTruthy();
  });
});

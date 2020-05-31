import React from "react";
import { render } from "@testing-library/react";

import SignUpForm from "./sign-up-form";

describe(" SignUpForm", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SignUpForm />);
    expect(baseElement).toBeTruthy();
  });
});

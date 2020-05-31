import React from "react";
import { render } from "@testing-library/react";

import AuthenticationLayout from "./authentication-layout";

describe(" AuthenticationLayout", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AuthenticationLayout />);
    expect(baseElement).toBeTruthy();
  });
});

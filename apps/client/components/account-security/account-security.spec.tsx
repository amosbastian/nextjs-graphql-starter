import React from "react";
import { render } from "@testing-library/react";

import AccountSecurity from "./account-security";

describe(" AccountSecurity", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AccountSecurity />);
    expect(baseElement).toBeTruthy();
  });
});

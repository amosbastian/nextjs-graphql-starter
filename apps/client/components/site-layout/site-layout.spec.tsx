import React from "react";
import { render } from "@testing-library/react";

import SiteLayout from "./site-layout";

describe(" SiteLayout", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SiteLayout />);
    expect(baseElement).toBeTruthy();
  });
});

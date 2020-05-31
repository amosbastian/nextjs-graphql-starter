import React from "react";
import { render } from "@testing-library/react";

import NavigationLink from "./navigation-link";

describe(" NavigationLink", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<NavigationLink />);
    expect(baseElement).toBeTruthy();
  });
});

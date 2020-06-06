import React from "react";
import { render } from "@testing-library/react";

import LoadingPage from "./loading-page";

describe(" LoadingPage", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<LoadingPage />);
    expect(baseElement).toBeTruthy();
  });
});

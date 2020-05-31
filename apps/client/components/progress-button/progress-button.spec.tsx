import React from "react";
import { render } from "@testing-library/react";

import ProgressButton from "./progress-button";

describe(" ProgressButton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ProgressButton />);
    expect(baseElement).toBeTruthy();
  });
});

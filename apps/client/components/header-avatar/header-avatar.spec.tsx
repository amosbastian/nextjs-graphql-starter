import React from "react";
import { render } from "@testing-library/react";

import HeaderAvatar from "./header-avatar";

describe(" HeaderAvatar", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<HeaderAvatar />);
    expect(baseElement).toBeTruthy();
  });
});

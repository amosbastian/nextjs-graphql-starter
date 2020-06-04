import React from "react";
import { render } from "@testing-library/react";

import AccountGeneral from "./account-general";

describe(" AccountGeneral", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AccountGeneral />);
    expect(baseElement).toBeTruthy();
  });
});

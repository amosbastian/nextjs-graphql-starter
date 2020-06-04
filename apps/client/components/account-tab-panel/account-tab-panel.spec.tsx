import React from "react";
import { render } from "@testing-library/react";

import AccountTabPanel from "./account-tab-panel";

describe(" AccountTabPanel", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AccountTabPanel />);
    expect(baseElement).toBeTruthy();
  });
});

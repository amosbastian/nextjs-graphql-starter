import React from "react";
import { render } from "@testing-library/react";

import AccountGeneralSettings from "./account-general-settings";

describe(" AccountGeneralSettings", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AccountGeneralSettings />);
    expect(baseElement).toBeTruthy();
  });
});

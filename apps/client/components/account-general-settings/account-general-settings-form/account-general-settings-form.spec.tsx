import React from "react";
import { render } from "@testing-library/react";

import AccountGeneralSettingsForm from "./account-general-settings-form";

describe(" AccountGeneralSettingsForm", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AccountGeneralSettingsForm />);
    expect(baseElement).toBeTruthy();
  });
});

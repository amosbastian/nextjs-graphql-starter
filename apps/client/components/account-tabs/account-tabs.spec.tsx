import React from "react";
import { render } from "@testing-library/react";

import AccountTabs from "./account-tabs";

describe(" AccountTabs", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AccountTabs />);
    expect(baseElement).toBeTruthy();
  });
});

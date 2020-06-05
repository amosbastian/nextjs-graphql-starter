import React from "react";
import { render } from "@testing-library/react";

import AccountProfilePictureForm from "./account-profile-picture-form";

describe(" AccountProfilePictureForm", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AccountProfilePictureForm />);
    expect(baseElement).toBeTruthy();
  });
});

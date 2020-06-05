import React from "react";

import styled from "styled-components";
import AccountGeneralSettingsForm from "./account-general-settings-form/account-general-settings-form";
import AccountProfilePictureForm from "./account-profile-picture-form/account-profile-picture-form";

/* eslint-disable-next-line */
export interface AccountGeneralSettingsProps {}

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing(4)}px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: 1fr 1fr;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    grid-template-columns: 2fr 3fr;
  }
`;

export const AccountGeneralSettings: React.FC<AccountGeneralSettingsProps> = () => {
  return (
    <StyledDiv>
      <div>
        <AccountProfilePictureForm />
      </div>
      <div>
        <AccountGeneralSettingsForm />
      </div>
    </StyledDiv>
  );
};

export default AccountGeneralSettings;

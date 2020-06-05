import React from "react";

import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import AccountGeneralSettingsForm from "./account-general-settings-form/account-general-settings-form";

/* eslint-disable-next-line */
export interface AccountGeneralSettingsProps {}

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing(4)}px;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    grid-template-columns: 1fr 1fr;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: 2fr 3fr;
  }
`;

export const AccountGeneralSettings: React.FC<AccountGeneralSettingsProps> = () => {
  return (
    <StyledDiv>
      <div>
        <Paper variant="outlined">Profile picture</Paper>
      </div>
      <div>
        <AccountGeneralSettingsForm />
      </div>
    </StyledDiv>
  );
};

export default AccountGeneralSettings;

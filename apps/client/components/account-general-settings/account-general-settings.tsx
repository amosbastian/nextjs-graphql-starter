import React from "react";
import styled from "styled-components";
import AccountGeneralSettingsForm, {
  ACCOUNT_GENERAL_SETTINGS_FORM_FRAGMENT,
} from "./account-general-settings-form/account-general-settings-form";
import AccountProfilePictureForm from "./account-profile-picture-form/account-profile-picture-form";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { AccountGeneralSettingsQuery } from "@nextjs-graphql-starter/codegen";

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

const ACCOUNT_GENERAL_SETTINGS_QUERY = gql`
  query accountGeneralSettings {
    me {
      id
      ...accountGeneralSettingsForm
    }
  }
  ${ACCOUNT_GENERAL_SETTINGS_FORM_FRAGMENT}
`;

export const AccountGeneralSettings: React.FC<AccountGeneralSettingsProps> = () => {
  const { data, loading } = useQuery<AccountGeneralSettingsQuery>(
    ACCOUNT_GENERAL_SETTINGS_QUERY,
  );

  if (loading) return <div>Loading...</div>;

  const { me } = data;

  return (
    <StyledDiv>
      <div>
        <AccountProfilePictureForm />
      </div>
      <div>
        <AccountGeneralSettingsForm me={me} />
      </div>
    </StyledDiv>
  );
};

export default AccountGeneralSettings;

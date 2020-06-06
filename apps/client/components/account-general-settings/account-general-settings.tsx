import React from "react";
import styled from "styled-components";
import AccountGeneralSettingsForm, {
  ACCOUNT_GENERAL_SETTINGS_FORM_USER_FRAGMENT,
} from "./account-general-settings-form/account-general-settings-form";
import AccountProfilePictureForm, {
  ACCOUNT_PROFILE_PICTURE_FORM_USER_FRAGMENT,
} from "./account-profile-picture-form/account-profile-picture-form";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { AccountGeneralSettingsUserQuery } from "@nextjs-graphql-starter/codegen";

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

const ACCOUNT_GENERAL_SETTINGS_USER_QUERY = gql`
  query accountGeneralSettingsUser {
    me {
      id
      ...accountProfilePictureFormUser
      ...accountGeneralSettingsFormUser
    }
  }
  ${ACCOUNT_PROFILE_PICTURE_FORM_USER_FRAGMENT}
  ${ACCOUNT_GENERAL_SETTINGS_FORM_USER_FRAGMENT}
`;

export const AccountGeneralSettings: React.FC = () => {
  const { data, loading } = useQuery<AccountGeneralSettingsUserQuery>(
    ACCOUNT_GENERAL_SETTINGS_USER_QUERY,
  );

  if (loading) return <div>Loading...</div>;

  const { me } = data;

  return (
    <StyledDiv>
      <div>
        <AccountProfilePictureForm user={me} />
      </div>
      <div>
        <AccountGeneralSettingsForm user={me} />
      </div>
    </StyledDiv>
  );
};

export default AccountGeneralSettings;

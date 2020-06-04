import React from "react";
import SiteLayout from "../components/site-layout/site-layout";
import withApollo from "../apollo/withApollo";
import AccountTabs from "../components/account-tabs/account-tabs";
import AccountTabPanel from "../components/account-tab-panel/account-tab-panel";
import AccountGeneral from "../components/account-general/account-general";
import AccountSecurity from "../components/account-security/account-security";

/* eslint-disable-next-line */
export interface AccountProps {}

export const Account: React.FC<AccountProps> = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number,
  ) => {
    setValue(newValue);
  };

  return (
    <SiteLayout>
      <AccountTabs onChange={handleChange} value={value} />
      <AccountTabPanel value={value} index={0}>
        <AccountGeneral />
      </AccountTabPanel>
      <AccountTabPanel value={value} index={1}>
        <AccountSecurity />
      </AccountTabPanel>
    </SiteLayout>
  );
};

export default withApollo(Account);

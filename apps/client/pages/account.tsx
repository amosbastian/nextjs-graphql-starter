import React from "react";
import SiteLayout from "../components/site-layout/site-layout";
import withApollo from "../apollo/withApollo";
import AccountTabs from "../components/account-tabs/account-tabs";
import AccountTabPanel from "../components/account-tab-panel/account-tab-panel";
import AccountGeneralSettings from "../components/account-general-settings/account-general-settings";
import AccountSecurity from "../components/account-security/account-security";
import useUser from "../hooks/use-user";
import LoadingPage from "../components/loading-page/loading-page";

export const Account: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const { data } = useUser();

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number,
  ) => {
    setValue(newValue);
  };

  if (data && data.me) {
    return (
      <SiteLayout>
        <AccountTabs onChange={handleChange} value={value} />
        <AccountTabPanel value={value} index={0}>
          <AccountGeneralSettings />
        </AccountTabPanel>
        <AccountTabPanel value={value} index={1}>
          <AccountSecurity />
        </AccountTabPanel>
      </SiteLayout>
    );
  }

  return <LoadingPage />;
};

export default withApollo(Account);

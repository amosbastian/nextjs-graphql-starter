import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function a11yProps(index: number) {
  return {
    id: `account-tab-${index}`,
    "aria-controls": `account-tabpanel-${index}`,
  };
}

// FIXME: can't extend TabsProps https://github.com/mui-org/material-ui/issues/17454
interface AccountTabsProps {
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
  value: number;
}

export const AccountTabs: React.FC<AccountTabsProps> = ({
  onChange,
  value,
}) => {
  return (
    <Tabs
      onChange={onChange}
      value={value}
      indicatorColor="primary"
      textColor="primary"
      variant="scrollable"
      scrollButtons="auto"
      aria-label="account tabs"
    >
      <Tab label="General" {...a11yProps(0)} />
      <Tab label="Security" {...a11yProps(1)} />
    </Tabs>
  );
};

export default AccountTabs;

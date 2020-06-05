import React from "react";
import AccountSecurityForm from "./account-security-form/account-security-form";

/* eslint-disable-next-line */
export interface AccountSecurityProps {}

export const AccountSecurity: React.FC<AccountSecurityProps> = () => {
  return (
    <div>
      <AccountSecurityForm />
    </div>
  );
};

export default AccountSecurity;

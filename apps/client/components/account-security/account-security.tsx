import React from "react";

import styled from "styled-components";

/* eslint-disable-next-line */
export interface AccountSecurityProps {}

const StyledAccountSecurity = styled.div`
  color: pink;
`;

export const AccountSecurity = (props: AccountSecurityProps) => {
  return (
    <StyledAccountSecurity>
      <h1>Welcome to AccountSecurity!</h1>
    </StyledAccountSecurity>
  );
};

export default AccountSecurity;

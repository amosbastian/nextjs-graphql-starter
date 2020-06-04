import React from "react";

import styled from "styled-components";

/* eslint-disable-next-line */
export interface AccountGeneralProps {}

const StyledAccountGeneral = styled.div`
  color: pink;
`;

export const AccountGeneral = (props: AccountGeneralProps) => {
  return (
    <StyledAccountGeneral>
      <h1>Welcome to AccountGeneral!</h1>
    </StyledAccountGeneral>
  );
};

export default AccountGeneral;

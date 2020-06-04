import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: ${({ theme }) => theme.spacing(4, 0)};
`;

interface AccountTabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const AccountTabPanel: React.FC<AccountTabPanelProps> = ({
  children,
  value,
  index,
  ...other
}) => {
  return (
    <StyledDiv
      role="tabpanel"
      hidden={value !== index}
      id={`account-tabpanel-${index}`}
      aria-labelledby={`account-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </StyledDiv>
  );
};

export default AccountTabPanel;

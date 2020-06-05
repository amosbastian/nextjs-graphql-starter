import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

/* eslint-disable-next-line */
export interface AccountSecurityFormProps {}

const StyledCardActions = styled(CardActions)`
  justify-content: flex-end;
`;

const StyledCardContent = styled(CardContent)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing(2)}px;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    grid-template-columns: 1fr 1fr;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const AccountSecurityForm: React.FC<AccountSecurityFormProps> = () => {
  return (
    <Card variant="outlined" component="form">
      <CardHeader title="Change password" />
      <Divider />
      <StyledCardContent>
        <TextField label="Password" variant="outlined" />
        <TextField label="Confirm password" variant="outlined" />
      </StyledCardContent>
      <Divider />
      <StyledCardActions>
        <Button color="primary" variant="contained" type="submit">
          Change password
        </Button>
      </StyledCardActions>
    </Card>
  );
};

export default AccountSecurityForm;

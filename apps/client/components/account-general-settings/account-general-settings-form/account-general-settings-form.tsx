import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

/* eslint-disable-next-line */
export interface AccountGeneralSettingsFormProps {}

const StyledCardActions = styled(CardActions)`
  justify-content: flex-end;
`;

const StyledCardContent = styled(CardContent)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const AccountGeneralSettingsForm: React.FC<AccountGeneralSettingsFormProps> = () => {
  return (
    <Card variant="outlined" component="form">
      <CardHeader title="Profile" />
      <Divider />
      <StyledCardContent>
        <TextField label="Username" variant="outlined" />
        <TextField label="Email Address" variant="outlined" />
      </StyledCardContent>
      <Divider />
      <StyledCardActions>
        <Button color="primary" variant="contained" type="submit">
          Save changes
        </Button>
      </StyledCardActions>
    </Card>
  );
};

export default AccountGeneralSettingsForm;

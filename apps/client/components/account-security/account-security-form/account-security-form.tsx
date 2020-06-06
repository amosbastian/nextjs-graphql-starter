import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import ProgressButton from "../../progress-button/progress-button";
import {
  UpdateUserPasswordMutation,
  UpdateUserPasswordMutationVariables,
} from "@nextjs-graphql-starter/codegen";

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

const UPDATE_USER_PASSWORD = gql`
  mutation updateUserPassword($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
    }
  }
`;

const initialState: State = {
  password: "",
  repeatedPassword: "",
  showPassword: false,
};

interface State {
  password: string;
  repeatedPassword: string;
  showPassword: boolean;
}

export const AccountSecurityForm: React.FC = () => {
  const [values, setValues] = useState<State>(initialState);

  const [updatePassword, { loading }] = useMutation<
    UpdateUserPasswordMutation,
    UpdateUserPasswordMutationVariables
  >(UPDATE_USER_PASSWORD, {
    onCompleted: () => {
      setValues(initialState);
    },
  });

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();

    const { password, repeatedPassword } = values;

    if (password !== repeatedPassword) {
      // TODO: show an error to the user
      return;
    }

    updatePassword({
      variables: {
        input: {
          password,
        },
      },
    });
  };

  return (
    <Card variant="outlined" component="form" onSubmit={handleSubmit}>
      <CardHeader title="Change password" />
      <Divider />
      <StyledCardContent>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-confirm-password">
            Confirm password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-confirm-password"
            type={values.showPassword ? "text" : "password"}
            value={values.repeatedPassword}
            onChange={handleChange("repeatedPassword")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
      </StyledCardContent>
      <Divider />
      <StyledCardActions>
        <ProgressButton
          color="primary"
          variant="contained"
          type="submit"
          loading={loading}
        >
          Change password
        </ProgressButton>
      </StyledCardActions>
    </Card>
  );
};

export default AccountSecurityForm;

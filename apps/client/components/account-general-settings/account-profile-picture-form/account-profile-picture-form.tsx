import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { AccountProfilePictureFormUserFragment } from "@nextjs-graphql-starter/codegen";
import ProgressButton from "../../progress-button/progress-button";

const StyledAvatar = styled(Avatar)`
  height: 100px;
  width: 100px;
  justify-self: center;
`;

const StyledButton = styled(Button)`
  width: 100%;
` as typeof Button;

const StyledDiv = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(1)}px;
  padding: ${({ theme }) => theme.spacing(1, 1)};
`;

const StyledCardContent = styled(CardContent)`
  display: grid;
  gap: ${({ theme }) => theme.spacing(2)}px;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  width: 100%;
`;

export const ACCOUNT_PROFILE_PICTURE_FORM_USER_FRAGMENT = gql`
  fragment accountProfilePictureFormUser on User {
    username
  }
`;

export interface AccountProfilePictureFormProps {
  user: AccountProfilePictureFormUserFragment;
}

export const AccountProfilePictureForm: React.FC<AccountProfilePictureFormProps> = ({
  user,
}) => {
  const { username } = user;
  const [image, setImage] = useState<string | null>(null);

  const imageSelectHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  console.log(image);

  return (
    <Card variant="outlined" component="form">
      <StyledCardContent>
        <StyledAvatar alt="Username" src={image} />
        <Typography align="center">{username}</Typography>
      </StyledCardContent>
      <StyledDiv>
        <div>
          <StyledInput
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={imageSelectHandler}
          />
          <StyledLabel htmlFor="contained-button-file">
            <StyledButton
              variant="text"
              color="primary"
              component="span"
            >
              Upload
            </StyledButton>
          </StyledLabel>
        </div>
        {image && (
          <ProgressButton
            color="primary"
            variant="contained"
            loading={false}
          >
            Confirm
          </ProgressButton>
        )}
      </StyledDiv>
    </Card>
  );
};

export default AccountProfilePictureForm;

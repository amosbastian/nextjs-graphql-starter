import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { gql } from "apollo-boost";
import {
  AccountProfilePictureFormUserFragment,
  UpdateUserPictureIdMutation,
  UpdateUserPictureIdMutationVariables,
} from "@nextjs-graphql-starter/codegen";
import cloudinaryUrl from "../../../utilities/cloudinary";
import { useMutation } from "@apollo/react-hooks";

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
    pictureId
    username
  }
`;

const UPDATE_USER_PICTURE_ID = gql`
  mutation updateUserPictureId($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
      pictureId
    }
  }
`;

export interface AccountProfilePictureFormProps {
  user: AccountProfilePictureFormUserFragment;
}

export const AccountProfilePictureForm: React.FC<AccountProfilePictureFormProps> = ({
  user,
}) => {
  const { pictureId, username } = user;
  const [image, setImage] = useState<File | null>(null);

  const [updateUserPictureId] = useMutation<
    UpdateUserPictureIdMutation,
    UpdateUserPictureIdMutationVariables
  >(UPDATE_USER_PICTURE_ID);

  const imageSelectHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setImage(event.target.files[0]);
  };

  const submitHandler = async (
    event: React.FormEvent<HTMLDivElement>,
  ) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", image);
    formData.append(
      "upload_preset",
      process.env.cloudinaryUploadPreset,
    );

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.cloudinaryCloudName}/upload`,
      {
        method: "POST",
        body: formData,
      },
    );

    const content = await response.json();
    const pictureId = content.public_id;
    console.log(pictureId);

    // Image could not be uploaded to Cloudinary
    if (!pictureId) return;

    updateUserPictureId({
      variables: { input: { pictureId } },
    });
  };

  const src = pictureId ? cloudinaryUrl(pictureId) : null;
  const newImageSrc = image ? URL.createObjectURL(image) : null;

  return (
    <Card
      variant="outlined"
      component="form"
      onSubmit={submitHandler}
    >
      <StyledCardContent>
        <StyledAvatar alt="Username" src={src || newImageSrc} />
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
          <Button color="primary" variant="contained" type="submit">
            Confirm
          </Button>
        )}
      </StyledDiv>
    </Card>
  );
};

export default AccountProfilePictureForm;

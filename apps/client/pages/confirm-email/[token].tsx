import React, { useEffect } from "react";
import withApollo from "../../apollo/withApollo";
import LoadingPage from "../../components/loading-page/loading-page";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import {
  ConfirmUserEmailMutation,
  ConfirmUserEmailMutationVariables,
} from "@nextjs-graphql-starter/codegen";
import { useSnackbar } from "notistack";

const CONFIRM_USER_EMAIL = gql`
  mutation confirmUserEmail($token: String!) {
    confirmUserEmail(token: $token)
  }
`;

export const ConfirmEmail = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const { token } = router.query;

  const [confirmUserEmail, { loading }] = useMutation<
    ConfirmUserEmailMutation,
    ConfirmUserEmailMutationVariables
  >(CONFIRM_USER_EMAIL, {
    onCompleted: () => {
      enqueueSnackbar("Email confirmed!", { variant: "success" });
      router.push("/");
    },
  });

  useEffect(() => {
    confirmUserEmail({
      variables: { token: token as string },
    });
  }, [confirmUserEmail, token]);

  if (loading) return <LoadingPage />;

  return null;
};

export default withApollo(ConfirmEmail);

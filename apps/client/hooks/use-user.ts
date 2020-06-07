import { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import Router from "next/router";
import { gql } from "apollo-boost";
import { UserLoggedInQuery } from "@nextjs-graphql-starter/codegen";

export const USER_LOGGED_IN = gql`
  query userLoggedIn {
    me {
      id
    }
  }
`;

const useUser = (redirect = true) => {
  const queryResult = useQuery<UserLoggedInQuery>(USER_LOGGED_IN);

  useEffect(() => {
    if (
      !queryResult.loading &&
      queryResult.data.me === null &&
      typeof window !== "undefined" &&
      redirect
    ) {
      Router.replace("/login");
    }
  }, [queryResult.data, queryResult.loading, redirect]);

  return queryResult;
};

export default useUser;

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  pictureId?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  signUp: User;
  login?: Maybe<User>;
  logout: Scalars['Boolean'];
  confirmUserEmail: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  changePassword?: Maybe<User>;
  updateUser: User;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationConfirmUserEmailArgs = {
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
  id?: Maybe<Scalars['ID']>;
};

export type SignUpInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ChangePasswordInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type UpdateUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  pictureId?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type AccountGeneralSettingsFormUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'email'>
);

export type UpdateUserAccountSettingsMutationVariables = {
  id: Scalars['ID'];
  input: UpdateUserInput;
};


export type UpdateUserAccountSettingsMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'username'>
  ) }
);

export type AccountGeneralSettingsUserQueryVariables = {};


export type AccountGeneralSettingsUserQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & AccountProfilePictureFormUserFragment
    & AccountGeneralSettingsFormUserFragment
  )> }
);

export type AccountProfilePictureFormUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'pictureId' | 'username'>
);

export type UpdateUserPictureIdMutationVariables = {
  input: UpdateUserInput;
};


export type UpdateUserPictureIdMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'pictureId'>
  ) }
);

export type UpdateUserPasswordMutationVariables = {
  input: UpdateUserInput;
};


export type UpdateUserPasswordMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type UsernameQueryVariables = {};


export type UsernameQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'pictureId'>
  )> }
);

export type LoginMutationVariables = {
  input: LoginInput;
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  )> }
);

export type ForgotPasswordMutationVariables = {
  email: Scalars['String'];
};


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type ChangePasswordMutationVariables = {
  input: ChangePasswordInput;
};


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type SignUpMutationVariables = {
  input: SignUpInput;
};


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { signUp: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type UserLoggedInQueryVariables = {};


export type UserLoggedInQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type ConfirmUserEmailMutationVariables = {
  token: Scalars['String'];
};


export type ConfirmUserEmailMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'confirmUserEmail'>
);

export const AccountGeneralSettingsFormUserFragmentDoc = gql`
    fragment accountGeneralSettingsFormUser on User {
  id
  username
  email
}
    `;
export const AccountProfilePictureFormUserFragmentDoc = gql`
    fragment accountProfilePictureFormUser on User {
  pictureId
  username
}
    `;
export const UpdateUserAccountSettingsDocument = gql`
    mutation updateUserAccountSettings($id: ID!, $input: UpdateUserInput!) {
  updateUser(id: $id, input: $input) {
    id
    email
    username
  }
}
    `;
export type UpdateUserAccountSettingsMutationFn = ApolloReactCommon.MutationFunction<UpdateUserAccountSettingsMutation, UpdateUserAccountSettingsMutationVariables>;

/**
 * __useUpdateUserAccountSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateUserAccountSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserAccountSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserAccountSettingsMutation, { data, loading, error }] = useUpdateUserAccountSettingsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserAccountSettingsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserAccountSettingsMutation, UpdateUserAccountSettingsMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUserAccountSettingsMutation, UpdateUserAccountSettingsMutationVariables>(UpdateUserAccountSettingsDocument, baseOptions);
      }
export type UpdateUserAccountSettingsMutationHookResult = ReturnType<typeof useUpdateUserAccountSettingsMutation>;
export type UpdateUserAccountSettingsMutationResult = ApolloReactCommon.MutationResult<UpdateUserAccountSettingsMutation>;
export type UpdateUserAccountSettingsMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserAccountSettingsMutation, UpdateUserAccountSettingsMutationVariables>;
export const AccountGeneralSettingsUserDocument = gql`
    query accountGeneralSettingsUser {
  me {
    id
    ...accountProfilePictureFormUser
    ...accountGeneralSettingsFormUser
  }
}
    ${AccountProfilePictureFormUserFragmentDoc}
${AccountGeneralSettingsFormUserFragmentDoc}`;

/**
 * __useAccountGeneralSettingsUserQuery__
 *
 * To run a query within a React component, call `useAccountGeneralSettingsUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountGeneralSettingsUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountGeneralSettingsUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useAccountGeneralSettingsUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AccountGeneralSettingsUserQuery, AccountGeneralSettingsUserQueryVariables>) {
        return ApolloReactHooks.useQuery<AccountGeneralSettingsUserQuery, AccountGeneralSettingsUserQueryVariables>(AccountGeneralSettingsUserDocument, baseOptions);
      }
export function useAccountGeneralSettingsUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AccountGeneralSettingsUserQuery, AccountGeneralSettingsUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AccountGeneralSettingsUserQuery, AccountGeneralSettingsUserQueryVariables>(AccountGeneralSettingsUserDocument, baseOptions);
        }
export type AccountGeneralSettingsUserQueryHookResult = ReturnType<typeof useAccountGeneralSettingsUserQuery>;
export type AccountGeneralSettingsUserLazyQueryHookResult = ReturnType<typeof useAccountGeneralSettingsUserLazyQuery>;
export type AccountGeneralSettingsUserQueryResult = ApolloReactCommon.QueryResult<AccountGeneralSettingsUserQuery, AccountGeneralSettingsUserQueryVariables>;
export const UpdateUserPictureIdDocument = gql`
    mutation updateUserPictureId($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    pictureId
  }
}
    `;
export type UpdateUserPictureIdMutationFn = ApolloReactCommon.MutationFunction<UpdateUserPictureIdMutation, UpdateUserPictureIdMutationVariables>;

/**
 * __useUpdateUserPictureIdMutation__
 *
 * To run a mutation, you first call `useUpdateUserPictureIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserPictureIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserPictureIdMutation, { data, loading, error }] = useUpdateUserPictureIdMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserPictureIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserPictureIdMutation, UpdateUserPictureIdMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUserPictureIdMutation, UpdateUserPictureIdMutationVariables>(UpdateUserPictureIdDocument, baseOptions);
      }
export type UpdateUserPictureIdMutationHookResult = ReturnType<typeof useUpdateUserPictureIdMutation>;
export type UpdateUserPictureIdMutationResult = ApolloReactCommon.MutationResult<UpdateUserPictureIdMutation>;
export type UpdateUserPictureIdMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserPictureIdMutation, UpdateUserPictureIdMutationVariables>;
export const UpdateUserPasswordDocument = gql`
    mutation updateUserPassword($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
  }
}
    `;
export type UpdateUserPasswordMutationFn = ApolloReactCommon.MutationFunction<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>;

/**
 * __useUpdateUserPasswordMutation__
 *
 * To run a mutation, you first call `useUpdateUserPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserPasswordMutation, { data, loading, error }] = useUpdateUserPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>(UpdateUserPasswordDocument, baseOptions);
      }
export type UpdateUserPasswordMutationHookResult = ReturnType<typeof useUpdateUserPasswordMutation>;
export type UpdateUserPasswordMutationResult = ApolloReactCommon.MutationResult<UpdateUserPasswordMutation>;
export type UpdateUserPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const UsernameDocument = gql`
    query username {
  me {
    id
    username
    pictureId
  }
}
    `;

/**
 * __useUsernameQuery__
 *
 * To run a query within a React component, call `useUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsernameQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsernameQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsernameQuery, UsernameQueryVariables>) {
        return ApolloReactHooks.useQuery<UsernameQuery, UsernameQueryVariables>(UsernameDocument, baseOptions);
      }
export function useUsernameLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsernameQuery, UsernameQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UsernameQuery, UsernameQueryVariables>(UsernameDocument, baseOptions);
        }
export type UsernameQueryHookResult = ReturnType<typeof useUsernameQuery>;
export type UsernameLazyQueryHookResult = ReturnType<typeof useUsernameLazyQuery>;
export type UsernameQueryResult = ApolloReactCommon.QueryResult<UsernameQuery, UsernameQueryVariables>;
export const LoginDocument = gql`
    mutation login($input: LoginInput!) {
  login(input: $input) {
    id
    username
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation forgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = ApolloReactCommon.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = ApolloReactCommon.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation changePassword($input: ChangePasswordInput!) {
  changePassword(input: $input) {
    id
  }
}
    `;
export type ChangePasswordMutationFn = ApolloReactCommon.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = ApolloReactCommon.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const SignUpDocument = gql`
    mutation signUp($input: SignUpInput!) {
  signUp(input: $input) {
    id
  }
}
    `;
export type SignUpMutationFn = ApolloReactCommon.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        return ApolloReactHooks.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, baseOptions);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = ApolloReactCommon.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = ApolloReactCommon.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const UserLoggedInDocument = gql`
    query userLoggedIn {
  me {
    id
  }
}
    `;

/**
 * __useUserLoggedInQuery__
 *
 * To run a query within a React component, call `useUserLoggedInQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserLoggedInQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserLoggedInQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserLoggedInQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserLoggedInQuery, UserLoggedInQueryVariables>) {
        return ApolloReactHooks.useQuery<UserLoggedInQuery, UserLoggedInQueryVariables>(UserLoggedInDocument, baseOptions);
      }
export function useUserLoggedInLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserLoggedInQuery, UserLoggedInQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserLoggedInQuery, UserLoggedInQueryVariables>(UserLoggedInDocument, baseOptions);
        }
export type UserLoggedInQueryHookResult = ReturnType<typeof useUserLoggedInQuery>;
export type UserLoggedInLazyQueryHookResult = ReturnType<typeof useUserLoggedInLazyQuery>;
export type UserLoggedInQueryResult = ApolloReactCommon.QueryResult<UserLoggedInQuery, UserLoggedInQueryVariables>;
export const ConfirmUserEmailDocument = gql`
    mutation confirmUserEmail($token: String!) {
  confirmUserEmail(token: $token)
}
    `;
export type ConfirmUserEmailMutationFn = ApolloReactCommon.MutationFunction<ConfirmUserEmailMutation, ConfirmUserEmailMutationVariables>;

/**
 * __useConfirmUserEmailMutation__
 *
 * To run a mutation, you first call `useConfirmUserEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmUserEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmUserEmailMutation, { data, loading, error }] = useConfirmUserEmailMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useConfirmUserEmailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ConfirmUserEmailMutation, ConfirmUserEmailMutationVariables>) {
        return ApolloReactHooks.useMutation<ConfirmUserEmailMutation, ConfirmUserEmailMutationVariables>(ConfirmUserEmailDocument, baseOptions);
      }
export type ConfirmUserEmailMutationHookResult = ReturnType<typeof useConfirmUserEmailMutation>;
export type ConfirmUserEmailMutationResult = ApolloReactCommon.MutationResult<ConfirmUserEmailMutation>;
export type ConfirmUserEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<ConfirmUserEmailMutation, ConfirmUserEmailMutationVariables>;
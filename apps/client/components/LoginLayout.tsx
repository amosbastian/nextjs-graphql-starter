import React from "react";
import styled from "styled-components";
import { NextPage } from "next";

const LoginLayout: React.FC = ({ children }) => {
  return (
    <div>
      Login layout
      <div>{children}</div>
    </div>
  );
};

export const getLayout = (page: NextPage) => (
  <LoginLayout>{page}</LoginLayout>
);

export default LoginLayout;

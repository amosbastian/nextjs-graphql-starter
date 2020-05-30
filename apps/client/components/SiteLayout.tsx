import React from "react";
import styled from "styled-components";
import { NextPage } from "next";

const SiteLayout: React.FC = ({ children }) => {
  return (
    <div>
      Site layout
      <div>{children}</div>
    </div>
  );
};

export const getLayout = (page: NextPage) => (
  <SiteLayout>{page}</SiteLayout>
);

export default SiteLayout;

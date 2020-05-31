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

export default SiteLayout;

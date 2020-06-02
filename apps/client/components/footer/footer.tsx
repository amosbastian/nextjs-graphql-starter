import React from "react";

import styled from "styled-components";

/* eslint-disable-next-line */
export interface FooterProps {}

const StyledFooter = styled.footer`
  color: pink;
`;

export const Footer: React.FC<FooterProps> = () => {
  return <StyledFooter>Footer!</StyledFooter>;
};

export default Footer;

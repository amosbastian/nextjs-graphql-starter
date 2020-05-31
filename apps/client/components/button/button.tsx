import React from "react";

import styled from "styled-components";

export type ButtonProps = React.ButtonHTMLAttributes<
  HTMLButtonElement
>;

const StyledButton = styled.button`
  padding: 0.35rem 1.25rem;
  cursor: pointer;
  background-color: #6c63ff;
  border-radius: 0.25rem;
  border: 1px solid transparent;
  color: white;
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  ...rest
}) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

Button.defaultProps = {
  type: "button",
};

export default Button;

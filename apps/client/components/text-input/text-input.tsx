import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  input {
    transition: all 0.2s;
    padding: 0.62rem 1rem;
    outline: none;
    border-radius: 0.5rem;
    color: #0d0c22;
    background-color: #f3f3f4;
    border: 1px solid transparent;

    &:hover {
      background-color: #fff;
      border-color: rgba(0, 0, 0, 0.1);
      box-shadow: 0 0 0 4px rgba(67, 65, 144, 0.1);
    }
  }
`;

const StyledSpan = styled.span`
  font-weight: 600;
`;

const StyledLabel = styled.label`
  display: grid;
  gap: 1rem;
`;

export interface TextInputProps
  extends React.HTMLProps<HTMLInputElement> {
  className?: string;
  label: string;
  required?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  className,
  label,
  required = false,
  ...rest
}) => {
  return (
    <StyledDiv className={className}>
      <StyledLabel>
        <StyledSpan>{label}</StyledSpan>
        <input {...rest} />
      </StyledLabel>
    </StyledDiv>
  );
};

export default TextInput;

import React from "react";
import styled from "styled-components";
import Button, { ButtonProps } from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const StyledCircularProgress = styled(CircularProgress)`
  position: absolute;
  top: calc(50% - 12px);
  left: calc(50% - 12px);
`;

const StyledDiv = styled.div`
  position: relative;
  width: inherit;
  display: flex;
  align-content: center;

  button {
    width: 100%;
    height: 100%;
  }

  & path {
    fill: currentColor;
  }
`;

interface ProgressButtonProps extends ButtonProps {
  className?: string;
  loading: boolean;
}

const ProgressButton: React.FC<ProgressButtonProps> = ({
  className,
  disabled,
  loading,
  ...rest
}) => {
  return (
    <StyledDiv className={className}>
      <Button disabled={loading || disabled} {...rest} />
      {loading && <StyledCircularProgress size={24} />}
    </StyledDiv>
  );
};

export default ProgressButton;

import React, { createRef, useCallback } from "react";
import { IconButton } from "@material-ui/core";
import { SnackbarProvider as NotistackSnackbarProvider } from "notistack";
import CloseIcon from "@material-ui/icons/Close";

const SnackbarProvider: React.FC = ({ children }) => {
  const notistackRef = createRef<any>();

  const onClickDismiss = useCallback(
    (key: string | number | undefined) => () => {
      const { current } = notistackRef;

      if (current) {
        current.closeSnackbar(key);
      }
    },
    [notistackRef],
  );

  const dismissSnackbar = useCallback(
    (key: string | number | undefined) => (
      <IconButton
        key="close"
        aria-label="close"
        color="inherit"
        onClick={onClickDismiss(key)}
      >
        <CloseIcon />
      </IconButton>
    ),
    [onClickDismiss],
  );

  return (
    <NotistackSnackbarProvider
      ref={notistackRef}
      maxSnack={3}
      action={dismissSnackbar}
      classes={{
        variantSuccess: "default-snackbar-content",
        variantError: "default-snackbar-content",
        variantInfo: "default-snackbar-content",
        variantWarning: "default-snackbar-content",
      }}
    >
      {children}
    </NotistackSnackbarProvider>
  );
};

export default SnackbarProvider;

import React, { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";

/** Components */
import Snackbar from "./CustomSnackbar";

const SnackbarContext = createContext(null);

export const useSnackbarContext = () => useContext(SnackbarContext);

function SnackbarProvider({ children }) {
  const [snackbarOptions, setSnackbarOptions] = useState({
    open: false,
    message: "",
    type: "success",
    onClose: () => {
      setSnackbarOptions(state => ({ ...state, open: false }));
    }
  });

  const showSnackbar = (message, type = "info") => {
    setSnackbarOptions(state => ({
      ...state,
      message,
      open: true,
      type
    }));
  };

  return (
    <SnackbarContext.Provider
      value={{ snackbarOptions, setSnackbarOptions, showSnackbar }}
    >
      <Snackbar {...snackbarOptions} />
      {children}
    </SnackbarContext.Provider>
  );
}

SnackbarProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default SnackbarProvider;

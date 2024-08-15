import { SnackbarProps } from "@mui/material";
import React, { createContext } from "react";

export interface ExtendedSnackbarProps extends SnackbarProps {
  id: string;
}

interface SnackBarShelfProps {
  snackBars: ExtendedSnackbarProps[];
  setSnackBars: React.Dispatch<React.SetStateAction<ExtendedSnackbarProps[]>>;
  snackBar: (snackBarData: Omit<ExtendedSnackbarProps, "id">) => void;
  handleOnClose: (snackBarId: string) => void;
}

/**
 * Snackbar Context offers the below global state functionalities.
 * @property {Array<Object>} snackBars - Holds the Snackbars data
 * @property {Function} setSnackBars - Updater function for snack bars
 * @property {Function} snackBar - used to create a new snackbar
 * @property {Function} handleOnClose - use this to Close one particular snackbar takes snackbar id as argument
 */
export const SnackbarContext = createContext<SnackBarShelfProps>({
  snackBars: [],
  setSnackBars: () => {},
  snackBar: () => {},
  handleOnClose: () => {},
});

/**
 * Provides the Date required to render the Snackbars.
 * - Wrap it at the top of the root element to access it around you components
 */

const SnackBarShelfProvider = ({ children }: { children: React.ReactNode }) => {
  const [snackBars, setSnackBars] = React.useState<ExtendedSnackbarProps[]>([]);

  const snackBar = (snackBarData: Omit<ExtendedSnackbarProps, "id">) => {
    const newSnackBar: ExtendedSnackbarProps = {
      ...snackBarData,
      id: crypto.randomUUID(),
      open: true,
    };

    setSnackBars((prevSnackBars) => [...prevSnackBars, newSnackBar]);
  };

  const handleOnClose = (snackBarId: string) => {
    setSnackBars((currentItems) =>
      currentItems.filter((item) => item.id !== snackBarId)
    );
  };

  const memoizedValues = React.useMemo(() => {
    return { snackBars, setSnackBars, snackBar, handleOnClose };
  }, [snackBars]);

  return (
    <SnackbarContext.Provider value={memoizedValues}>
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackBarShelfProvider;

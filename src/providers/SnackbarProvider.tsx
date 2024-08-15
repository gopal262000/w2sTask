import { Snackbar, SnackbarProps } from "@mui/material";
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

export const SnackbarContext = createContext<SnackBarShelfProps>({
  snackBars: [],
  setSnackBars: () => {},
  snackBar: () => {},
  handleOnClose: () => {},
});

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

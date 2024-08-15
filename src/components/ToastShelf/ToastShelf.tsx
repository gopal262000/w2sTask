import { useContext } from "react";
import {
  ExtendedSnackbarProps,
  SnackbarContext,
} from "../../providers/SnackbarProvider";
import { Snackbar } from "@mui/material";

/**
 * Using the SnackbarProvider and extracting the snackbars shows the snackbar
 * @returns Returns the list of snackbars
 */
function ToastShelf() {
  const { snackBars, handleOnClose } = useContext(SnackbarContext);

  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notification"
      style={{ listStyleType: "none" }}
    >
      {snackBars.map((snackBar: ExtendedSnackbarProps) => {
        return (
          <li key={snackBar.id}>
            <Snackbar
              key={snackBar.id}
              {...snackBar}
              autoHideDuration={6000}
              onClose={() => handleOnClose(snackBar.id)}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;

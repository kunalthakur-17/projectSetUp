import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function GlobalToaster({
  open,
  handleClose,
  message,
  severity,
}) {
  //   const [open, setOpen] = useState(false);
  //   const [message, setMessage] = useState("");
  //   const [severity, setSeverity] = useState("info"); // success, error, warning, info

  // Function to show toaster message
  //   const showToast = (msg, sev = "info") => {
  //     setMessage(msg);
  //     setSeverity(sev);
  //     setOpen(true);
  //   };

  // Example usage: call showToast('Hello world!', 'success') anywhere to show

  return (
    <>
      {/* Add your app components here */}

      {/* Snackbar toaster */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}

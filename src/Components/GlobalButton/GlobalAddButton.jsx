import { Button } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const GlobalAddButton = ({ onClick, text, startIcon, type, endIcon  }) => {
  return (
    <Button
      variant="contained"
      type={type}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default GlobalAddButton;

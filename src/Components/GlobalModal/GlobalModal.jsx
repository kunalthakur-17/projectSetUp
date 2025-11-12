import React, { useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
  TextField,
  Stack,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";

const GlobalModal = ({
  loading,
  open,
  onClose,
  title = "Dialog",
  submitLabel = "Save",
  cancelLabel = "Cancel",
  fullWidth = true,
  maxWidth = "sm",
  onSubmitForm,
  fields = [],
  defaultValues = {},
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues });

  useEffect(() => {
    if (open) {
      reset({ ...defaultValues }); // Use a new object only when modal opens
    }
  }, [open]); // Only run when `open` changes

  const onSubmit = (data) => {
    onSubmitForm(data);
    // reset();
  };

  const handleClose = () => {
    onClose();
    reset();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      <DialogTitle>
        <Typography variant="h6">{title}</Typography>
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <DialogContent dividers>
          <Stack spacing={2}>
            {fields.map((field) => (
              <TextField
                key={field.name}
                fullWidth
                label={field.label}
                type={field.type || "text"}
                multiline={field.multiline || false}
                minRows={field.multiline ? 4 : undefined}
                {...register(field.name, field.validation)}
                error={!!errors[field.name]}
                helperText={errors[field.name]?.message}
              />
            ))}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            {cancelLabel}
          </Button>
          <Button type="submit" variant="contained">
            {loading ? <CircularProgress /> : submitLabel}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default GlobalModal;

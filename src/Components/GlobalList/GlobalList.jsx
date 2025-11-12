import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Typography,
  Divider,
  Tooltip,
  Box,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";
import EditIcon from "@mui/icons-material/Edit";

const GlobalList = ({
  data = [],
  headers,
  handleEdit,
  handleDelete,
  handleBlockToggle,
}) => {
  return (
    <Box p={2}>
      {/* Header Row */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={2}
        py={1}
        bgcolor="#f5f5f5"
        borderRadius={1}
        mb={1}
      >
        {[...headers, { id: "action", label: "Action" }]?.map((ele) => {
          return (
            <Typography variant="subtitle2" sx={{ flex: 2 }}>
              {ele?.label}
            </Typography>
          );
        })}
      </Box>

      {/* List Items */}
      <List>
        {data.map((ele, index) => (
          <React.Fragment key={ele.id}>
            <ListItem disableGutters>
              <Box display="flex" alignItems="center" width="100%" px={2}>
                {/* Name with avatar */}
                <Box display="flex" alignItems="center" flex={2}>
                  {ele?.title}
                </Box>

                {/* Email */}
                <Typography flex={3}>{ele.content}</Typography>

                {/* Actions */}
                <Stack
                  direction="row"
                  spacing={1}
                  flex={1}
                  justifyContent="center"
                >
                  {handleEdit && (
                    <Tooltip title="Edit">
                      <IconButton onClick={() => handleEdit(ele.id)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                  {handleBlockToggle && (
                    <Tooltip
                      title={ele.status === "blocked" ? "Unblock" : "Block"}
                    >
                      <IconButton
                        onClick={() => handleBlockToggle(ele.id)}
                        color={ele.status === "blocked" ? "error" : "default"}
                      >
                        <BlockIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                  {handleDelete && (
                    <Tooltip title="Delete">
                      <IconButton
                        onClick={() => handleDelete(ele.id)}
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                </Stack>
              </Box>
            </ListItem>
            {index < data.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default GlobalList;

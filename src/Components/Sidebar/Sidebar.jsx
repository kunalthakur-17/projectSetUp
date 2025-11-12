import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = () => {
  const navItems = [
    {
      text: "Home",
      icon: <HomeIcon fontSize="large" color="primary" />,
      path: "/home",
    },
    {
      text: "Blogs",
      icon: <ArticleIcon fontSize="large" color="primary" />,
      path: "/blogs",
    },
    {
      text: "Users",
      icon: <AccountCircleIcon fontSize="large" color="primary" />,
      path: "/users",
    },
    {
      text: "Profile",
      icon: <AccountCircleIcon fontSize="large" color="primary" />,
      path: "/profile",
    },
    // Add more routes here
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "#1e1e2f",
          color: "#fff",
        },
      }}
    >
      <Box sx={{ 
        height: 64, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderBottom: '1px solid #444' 
      }}>
        <Typography variant="h6" fontWeight="bold" sx={{ color: '#90caf9' }}>
          Dashboard
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <NavLink
            key={item.text}
            to={item.path}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#90caf9" : "#fff",
              backgroundColor: isActive ? "#2e2e42" : "transparent",
              display: "block",
              borderRadius: "4px",
              margin: "4px 8px",
            })}
          >
            <ListItem button>
              <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

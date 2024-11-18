"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { counterContext } from "../context/page";
import LogoutIcon from "@mui/icons-material/Logout";
import Cookies from "js-cookie";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: open ? drawerWidth : 0,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));
const handleLogout = () => {
  Cookies.remove("token");
  window.location.replace("/login");
  window.history.replaceState(null, "", "/login");
};
const ListContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 64,
  left: 0,
  disolay: "flex",
  minHeight: "100vh",
  width: drawerWidth,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  zIndex: 1000,
  transition: "width 0.3s ease",
  "& .MuiListItemText-root": {
    color: "black",
  },
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const { open, setOpen } = React.useContext(counterContext);

  const toggleList = () => {
    setOpen(!open);
  };

  const ListItems = (
    <ListContainer sx={{ width: open ? drawerWidth : 0 }}>
      <List>
        {[
          { path: "/Dashboard", icon: <DashboardIcon />, label: "Dashboard" },
          { path: "/Products", icon: <ShoppingCartIcon />, label: "Products" },
          {
            path: "/Generate-Order",
            icon: <AddShoppingCartIcon />,
            label: "Generate Order",
          },
          { path: "/Invoice", icon: <ReceiptIcon />, label: "Invoice" },
        ].map(({ path, icon, label }) => (
          <Link href={path} key={path}>
            <ListItem key={path} disablePadding>
              <ListItemButton component="div">
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </ListContainer>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open list"
            onClick={toggleList}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {/* {constantText.persistentDrawer} */}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="logout"
            onClick={handleLogout}
          >
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>{open && ListItems}</Main>
    </Box>
  );
}

import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import UserForm from './components/UserForm';
import  AppBar from '@mui/material/AppBar';
import {blue, pink } from "@mui/material/colors";
import Toolbar from '@mui/material/Toolbar';
import React from "react";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

function App() {
  const theme = createTheme({
    palette: {
    primary: blue,
    secondary: pink,
    },
});
  return (
    <ThemeProvider theme={theme}>
    <React.Fragment>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    FindME
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        <UserForm/>
      </React.Fragment>
      </ThemeProvider>
  );
}

export default App;

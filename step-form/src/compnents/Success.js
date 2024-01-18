import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export class Success extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar sx={{ justifyContent: 'space-between', textAlign: 'center' }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Success
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <h1  style={{ color: 'red' }}>Congratulation! Your Form has been submitted.</h1>
        <p>You will get an email with provided details </p>
      </div>
    );
  }
}

export default Success;
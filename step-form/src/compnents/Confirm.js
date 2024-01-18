import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { List, ListItem } from '@mui/material';
// ... (existing imports)
// ... (existing imports)

// ... (existing imports)

export class FormPersonalDetail extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM 
    this.props.nextStep();
  };

  Back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values: { firstName, lastName, email, bio, city, occupation } } = this.props;

    return (
      <>
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
                Confirm User Data
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <List sx={{ width: '80%', maxWidth: 600, textAlign: 'left', backgroundColor: '#f5f5f5', padding: 4, borderRadius: 8 }}>
            <ListItem sx={{ transition: 'opacity 0.3s', '&:hover': { opacity: 0.8 } }}>
              <Typography variant="body1" color="textPrimary">
                <strong>First Name:</strong> {firstName}
              </Typography>
            </ListItem>
            <ListItem sx={{ transition: 'opacity 0.3s', '&:hover': { opacity: 0.8 } }}>
              <Typography variant="body1" color="textPrimary">
                <strong>Last Name:</strong> {lastName}
              </Typography>
            </ListItem>
            <ListItem sx={{ transition: 'opacity 0.3s', '&:hover': { opacity: 0.8 } }}>
              <Typography variant="body1" color="textPrimary">
                <strong>Email:</strong> {email}
              </Typography>
            </ListItem>
            <ListItem sx={{ transition: 'opacity 0.3s', '&:hover': { opacity: 0.8 } }}>
              <Typography variant="body1" color="textPrimary">
                <strong>Occupation:</strong> {occupation}
              </Typography>
            </ListItem>
            <ListItem sx={{ transition: 'opacity 0.3s', '&:hover': { opacity: 0.8 } }}>
              <Typography variant="body1" color="textPrimary">
                <strong>City:</strong> {city}
              </Typography>
            </ListItem>
            <ListItem sx={{ transition: 'opacity 0.3s', '&:hover': { opacity: 0.8 } }}>
              <Typography variant="body1" color="textPrimary">
                <strong>Bio:</strong> {bio}
              </Typography>
            </ListItem>
          </List>

          <Box mt={4}>
            <Button variant="contained" color="primary" onClick={this.continue}>
              Confirm & Continue
            </Button>
            <Button
              style={{ marginLeft: '15px', backgroundColor: 'white', color: 'darkblue' }}
              variant="contained"
              color="primary"
              onClick={this.Back}
            >
              Go Back
            </Button>
          </Box>
        </Box>
      </>
    );
  }
}

export default FormPersonalDetail;


import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';

export class FormUserDetail extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  handleChange = (input) => (e) => {
    this.props.handleChange(input, e);
  };

  render() {
    const { values } = this.props;

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
                Enter your Details
              </Typography>

              <Button color="inherit" onClick={this.continue}>
                Continue
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <br />
        <Box
          textAlign={"center"}
          height="100vh" // Optional: Set the height to fill the viewport
        >
          <TextField
            style={{ marginTop: '13px' }}
            margin='12px'
            id="first-name"
            label="First Name"
            variant="standard"
            onChange={this.handleChange('firstName')}
            value={values.firstName}
          />
          <br />
          <TextField
            style={{ marginTop: '13px' }}
            id="last-name"
            label="Last Name"
            variant="standard"
            onChange={this.handleChange('lastName')}
            value={values.lastName}
          />
          <br />
          <TextField
          
            style={{ marginTop: '13px' }}
            id="email"
            label="Email"
            variant="standard"
            onChange={this.handleChange('email')}
            value={values.email}
          />
          <br />
          <Button style={{ marginTop: '39px' }} variant="contained" color="primary" onClick={this.continue}>
            Continue
          </Button>
        </Box>
      </>
    );
  }
}

export default FormUserDetail;


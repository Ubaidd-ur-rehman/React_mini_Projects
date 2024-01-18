import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
export class FormPersonalDetail extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  Back = (e) => {
    e.preventDefault();
    this.props.prevStep();
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
                Enter your Personal Details
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
            label="occupation"
            variant="standard"
            onChange={this.handleChange('occupation')}
            value={values.occupation}
          />
          <br />
          <TextField
            style={{ marginTop: '13px' }}
            id="last-name"
            label="city"
            variant="standard"
            onChange={this.handleChange('city')}
            value={values.city} 
          />
          <br />
          <TextField
          
            style={{ marginTop: '13px' }}
            id="email"
            label="Bio"
            variant="standard"
            onChange={this.handleChange('Bio')}
            value={values.Bio}
          />
          <br />
          <Button style={{ marginTop: '39px' }} variant="contained" color="primary" onClick={this.continue}>
            Continue
          </Button>
          <Button style={{ marginTop: '39px',marginLeft:'15px',backgroundColor:'white',color:'darkblue' }} variant="contained" color="primary" onClick={this.Back}>
            Go Back
          </Button>
        </Box>
     </>
    )
  }
}

export default FormPersonalDetail
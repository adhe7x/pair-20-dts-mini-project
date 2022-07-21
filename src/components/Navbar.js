import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Logo from './assets/Logo.png';
import './Navbar.css';

const navItems = ['Home', 'Register', 'Sign In', 'Sign Out'];

const Navbar = () => {
  return (
    <Box>
      <AppBar sx={{bgcolor: 'black'}}>
        <Toolbar>
          <img className='nav__logo' src={Logo} alt="Logo"/>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: 'block',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
            ovieApp
          </Typography>
          <Box sx={{ display: 'block' }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ 
                color: 'white',
                fontSize: '1rem',
                fontWeight: 700,
                fontFamily: 'monospace' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
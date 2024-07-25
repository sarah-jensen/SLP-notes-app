//functionality for Reset button still needed

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Typography
            variant='h3'
            component='div'
            align='center'
            sx={{ flexGrow: 1 }}
          >
            Take a Note!
          </Typography>
          <Button color='inherit'>Reset</Button>
        </AppBar>
      </Box>
    </div>
  );
};

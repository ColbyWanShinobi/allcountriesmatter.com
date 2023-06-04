import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import './TitleBar.css';

function TitleBar() {
  return (
    <div className='title-bar'>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className='menu-button' color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className='title-text'>
            All Countries Matter!
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TitleBar;

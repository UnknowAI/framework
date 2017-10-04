import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from 'material-ui';

import { Menu as MenuIcon } from 'material-ui-icons';
import { withStyles } from 'material-ui/styles';

const styles ={
  grow: {
    flex: '1 1 auto'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  btnRoot: {
    height: 67,
    borderRadius: 0,
    color: "white"
  },
  AppBarRoot: {
    backgroundColor: "rgba(0,0,0,0)"
  }
};

class AppNav extends Component {
  render() {
    const {classes, onMenuClick} = this.props;

    return (
      <div className={classes}>
        <AppBar position="static" classes={{root: classes.AppBarRoot}}>
          <Toolbar>

            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu" onClick={onMenuClick}>
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.grow}>
              Grey Dev
            </Typography>
            
            <Button component={Link} to="/" classes={{root: classes.btnRoot}}>Home</Button>
            <Button component={Link} to="/about" classes={{root: classes.btnRoot}}>About</Button>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(AppNav);
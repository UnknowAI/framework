import React from 'react';
import PropTypes from 'prop-types';

import {
  List,
  ListSubheader,
  Toolbar,
  Drawer,
  Divider,
  Typography
} from 'material-ui';

import {
  Movie as MovieIcon,
  Tv as ShowIcon,
  Settings as SettingsIcon,
  OndemandVideo as VideoIcon
} from 'material-ui-icons';

import { withStyles } from 'material-ui/styles';
import AppDrawerNavItem from './AppDrawerNavItem';

const styleSheet = theme => ({
  paper: {
    width: 250,
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  }
});

function AppDrawer(props) {
  const classes = props.classes;

  return (
    <Drawer
      classes={{
        paper: classes.paper,
      }}
      open={props.open}
      onRequestClose={props.onRequestClose}
      keepMounted={false}
    >
      <div className={classes.nav}>
        <Toolbar className={classes.toolbar}>
          <Typography type="title" color="inherit">
            Title
          </Typography>
          <Divider absolute />
        </Toolbar>

        <List disablePadding>

            <AppDrawerNavItem
                to="/"
                text="Home"
                onClick={props.onRequestClose}
            />

            <AppDrawerNavItem
            to="/about"
            text="About"
            onClick={props.onRequestClose}
            />

        </List>
      </div>
    </Drawer>
  );
}

/* eslint-disable react/forbid-prop-types */
AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
/* eslint-enable react/forbid-prop-types */

export default withStyles(styleSheet)(AppDrawer);

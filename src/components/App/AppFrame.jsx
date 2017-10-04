import React, { Component } from 'react';

import { withStyles }       from 'material-ui/styles';

import AppDrawer            from './AppDrawer';
import AppNav               from './AppNav';
import JumboTron            from '../Jumbotron/Jumbotron';

const styles = theme => ({
  '@global': {
    html: {
      backgroundColor: "#000"
    },
    body: {
      margin: 0,
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      WebkitFontSmoothing: 'antialiased'
    }
  },
  appFrame: {
    // display: 'flex',
    // alignItems: 'stretch',
    minHeight: '100vh',
    minwidth: '100%'
  },
  grow: {
    flex: '1 1 auto'
  },
  up: {
    marginTop: "-67px",
  },
  root: {
    backgroundColor: "rgba(0,0,0,0.5)"
  }  
});

class AppFrame extends Component {
  state = {
    drawerOpen: false,
  }

  handleDrawerClose = () => {
    this.setState({ drawerOpen: false });
  };

  handleDrawerToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  render() {
    const {classes, children} = this.props;
    return (
      <div className={classes.appFrame}>

        <AppNav onMenuClick={this.handleDrawerToggle} className={root}/>
        <AppDrawer open={this.state.drawerOpen} onRequestClose={this.handleDrawerClose}/>

        <div className={classes.up}>
          <JumboTron/>

          {children}
        </div>
        
      </div>
    );
  }
}

export default withStyles(styles)(AppFrame);
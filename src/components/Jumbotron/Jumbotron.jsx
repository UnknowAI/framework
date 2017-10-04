import React, { Component } from 'react';

import { withStyles }       from 'material-ui/styles';

const styles = {
  jumbotron: {
    width: "100vw",
    maxHeight: 300,
    overflow: "hidden",
  },
  img: {
    width: "100vw",
  }
}

class Jumbotron extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {classes} = this.props;    
    const jumboArr = [
      "https://scontent-ams3-1.cdninstagram.com/t51.2885-15/e35/18947770_312171032556317_488663267061792768_n.jpg",
      "https://scontent-ams3-1.cdninstagram.com/t51.2885-15/e35/19052107_1794135634232154_3556323008027033600_n.jpg",
      "https://scontent-ams3-1.cdninstagram.com/t51.2885-15/e35/19051032_228143524369201_8404756497212375040_n.jpg"
    ];
    const randIMG = jumboArr[Math.floor(Math.random() * jumboArr.length)];

    return (
    <div className={classes.jumbotron}>
      <img
        src={randIMG}
        className={classes.img}
        alt="Jumbotron"
      />
    </div>
    );
  }
}

export default withStyles(styles)(Jumbotron);
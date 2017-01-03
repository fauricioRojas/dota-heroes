import React, { Component } from 'react';
import Loading from '../Loading';

class AppContainer extends Component {
  render () {
    console.log(this.props.children);
    return (
      <section>{this.props.children}</section>
    )
  }
};

export default AppContainer;

import React, { Component } from 'react';
import Loading from '../Loading';

class AppContainer extends Component {
  render () {
    return (
      <section>{this.props.children}</section>
    )
  }
};

export default AppContainer;

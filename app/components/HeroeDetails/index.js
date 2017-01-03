import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class HeroeDetails extends Component {
  render() {
    let heroe = this.props.activeHeroe;

    if (Object.keys(heroe).length) {
      return(
        <section className='heroe-details'>{heroe.name}</section>
      );
    }

    return(
      <section className='heroe-details'>No heroe selected!</section>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeHeroe: state.activeHeroe
  };
}

export default connect(mapStateToProps)(HeroeDetails);

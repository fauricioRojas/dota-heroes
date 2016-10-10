import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HeroeMini from '../HeroeMini';
import Loading from '../Loading';

import * as Actions from '../../actions';

class HeroeList extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.retrieveHeroes();
  }

  render () {
    const content = this.props.heroes.length ?
      <ul>
        {this.props.heroes.map(value => <li key={value.id}>{value.name}</li>)}
      </ul> : <Loading />;

    return (
      <section>
        { content }
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroeList);

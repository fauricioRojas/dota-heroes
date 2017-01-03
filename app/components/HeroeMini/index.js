import React, { Component } from 'react';

export default class HeroeMini extends Component {
  render() {
    let heroe = this.props.heroe;

    return(
      <li onClick={() => this.props.onClickHeroe(heroe.id)}>
        <img width='25px' height='25px' src='../../assets/images/heroes/icons/Abaddon_icon.png' />
        &nbsp;&nbsp;
        <span>{heroe.name}</span>
      </li>
    );
  }
}

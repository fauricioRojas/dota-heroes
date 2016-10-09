import React from 'react';

export default class Loading extends React.Component {
  render () {
    return (
      <section className="loading">
        <section className="spinner">
          <section className="bubble-1"></section>
          <section className="bubble-2"></section>
        </section>
      </section>
    )
  }
}

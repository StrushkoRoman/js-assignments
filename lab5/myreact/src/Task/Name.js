import React, { Component } from 'react';


class Name extends Component {
  render() {
    const name = this.props.name;

    return (
      <div className="Name">
        <h1>{name}</h1>
      </div>
    );
  }
}

export default Name;
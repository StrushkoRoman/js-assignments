import React, { Component } from 'react';


class Info extends Component {
  render() {
    const info = this.props.info;

    return (
      <div className="Info">
        <i>{info}</i>
      </div>
    );
  }
}

export default Info;
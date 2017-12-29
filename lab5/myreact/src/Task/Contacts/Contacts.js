import React, { Component } from 'react';
import Icon from '../Icon/Icon';
import Text from '../Icon/Text';

class Contacts extends Component {
  render() {
    return (
      <div className="Contacts">
        <Icon icon={this.props.icon}/>
        <Text text={this.props.href} text={this.props.text}/>
      </div>
    );
  }
}

export default Contacts; 
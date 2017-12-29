import React, { Component } from 'react';
import Icon from '../Icon/Icon';
import Words from '../Icon/Words'

class Contacts extends Component{
    render() {
        return (
          <div className="Contacts">
            <Icon icon={this.props.icon}/>
            <Words word={this.props.word}/>
          </div>
        );
    }
}
export default Contacts;
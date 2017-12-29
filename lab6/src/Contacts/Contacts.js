import React, {Component} from 'react';
import './Contacts.css';
import Icon from '../Icon/Icon';
import IconD from '../IconD/IconD';

class Contacts extends Component {
  render() {
    const icon = this.props.icon;
    const text = this.props.text;
    const href = this.props.href;

    return (
        <div className="Contacts">
          <Icon icon={icon}/>
          <IconD href={href} text={text}/>
        </div>
    );
  }
}

export default Contacts;
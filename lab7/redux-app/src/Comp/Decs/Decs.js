import React, {Component} from 'react';
import './Decs.css';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

class Decs extends Component {
  render() {
    const icon = this.props.icon;
    const text = this.props.text;
    const href = this.props.href;

    return (
        <div className="Decs">
          <Icon icon={icon}/>
          <Text href={href} text={text}/>
        </div>
    );
  }
}

export default Decs;


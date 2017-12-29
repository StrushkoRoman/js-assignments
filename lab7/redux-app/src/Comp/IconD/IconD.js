import React, {Component} from 'react';
import './IconD.css';

class IconD extends Component {
  render() {
    const text = this.props.text;
    const href = this.props.href;
    if(href)
    {
      return (
          <a className="IconD" href={href}>{text}</a>
      );
    }
    else{
      return text;
    }

  }
}

export default IconD;
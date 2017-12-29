import React, {Component} from 'react';
import './Text.css';

class Text extends Component {
  render() {
    const text = this.props.text;
    const href = this.props.href;
    if(href)
    {
      return (
          <a className="Text" href={href}>{text}</a>
      );
    }
    else{
      return text;
    }

  }
}

export default Text;


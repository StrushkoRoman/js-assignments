import React, { Component } from 'react';


class Text extends Component {
    render() {
      const text = this.props.text;      
      return (
        <div className="Text">
          <a href={this.props.href}>{text}</a>
        </div>
      );
    }
  }

  
  export default Text;
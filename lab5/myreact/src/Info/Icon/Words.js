import React, { Component } from 'react';


class Words extends Component {
    render() {
      const word = this.props.word;      
      return (
        <div className="Words">
           {word}
        </div>
      );
    }
  }

  
  export default Words;
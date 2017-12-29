import React, { Component } from 'react';
import './Photo.css';
class Photo extends Component {
    render() {
      return (
        <div className="Photo">
        <div className="img">
            <img src = "./images/user.png" width="240" height="240" alt ="ROMAN"></img>
        </div>
        </div>
      );
    }
  }
  
  export default Photo;
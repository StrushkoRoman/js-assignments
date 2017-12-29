import React, { Component } from 'react';

class Nickname extends Comment{
    render(){
        const nickName = this.props.nickName;

        return(
            <div className="Nickname">
            <i>{nickName}</i>
            </div>
        );
    }
}

export default Nickname;
import React, { Component } from 'react';
import './Task.css';
import Info from './Info';
import Photo from './Photo';
import Name from './Name';
import Nickname from './Nickname';
import Contacts from './Contacts/Contacts'

class Task extends Component {
    render(){
        return(
            <div className="Task">
              <Photo />
              <Name name='Roman Strushko'/>
              <Nickname nickName=''/>
              <Info info='An ordinary student who wants to pass the exams.'/>
              <Contacts icon ="address-book-o" text="@BSTU" />
              <Contacts icon ="map-marker" text="Luninets" />
              <Contacts icon ="envelope-o" text="Strushko97@mail.ru" />
              <Contacts icon ="link" text="vk.com" />
            </div>
        );
    }
}

export default Task;
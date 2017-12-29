import React, { Component } from 'react';
import Photo from '../Info/Photo';
import Name from './Name';
import Nickname from './Nickname';
import Info from './Info';
import Contacts from './Contacts/Contacts';


class MainInf extends Component {
  render() {
    return (
      <div className="MainInf">
        <Photo />
        <Name name='Roman Strushko'/>
        <Nickname nickname='bboy'/>
        <Info info='An ordinary student who wants to pass the exams.'/>
        <Contacts icon="university" text="@BSTU"/>
        <Contacts icon="map-marker" text="Belarus, Brest"/>
        <Contacts icon ="envelope-o" text="Strushko97@mail.ru" />
        <Contacts icon ="link" text="vk.com" />
      </div>
    );
  }
}

export default MainInf;
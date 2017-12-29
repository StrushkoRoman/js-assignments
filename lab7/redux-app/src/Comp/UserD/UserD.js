import React, {Component} from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import './UserD.css';
import Edit from '../Edit/Edit';
import{
  GENERAL_FRAME,
  EDUCATION_FRAME,
  CONTACTS_FRAME
} from '../../consts';

class UserD extends Component {
  render() {
    const general = this.props.details.general;
    const education = this.props.details.education;
    const contacts = this.props.details.contacts;
    return (
        <Tabs defaultActiveKey={1} id="UserD">
          <Tab eventKey={1} title="General">
            <Edit id={GENERAL_FRAME} text={general}/>
          </Tab>
          <Tab eventKey={2} title="Education">
            <Edit id={EDUCATION_FRAME} text={education}/>
          </Tab>
          <Tab eventKey={3} title="Contacts">
            <Edit id={CONTACTS_FRAME} text={contacts}/>
          </Tab>
        </Tabs>
    );
  }
}

export default UserD;


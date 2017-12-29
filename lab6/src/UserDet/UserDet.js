import React, {Component} from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import './UserDet.css';
import Edit from '../EditArea/Edit'

class UserDet extends Component {
  render() {
    const general = this.props.details.general;
    const education = this.props.details.education;
    const contacts = this.props.details.contacts;
    return (
        <Tabs defaultActiveKey={1} id="userDet">
          <Tab eventKey={1} title="General">
            <Edit id="edit_general" text={general}/>
          </Tab>
          <Tab eventKey={2} title="Education">
            <Edit id="edit_education" text={education}/>
          </Tab>
          <Tab eventKey={3} title="Contacts">
            <Edit id="edit_contacts" text={contacts}/>
          </Tab>
        </Tabs>
    );
  }
}

export default UserDet;
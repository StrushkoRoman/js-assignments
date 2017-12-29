import React, {Component} from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import './App.css';
import UserInfo from './Comp/UserInfo/UserInfo';
import UserDetails from './Comp/UserD/UserD';
import {store} from './index';
import {loadData, loadingData} from './Actions/action';
import {connect} from 'react-redux';

class App extends Component {

  componentDidMount() {
    let _this = this;

    fetch("https://api.github.com/users/StrushkoRoman")
    .then(data => data.json())
    .then(data => {
      store.dispatch(loadData(data));
    });
  }

  static preContacts(data){
    let email = "email is not visible";
    if (data.email != null){
      email = data.email;
    }

    return{
      social:{
        href: data.blog,
        text: data.blog
      },
      location:{
        text:data.location
      },
      email:{
        text:email
      },
      personalLink:{
        href:data.html_url,
        text:data.html_url
      }
    };
  }

static preDet(data){
  return{
    general:data.bio,
    education:data.bio,
    contacts:data.bio
  };
}

  render() {

    if (this.props.status === "empty") return null;
    if (this.props.status === "loading"){
      return(
        <h1>Loading...</h1>
      );
    }

const data = this.props.data;

    return (
        <div className="App">
          <header className="App-header">
          </header>
          <div className="App-body">
            <Grid>
              <Row>
                <Col md={3} lg={3}>
                  <UserInfo photo={data.avatar_url}
                            fullName={data.name}
                            username={data.login}
                            briefDescription={data.bio}
                            contacts={App.preContacts(data)}/>
                </Col>
                <Col md={9} lg={9}>
                  <UserDetails details={App.preDet(data)}/>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state){
  return{
    data:state.loadReducer.data,
    status:state.loadReducer.status
  }
}

export default connect(mapStateToProps)(App);

import React, { Component } from 'react';
import './App.css';
import Tabs from './Tab';
import Task from './Task/Task'

class App extends Component {
  render() {

    const tabData = [
      {
        label: "General",
        content: "Student..."
      },
      {
        label: "Education",
        content: "BSTU..."
      },
      {
        label: "Contacts",
        content: "strushko97@mail.ru"
      }
    ]

    return (
      <div className="App">
      <Task />
      <Tabs data = {tabData} />
      </div>
    )
  }
}

export default App;

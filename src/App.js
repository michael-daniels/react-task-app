import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tasklist from './components/Tasklist.js';
import Taskform from './components/Taskform.js'

class App extends Component {
  state = {
    tasks:['mow lawn', 'do dishes']
  }
  updateState = (newTask) => {
    this.setState({
      tasks:[...this.state.tasks, newTask]
    })
  }
  deleteTask = (taskId) => {
    let filteredState = this.state.tasks.filter((item, idx) => {
      return idx !== taskId
    })
    this.setState({
      tasks:filteredState
    })
  }
  render() {
    return (
      <div className="App">
        <Taskform updateStateFunc={this.updateState}/>
        <Tasklist allTasks={this.state.tasks} deleteTaskFunc={this.deleteTask}/>

      </div>
    );
  }
}

export default App;

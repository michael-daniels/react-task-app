import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList.js';
import TaskForm from './components/TaskForm.js'

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
  editTask = (taskId, taskValue) => {
    console.log('taskid', taskId)
    console.log('taskvalue', taskValue)
    let newStateArray = this.state.tasks
    newStateArray[taskId] = taskValue
    this.setState({
      tasks:newStateArray
    })
  }
  render() {
    return (
      <div className="App">
        <TaskForm updateStateFunc={this.updateState}/>
        <TaskList allTasks={this.state.tasks} deleteTaskFunc={this.deleteTask} editTaskFunc={this.editTask}/>
      </div>
    );
  }
}

export default App;

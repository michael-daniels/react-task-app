import React, { Component } from 'react';

class TaskForm extends Component {
  state = {
    task:''
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.updateStateFunc(this.state.task)
          this.state.task = ''
        }}>
          <input placeholder="Add Task" onChange={(event) => {this.setState({task:event.target.value})}} value={this.state.task}></input>
        </form>
      </div>
    );
  }

}

export default TaskForm;

import React, { Component } from 'react';

class Taskform extends Component {
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
          <input placeholder="Add New Task Here and Press Enter" onChange={(event) => {this.setState({task:event.target.value})}} value={this.state.task}></input>
        </form>
      </div>
    );
  }

}

export default Taskform;

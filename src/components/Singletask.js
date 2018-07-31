import React from 'react';

const Singletask = (props) => {
  console.log('Single task props', props.id)
  return (
    <div>
      <div className="single-task" id={props.id}>{props.theTask} <span className="single-task-x" onClick={() => {props.deleteTaskFunc(props.id)}}>x</span></div>
    </div>
  )
}

export default Singletask;

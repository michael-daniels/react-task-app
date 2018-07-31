import React from 'react';

const SingleTask = (props) => {
  console.log('Single task props', props.id)
  return (
    <div>
      <div className="single-task" id={props.id}>{props.theTask}<span className="single-task-delete" onClick={() => {props.deleteTaskFunc(props.id)}}>delete</span></div>
    </div>
  )
}

export default SingleTask;

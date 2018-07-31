import React from 'react';
import SingleTask from './SingleTask.js'

const TaskList = (props) => {
  let singleTask = props.allTasks.map((item, idx) => {
    return <SingleTask key={idx} id={idx} theTask={item} deleteTaskFunc={props.deleteTaskFunc} editTaskFunc={props.editTaskFunc}/>
  })
  return (
    <div>
      {singleTask}
    </div>
  )
}

export default TaskList;

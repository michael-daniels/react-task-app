import React from 'react';
import Singletask from './Singletask.js'

const Tasklist = (props) => {
  console.log('TESTING', props)
  let singleTask = props.allTasks.map((item, idx) => {
    return <Singletask key={idx} id={idx} theTask={item} deleteTaskFunc={props.deleteTaskFunc}/>
  })
  return (
    <div>
      {singleTask}
    </div>
  )
}

export default Tasklist;

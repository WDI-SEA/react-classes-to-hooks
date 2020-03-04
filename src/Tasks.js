import React from 'react';

function Tasks(props) {


  return (
    <ul>
      {props.tasks.map((task, i) => (
        <li key={`task-${i}`} onClick={(e) => {
          props.removeTask(e, i);
        }}>{task}</li>
      ))}
    </ul>
  )
}

export default Tasks;
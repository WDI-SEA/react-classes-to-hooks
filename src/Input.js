import React, {useState} from 'react';

function Input(props) {
  const [newtask, setNewtask] = useState('');

  let tempTask = (e) => {
    setNewtask(e.target.value);
  }

  return (
    <div>
      <label>Input Task: </label>
      <input type="text" name="task" onChange={tempTask} />
      <button onClick={(e) => {
        props.onClick(e, newtask);
      }}>Add</button>
    </div>
  )
}

export default Input;
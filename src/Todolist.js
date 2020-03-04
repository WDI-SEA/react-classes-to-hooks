import React, {useState} from 'react';
import Tasks from './Tasks';
import Input from './Input';

function Todolist() {
  const [tasks, setTasks] = useState([]);

  const addTask = (e, newTask) => {
    e.preventDefault();
    setTasks([...tasks, newTask])
  }

  const removeTask = (e, index) => {
    setTasks(tasks.filter((task, i) => i !== index))
  }

  return (
    <div>
      <Input onClick={addTask} />
      <Tasks tasks={tasks} removeTask={removeTask} />
    </div>
  )
}


export default Todolist;
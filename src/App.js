import { useState } from 'react';
import Header from './components/Header';
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


const App = () => { 
  const [tasks, setTasks ] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Vet Appointment',
        day: 'May 25th at 3:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Anniversary',
        day: 'July 4th at 5:30pm',
        reminder: false,
    },
]);

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
};

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
};

// Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
};

  return (
    <div className="container">
        <Header />
        <AddTask onAdd={addTask}/>
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks Yet'}
    </div>
  );
}


export default App;

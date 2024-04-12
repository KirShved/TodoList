import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import TaskTodo from './components/TaskTodo';


function App() {

  const[todo,setTodo]=useState('')
  const[tasks,setTasts]=useState([])


  function addTask(){
    const taskTodo={
      id:Math.random(),
      value:todo,
      status:false,
    }
    const newTask=[taskTodo,...tasks]
    setTasts(newTask)
    setTodo('')
  }

  function deleteTask(id){
    let del=tasks.filter((e) => e.id !== id)
    setTasts(del)
  }

  function toggleTask(id){
    let toggle=tasks.map((e) => e.id === id?{...e,status:!e.status}:{...e})
    setTasts(toggle)
  }
  
  const taskTodosList=tasks.map(e=><TaskTodo 
                    id={e.id}
                    value={e.value}
                    status={e.status}  
                    deleteTask={deleteTask}
                    toggleTask={toggleTask}
                    key={Math.random()}
  />)

  return (
    <div className="App">
      <div className='conteiner'>
        <Header/>
        <InputTodo 
          addTask={addTask} 
          todo={todo} 
          setTodo={setTodo}
          />
        {taskTodosList}
      </div>
    </div>
  );
}

export default App;

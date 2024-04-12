import React from 'react'

const TaskTodo = (props) => {
  return (
    <div className='todo_conteiner'> 
        <div className='task_todo' key={props.id}>
            <input 
            type={'checkbox'} 
            onClick={()=>props.toggleTask(props.id)}
            defaultChecked={props.status}></input>
            <p style={props.status?{textDecoration:'line-through'}:{textDecoration:'none'}}>{props.value}</p>
            <button onClick={()=>props.deleteTask(props.id)} className='btn_todo'>X</button>
        </div>
    </div>

  )
}

export default TaskTodo

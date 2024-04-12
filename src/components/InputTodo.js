import React from 'react'

const InputTodo = (props) => {
  return (
    <div>
      <input 
        className='input'
        value={props.todo}
        onChange={(e)=>props.setTodo(e.target.value)}/>
      <button 
      onClick={()=>props.addTask()} 
      className='btn'>Добавить</button>
    </div>
  )
}

export default InputTodo

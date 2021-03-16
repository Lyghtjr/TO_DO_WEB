import React from 'react';

const ToDoList=(props)=>{
return (
    <>
   <div className="todo_list">
  <button className="button" onClick={()=>{
      props.onSelect(props.id);
  }}>x</button>
       <li>{props.text}</li>
   </div>



    </>
)

}

export default ToDoList;
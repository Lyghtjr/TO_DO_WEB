import React,{useState} from 'react';
import ToDoList from './ToDoList';

const App=()=>{
  const [itemList,setitemList]=useState("");
  const [list,setList]=useState([]);

  const itemChange=(event)=>{
  setitemList(event.target.value)
  }

  const insertItems=()=>{
    setList((prevarraylist)=>{
      return [...prevarraylist,itemList]
    });
    setitemList("");
  }

  const DeleteItems=(id)=>{
   console.log("deleted");

   setList((prevarraylist)=>{
    return prevarraylist.filter((arrEle,index)=>{
      return index!==id;
    })
   })
  }

  return(
    <>
    <div className="main_div">
      <div className="center_div">
      <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" placeholder="Add a item" onChange={itemChange} value={itemList}/>
        <button onClick={insertItems}>+</button>
        <ol>
          {
            list.map((vallist,index)=>{
              return   <ToDoList
                key={index}
                id={index}
                text={vallist}
                onSelect={DeleteItems}
              />/* <li>{vallist}</li>*/ 
            }
            )}
        </ol>
      </div>
    </div>



    </>
  )
}

export default App;
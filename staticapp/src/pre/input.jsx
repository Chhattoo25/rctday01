import React from "react";
import Taskitem from "./taskitem";

const Task = () => {
const [query,setquery]= React.useState("")
const [tasks,setTasks]= React.useState([])
const handleChange =(e)=>{
// console.log(e.target.value)
const {value} =e.target;
setquery(value);
};

const handleAdd =()=>{
const payload ={
 title:query,
 status:false
};
let newTasks =[...tasks,payload]
setTasks(newTasks)
}
  return (
    <div>
      <div>
        <h1>Tasks</h1>
        <input value={query} onChange={handleChange} placeholder="add something"></input>
        <button onClick={handleAdd}>Add</button>
      </div>

      <div>
        {tasks.map((item,index)=>{
          return <Taskitem color={index%2===0? 'blue':'green'} {...item}></Taskitem>
        })}
      </div>
    </div>
  
  );
};

export default Task;

import { useState } from "react";
import "./reacttodolist.css";

const AddList =({addlist})=>{
  const [value,setvalue]=useState("")
  const handle = (e)=>{
    e.preventDefault();
    if(value!==""){
      addlist(value)
      setvalue("");
    }
  }
  return (
    <>
    <form onSubmit={handle}>
    <input type="text" value={value} placeholder="Enter Name" onChange={e=>setvalue(e.target.value)} />
    <button type="submit" id="btn">+</button>
    </form>
    </>
  )
};



function Main(){
  const addlist = (text)=>setdata([...data,{text}]);
  const [data,setdata]=useState([
    {
      text:"Gokul",
      isCompleted:false
    },
    {
      text:"Somesh",
      isCompleted:false
    },
    {
      text:"Vicky",
      isCompleted:false
    }
  ]);

  const toggleList=(index)=>{
    const newList = [...data];
    if(newList[index].isCompleted){
      newList[index].isCompleted=false;
    }else{
      newList[index].isCompleted=true;
    }
    setdata(newList);
  };
 
  const removeBtn = (index)=>{
    const newList =[...data];
    newList.splice(index,1)
    setdata(newList);
  };

  return (
    <>
    <div id="namelist">
      {data.map((list,index)=>(
        <div id="lists">
          <span onClick={()=>toggleList(index)} className={list.isCompleted? "list-name completed-list":"list-name"}>{list.text}
          </span>
          <button onClick={()=>removeBtn(index)}>X</button>
        </div>
      ))}
    </div>
    <div id="heading">ToDoList-ReactJS</div>
    <AddList addlist={addlist}/>
    </>

  )
}
export {Main};
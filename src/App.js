import React, { useState } from 'react'
import Data from "./data.json"
// import { useEffect} from "react"
const App = () => {
  // const URL = ("https://jsonplaceholder.typicode.com/posts")
  // const [data,setData] = useState([]);
  // useEffect(()=>{
  //   fetchData();
  // },[])
  // const fetchData = () => {
  //   return fetch(URL)
  //         .then((response) => response.json())
  //         .then((data) => setData(data));}
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);

  const changeHandler = e =>{
    setTask(e.target.value)
  }
  const submitHandler = e =>{
    e.preventDefault();
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
  }
  return (
    <div>
      {Data&&Data.map((value)=>{
        return(
          <div className='box' key={value.id}>
            <h1>{value.title}</h1>
            <p>{value.content}</p>
            {/* {value.developer.map((scd)=>{
            return(
            <div key={value.id}>
              <p>{scd.name}</p>
            </div>
            )
            })} */}
          </div>  
      )})
      }
      {/* {data.map((value)=>(
        <div className='box' key={value.id}>
        <strong>{value.title}</strong>
        <span>{value.body}</span>
      </div>
      ))} */}
      <form onSubmit={e=>submitHandler}>
      <input type="text" value={task} name="name" onChange={e=>changeHandler(e)} />
      <span><button>Add</button></span>
      {todos.map((value,index)=>(
        <div key={index}>
          <h1>{value}</h1>
        </div>
      ))}
      </form>
    </div>
  )
}

export default App
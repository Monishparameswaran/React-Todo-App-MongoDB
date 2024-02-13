import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [data,setData]=useState([]);
  fetch("http://localhost:3000/todos").then((resp)=>resp.json()).then((resp)=>setData(resp.todo));
  return (
    <>
     <CreateTodo></CreateTodo>
     <Todos todos={data}></Todos>
    </>
  )
}

export default App

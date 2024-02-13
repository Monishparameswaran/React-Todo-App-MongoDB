import React from 'react'
import { useState } from 'react';
function CreateTodo() {
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");

  return (
    <div>
           <input type="text" placeholder='text here' onChange={
            function(e){
                setTitle(e.target.value)
            }
           }/>
     <br /> <br />
    <input type="text" placeholder='description here' onChange={
            function(e){
                setDesc(e.target.value)
            }}/>
    <br />
    <br />
    <button onClick={async function(){
        fetch("http://localhost:3000/todo",{
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: desc
            } 
            ),
            headers: {
                "content-type":"application/json"
            }
        })
        
    }}> Add Todo </button>
    </div>
 
  )
}

export default CreateTodo
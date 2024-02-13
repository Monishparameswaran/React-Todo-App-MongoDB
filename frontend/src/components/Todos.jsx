import React from 'react'

function Todos({todos}) {
  return (
    <div>
        {
            todos.map(function(todo){
                return <> 
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                
                <button>{todo.completed==true?"Completed!":"NotCompleted"}</button>
                </>
                
            })
        }
    </div>
  )
}

export default Todos
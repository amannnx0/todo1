import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [toodos, setTodos] = useState([{

    id : 1,
    title : "Go to Gym",
    description : "Jao bhai kya kr rahe ho"

  },{

    id : 2,
    title : "Eat Healthy",
    description : "acha khana khao"

  },{

    id : 3,
    title : "Visit Somewhere",
    description : "Ghoomne jao"

  }])
  
  function addTodo(){
    setTodos([...toodos,{
      id : 4,
      title : "han bhai",
      description : "new todo yay"
    }])
  }
  
  return (
    <div>
      <button onClick={addTodo}> Add a Todo </button>
      {toodos.map(todo => <ToDo title={todo.title} description={todo.description}></ToDo>)}
      
    </div>
  )
}



function ToDo({title, description}) {

  return <div>
    <h3>{title}</h3>
    <h4>{description}</h4>
  </div>
}



export default App

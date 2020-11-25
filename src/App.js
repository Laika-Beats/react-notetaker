import React, {useState, useRef, useEffect} from 'react';
import TodoList from "./TodoList"
import uuidv4 from "uuid/v4"

const localStorage = "todoApp.todos"

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    localStorage.setItem(localStorage, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === "") return
    console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, cmomplete: false}]
    })
    todoNameRef.current.value = null

  }

  return (
    < >
    <TodoList todos = {todos}/>
    <input ref={todoNameRef} type="text"/>
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear Complete</button>
    <div>0 left to do</div>
    </>
  )
}


export default App;

import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-black min-h-screen py-12 text-white font-sans">
        <div className="w-full max-w-2xl mx-auto">
          {/* Main container with subtle border */}
          <div className="rounded-lg overflow-hidden shadow-2xl bg-black border border-gray-800">
            {/* Header with pure black/white contrast */}
            <div className="bg-gray-700 px-6 py-5 text-black">
              <h1 className="text-3xl font-bold text-center mb-1 text-white">
                Manage Your Tasks
              </h1>
              <p className="text-center text-white text-sm">
                Stay organized and focused
              </p>
            </div>
            
            <div className="p-6 bg-gray-900">
              {/* Form with border */}
              <div className="mb-6 bg-black rounded-lg p-4 border border-gray-800">
                <TodoForm />
              </div>
              
              {/* Empty state with minimalist design */}
              {todos.length === 0 ? (
                <div className="text-center py-10 text-gray-400">
                  <div className="inline-block w-12 h-1 bg-white mb-4"></div>
                  <p className="text-lg font-medium">No todos yet</p>
                  <p className="text-sm text-gray-600">Add your first task to get started</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {/* Todo items without hover effects */}
                  {todos.map((todo) => (
                    <div 
                      key={todo.id}
                      className="w-full"
                    >
                      <div className="border border-gray-800 rounded-lg overflow-hidden">
                        <TodoItem todo={todo} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Stats footer with "selected" instead of "completed" */}
              {todos.length > 0 && (
                <div className="mt-8 pt-4 border-t border-gray-800 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-black border border-gray-800 rounded-lg text-xs">
                      Total: {todos.length}
                    </span>
                    <span className="px-2 py-1 bg-white text-black rounded-lg text-xs">
                      Selected: {todos.filter(todo => todo.completed).length}
                    </span>
                  </div>
                  <span className="text-xs text-gray-600">
                    {Math.round((todos.filter(todo => todo.completed).length / todos.length) * 100)}% done
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
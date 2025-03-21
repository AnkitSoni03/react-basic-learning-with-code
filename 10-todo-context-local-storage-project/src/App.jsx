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
      <div className="bg-gray-950 min-h-screen py-12 text-white font-sans">
        <div className="w-full max-w-3xl mx-auto px-4">
          
          {/* Main container with professional styling */}
          <div className="rounded-xl overflow-hidden border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 shadow-2xl">
            {/* Header with industrial accent bar */}
            <div className="relative bg-gray-800 px-8 py-6">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600"></div>
              <h2 className="text-2xl font-semibold text-white">
                Task Management
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Prioritize and track your workflow efficiently
              </p>
            </div>
            
            <div className="p-6 bg-gray-900">
              {/* Form with professional styling */}
              <div className="mb-8 bg-gray-800 rounded-lg p-5 border border-gray-700 shadow-lg">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">New Task</h3>
                <TodoForm />
              </div>
              
              {/* Empty state with professional design */}
              {todos.length === 0 ? (
                <div className="text-center py-12 bg-gray-850 rounded-lg border border-gray-800">
                  <svg className="w-12 h-12 mx-auto mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  <p className="text-lg font-medium text-gray-300">No tasks created</p>
                  <p className="text-sm text-gray-500 mt-1">Add your first task to get started</p>
                </div>
              ) : (
                <div>
                  {/* Task section header */}
                  <div className="flex justify-between items-center mb-4 px-2">
                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Your Tasks</h3>
                    <span className="text-xs text-gray-500">{todos.length} item{todos.length !== 1 ? 's' : ''}</span>
                  </div>
                  
                  {/* Task list with industrial styling */}
                  <div className="space-y-3">
                    {todos.map((todo) => (
                      <div key={todo.id} className="w-full">
                        <div className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800 shadow-md">
                          <TodoItem todo={todo} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Stats footer with industrial styling */}
              {todos.length > 0 && (
                <div className="mt-8 pt-5 border-t border-gray-700">
                  <div className="flex flex-col sm:flex-row justify-between">
                    <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-sm bg-blue-500 mr-2"></div>
                        <span className="text-xs text-gray-400">
                          Total: <span className="text-white font-medium">{todos.length}</span>
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-sm bg-green-500 mr-2"></div>
                        <span className="text-xs text-gray-400">
                          Selected: <span className="text-white font-medium">{todos.filter(todo => todo.completed).length}</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-700 rounded-full h-2 mr-2 max-w-24">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{width: `${Math.round((todos.filter(todo => todo.completed).length / todos.length) * 100)}%`}}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400">
                        {Math.round((todos.filter(todo => todo.completed).length / todos.length) * 100)}%
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Professional footer */}
          <div className="mt-6 text-center">
            <div className="text-xs text-gray-600 flex items-center justify-center">
              <span className="mr-2">All Right Reserved</span>
              <span className="h-1 w-1 bg-gray-700 rounded-full mx-1"></span>
              <span>@2025</span>
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
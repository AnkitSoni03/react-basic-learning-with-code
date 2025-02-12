import './App.css'
import { useState } from 'react';
function App() {

  //let counter = 25

  let [counter, setCounter] = useState(0)

  const addValue =() => {
     setCounter(counter + 1)
    }

    const removeValue =() => {
      setCounter(counter - 1)
     }

  return (
    <>
      <h1>start to learn vite</h1>
      <h2>count value is {counter}</h2>
      <button onClick={addValue}>Add Value { counter}</button><br /><hr />
      <button onClick={removeValue}>Remove Value { counter}</button>
    </>
  )
}

export default App

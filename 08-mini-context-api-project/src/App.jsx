import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UseContextProvider from './context/useContextProvider'

function App() {

  return (
    <UseContextProvider>
      <h1>Hello Everyone ! Let's Start to learn Context API in React Js</h1>
      <Login />
      <Profile />
    </UseContextProvider>
  )
}

export default App

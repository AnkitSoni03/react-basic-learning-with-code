import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Learn from './Learn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Learn />
  </StrictMode>
)

// we can have multiple root elements and return multiple elements as a tags like : <App /> <Learn /> and etc
//  <StrictMode> is not a part of react but a part of react-dom and helps in debugging. without this it will also work
 
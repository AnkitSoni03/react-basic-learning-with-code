import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Learn from './Learn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Learn />
  </StrictMode>,
)

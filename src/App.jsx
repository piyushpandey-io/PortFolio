import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Card from "./components/Card.jsx"
import Practice from './pages/Practice.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home/>
    </>
  )
}

export default App

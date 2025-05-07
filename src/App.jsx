import { useState } from 'react'
import OffroadEventsPage from './components/hero'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <OffroadEventsPage/>
    </>
  )
}

export default App

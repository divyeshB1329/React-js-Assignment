import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Task 1:
      • Create a simple counter application using Redux for state management.
      Implementations to increment and decrement the counter. */}

       <Counter />
    </>
  )
}

export default App

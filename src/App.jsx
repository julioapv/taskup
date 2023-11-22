import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-5xl text-green-500'>Hello, this is taskup!</h1>
    </>
  )
}

export default App

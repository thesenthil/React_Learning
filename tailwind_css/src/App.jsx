import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
     <h1 className="text-3xl font-bold underline bg-gray-500 text-center h-25 text-white">
      this is tailwind project</h1>
     </>
  )
}

export default App

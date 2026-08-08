import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Intro from './Intro'
function App() {
  console.log("hello coders..");
  const [state, setState] = useState("hello coder");
  return (
   <>
   <h1>hello this is first React app  </h1>
   <h2>{state}</h2>
   <Intro />
   </>
  )
}

export default App

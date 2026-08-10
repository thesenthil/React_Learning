import React from 'react'
import Home from './Component/Home'
import About from './Component/About'
import Navigation from './Component/Navigation'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
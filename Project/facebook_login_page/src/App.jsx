import React from 'react'

function App() {
  return (
    <div className="bg-gray-100 h-screen w-1000 flex flex-col items-center justify-center gap-4">
      <h1><b>Log in to Facebook</b></h1>
      <input type="text" placeholder='Email Address or mobile number' className='border-2 rounded-2xl mx-8 p-2 w-100 p-3'></input>
      <input type="text" placeholder='Password' className='border-2 rounded-2xl mx-8 p-2 w-100 p-3 '></input>
      <button className='bg-blue-500 text-white px-20 py-2 rounded-3xl w-100 p-3'>Log In</button>
      <a href="#" className='text-black-500'>Forgotten password?</a>
      <hr className='my-4 border-gray-300' />
      <button className='bg-white-500 text-blue-500 px-4 py-2 rounded border-2 w-100 p-3 rounded-3xl'>Create New Account</button>
    </div>
  )
}

export default App
import React from 'react'
import { useState } from 'react'

function App() {
  const [data, setData] = useState("")

  let handleChange = (e) => {
    // console.log(e.target.value.id);
    // console.log(e.target.value);
    let {id,value}=e.target;
    console.log(value);
    console.log(id);

  }

  return (
    <div className="flex justify-center items-center bg-blue-100">
    <div className="flex flex-col bg-transparent w-100 h-120 mt-15 border-2 border-black rounded-xl">
      <h1 className="text-center">Registration Form</h1>
      <form action="">

       <div className="flex items-center mb-4">
       <label className='text-2xl'>Name:</label> 
       <input type="text" id="name" placeholder='Enter your name' className='border-2 mx-8 rounded-md'
       onChange={handleChange}
       />
       </div>

       <div className="flex items-center mb-4">
       <label className='text-2xl'>Email:</label> 
       <input type="text" id="email" placeholder='Enter your email' className='border-2 mx-8 rounded-md'/>
       </div>

      </form>
      </div> 
    </div>
  )
}

export default App
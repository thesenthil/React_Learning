import React, { useState } from 'react'
 
function Note() { 
    const [title, setTitle] = useState(""); 
    const [detail, setDetail] = useState(""); 
    const[notes, setNotes] = useState([]); 
    // console.log(title); 
    // console.log(detail); 
 
    // const handleAddNote = () => { 
    //     if(title === "" || detail === ""){ 
    //         alert("Please enter a value"); 
    //         return; 
    //     } 
    //   } 
 
    let newNote = { 
        id: Date.now(), 
        title: title, 
        detail: detail 
    } 
    function handleClick() { 
      //  handleAddNote(); 
       if(!title || !detail) { 
        alert("Please enter a value"); 
        return; 
       } 
        setNotes([...notes, newNote]); 
        console.log(notes); 
        setTitle(""); 
        setDetail(""); 
    } 
  return ( 
    <div className='min-h-screen bg-gray-100 py-10 px-6'> 

      <h1 className='text-4xl font-bold text-center text-gray-800 mb-8'>
        Note Maker
      </h1> 

      <div className='flex flex-col gap-4 border border-gray-300 bg-white px-6 py-6 rounded-xl shadow-md w-full max-w-xl mx-auto'> 

        <input 
        placeholder='Enter title here' 
        className='border border-gray-300 rounded-lg px-4 py-3 w-full outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200' 
        onChange={(e) => setTitle(e.target.value)} 
        value={title} 
        /> 

        <input 
        placeholder='Enter detail here' 
        className='border border-gray-300 rounded-lg px-4 py-3 w-full outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200'  
        onChange={(e) => setDetail(e.target.value)}        
        value={detail} 
        /> 

      </div> 

      <br></br> 

      <div className='flex justify-center'>
        <button 
        className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200 shadow-sm'  
        onClick={handleClick}>
          Add Note
        </button> 
      </div>

    <br></br> 
    <br></br> 
 
     <hr className='border-gray-300'></hr> 
 
 
    <div className='max-w-6xl mx-auto mt-8'> 
        <h1 className='text-2xl font-bold text-gray-800 mb-6'> 
            my notes 
        </h1> 

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'> 
        { 
            notes?.map((items) => {  
              // ?= optional chaining i.e If notes exists, then run .map(). Otherwise, don't give an error." 
                return <div key={items.id} 
                className='border border-gray-300 bg-white px-5 py-5 w-full rounded-xl shadow-sm hover:shadow-md transition duration-200'> 
                    <h1 className='text-xl font-bold text-gray-800 mb-2'>{items.title}</h1> 
                    <p className='text-gray-600'>{items.detail}</p> 
                    </div> 
        }) 
        }    
    </div> 
    </div> 
    </div> 
  ) 
} 
export default Note
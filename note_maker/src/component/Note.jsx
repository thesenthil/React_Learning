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
    <div>
      <h1>Note Maker</h1>
      <div className='flex flex-col gap-4 border border-gray-300 px-4 py-2 w-150'>
        <input placeholder='Enter title here' className='border border-gray-300 rounded px-4 py-2 w-100'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        />
        <input placeholder='Enter detail here' className='border border-gray-300 rounded px-4 py-2 w-100' 
        onChange={(e) => setDetail(e.target.value)}       
        value={detail}
        />
      </div>
      <br></br>
      <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'  onClick={handleClick}>Add Note</button>
    <br></br>
    <br></br>

     <hr></hr>


    <div>
        <h1>
            my notes
        </h1>
        <div>
        {
            notes?.map((items) => { 
              // ?= optional chaining i.e If notes exists, then run .map(). Otherwise, don't give an error."
                return <div key={items.id}
                className='border border-gray-300 px-4 py-2 w-60 m-4'>
                    <h1>{items.title}</h1>
                    <p>{items.detail}</p>
                    </div>
        })
        }   
    </div>
    </div>
    </div>
  )
}
export default Note

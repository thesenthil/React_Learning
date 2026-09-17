import React,{useEffect,useState} from 'react'

function UseEffect() {
    const [products,setProducts]=useState([])

    useEffect(()=> {
        fetch("https://fakestoreapi.com/products")
        .then((res) =>res.json())
        .then((data)=>{
            console.log(data);
            setProducts(data)
            console.log(products);
        })
        // .catch("something went wrong!")
    },[])
  return (
    <div className='grid grid-cols-4 gap-3'>
        {
            products?.map((next)=>{
                return <div key={next.id}
                className='flex flex-wrap gap-4border border-gray-300 rounded px-4 py-2 w-60 m-4'>
                    <h1>{next.title}</h1>
                    <p>${next.price}</p>
                    <img src={next.image}
                    alt={next.title} className='w-30 h-30'/>    
                </div>
            })
        }

    </div>
  )
}

export default UseEffect;
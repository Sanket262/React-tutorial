import React from 'react'
import { useState ,useEffect} from 'react'
function FunctionEffect() {
    let[count,setCount]=useState(0)
    useEffect(()=>
    {
        console.log("Hello I am Effect");
    })
   const updateCount=()=>
   {
      setCount(count+1);
    
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={updateCount}>Click</button>
    </div>
  )
}

export default FunctionEffect

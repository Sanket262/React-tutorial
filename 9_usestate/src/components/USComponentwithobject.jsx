import React, { useState } from 'react'

function USComponentwithobject() {
 const obj={
    name:"Sanket",
    age:29,
    height:5.11,
    isYoung:true
 }
 const[person,setPerson]=useState(obj);
  let changeState=()=>
  {
    //  setPerson({
    //      name:"vishal",
    //      age:23,
    //      height:5.6,
    //      isYoung:false
    //  })
      
    // setPerson({
    //      name:"vishal",
    //  })

    setPerson(prev=>{
        return{
            ...prev,
            name:"Kumar"
        }

    })
  }
 return (
    <div>
      <h1>{person.name}</h1>
          <h1>{person.age}</h1>
              <h1>{person.height}</h1>
                <h1>{person.isYoung.toString()}</h1>
    
    <button onClick={changeState}>Click</button>
    </div>

  )
}

export default USComponentwithobject

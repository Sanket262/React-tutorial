import React, { useState } from 'react'
/*
function USComponent() {
    const myArray=useState("Adil")
  return (
    <div>
      <h1>{myArray[0]}</h1>
      <button onClick={()=>myArray[1]("Kumar")}>Update</button>
    </div>
  )
}

export default USComponent
*/

/*
function USComponent() {
    const myArray=useState("Adil")
    const changeState=()=>
    {
        myArray[1]("prem")
    }
  return (
    <div>
      <h1>{myArray[0]}</h1>
      <button onClick={changeState}>Update</button>
    </div>
  )
}
export default USComponent
*/

function USComponent() {
    const [name,setName]=useState("sanket")
    const changeState=()=>
    {
        setName("Vijay")
    }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeState}>Update</button>
    </div>
  )
}
export default USComponent



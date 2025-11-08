import React, { useContext } from 'react'
import {NameContext} from '../App'
function CompC() {
   const myName= useContext(NameContext)
  return (
    <div>
     <h1>I am in Component c</h1> 
     <p>{myName}</p>
    </div>
  )
}

export default CompC

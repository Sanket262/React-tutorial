import React, { useState } from 'react'

function USCompwithnumarray() {
    let num=[20,30,58,14]
    const [numbers,setNumbers]=useState(num)
    const AddNumbber=()=>
    {
        //  setNumbers([68,14,18,36]);

       // setNumbers([...numbers,Math.floor(Math.random()*60)])

       //setNumbers(prev => [...prev, Math.floor(Math.random() * 60)]);

       setNumbers(prev=>{ 
         return [
          ...prev,Math.floor(Math.random()*60)
         ]
   })};

    const updateNumber=()=>
    {
        const update=prompt("Which number update")
        if(update===null)
        {
            return;
        }
        const updateToNumber=parseInt(update);
        if(isNaN(updateToNumber))
        { 
            alert("Enter a Valid Mumber")
            return;
        }
        if(!numbers.includes(updateToNumber))
        {
             alert(`X Number ${updateToNumber} not found in the Array`)
             return;
        }
         setNumbers(prev=>{
           return prev.map(n=> (n===updateToNumber? Math.floor(Math.random()*50):n))
         })
    }

    const deleteNumber=()=>
    {
        //Ask user for number to delete
        const userInput=prompt("enter theNumber UYou Want to be Delete");
        if(userInput===null)
        {
            return;
        }
        const numberToDelete=parseInt(userInput);
        if(isNaN(numberToDelete))
        {
             alert("plz enter a valid Number:")
             return;
        }
        if(!numbers.includes(numberToDelete))
        {
             alert(`X Number ${numberToDelete} not found in the Array`)
        }
        setNumbers(prev=>(
            prev.filter(n=>n!==numberToDelete)
        ))
        
    }
 

  return (
    <div>
    <ul>
        {numbers.map((n,index)=>
            <li key={index}>{n}</li>
        )}
    </ul>
    <button onClick={AddNumbber}>AddNumber</button>
    <button onClick={updateNumber}>updateNumber</button>
    <button onClick={deleteNumber}>Delete 30</button>
    </div>
  )
}

export default USCompwithnumarray

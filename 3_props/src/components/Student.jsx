import React from 'react'

function Student(props) {

  return (
    console.log(props),
    <div>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <h2>{props.children}</h2>
    </div>
  )
}

export default Student

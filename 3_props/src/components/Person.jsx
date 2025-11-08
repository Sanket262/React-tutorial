import React from 'react'
import PropTypes from 'prop-types'

function Person(props) {
  return (
    <div>
      <h2>{props.name1}</h2>
    </div>
  )
}
export default Person

Person.propTypes={
   name1:PropTypes.string
}
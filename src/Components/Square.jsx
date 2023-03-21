import React from 'react'

const Square = ({id,className,state}) => {
  return (
    <div className={`square ${className} ${state==="X"?"X-color":"O-color"}`} id={id}>{state}</div>
  )
}

export default Square
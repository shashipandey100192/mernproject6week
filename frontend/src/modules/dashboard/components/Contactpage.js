import React from 'react'
import { useSelector } from 'react-redux'

function Contactpage() {
  const a = useSelector((state) => state.counter.value);
  
  return (
    <div>Contactpage 

      {a}
    </div>
  )
}

export default Contactpage
import React from 'react'
import { useParams } from 'react-router-dom'

function ViewDetailspage() {
    const {id} =useParams() 
  
    return (
    <div>ViewDetailspage {id}</div>
  )
}

export default ViewDetailspage
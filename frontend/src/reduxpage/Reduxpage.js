import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from './Myactionlist'



function Reduxpage() {
const count = useSelector((state) => state.counter.value);
  const abc = useDispatch()



  return (
    <div>Reduxpage
        <h1>{count}</h1>
    <input type='button' value="inc" onClick={() => abc(increment())}/>
    </div>
  )
}

export default Reduxpage
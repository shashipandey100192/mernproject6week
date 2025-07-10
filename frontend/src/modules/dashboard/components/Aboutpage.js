import React, { useEffect, useState } from 'react'

function Aboutpage() {
  const [a,b]=useState([]);

  const mylocal = ()=>{
    b(JSON.parse(localStorage.getItem("mydata")));
  }

  useEffect(()=>{
    mylocal();
  },[])

  return (
    <div>Aboutpage
      <select>
        {a.map((d)=>{
          return <option>{d}</option>
        })}
      </select>

    </div>
  )
}

export default Aboutpage
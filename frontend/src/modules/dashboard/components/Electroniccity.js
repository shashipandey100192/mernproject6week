import React from 'react'

function Electroniccity(Props) {
    const id = [10,50,90,80,40,50,60,50,20,100,200,300,400,500,600];
    localStorage.setItem("mydata",JSON.stringify(id));

  return (
    <div className='p-5 border bg-danger'>Electroniccity
        <h2>{Props.emplist}</h2>
        {id}
    </div>
  )
}

export default Electroniccity
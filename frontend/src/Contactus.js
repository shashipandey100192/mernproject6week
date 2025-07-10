import React, { useState } from 'react'
import Aboutpage from './About';

function Contactus() {

    const name = "kumard";
    let age=20;
    const [a,b]=useState(100);

    const xyz = ()=>{
        b(500);
    }

  return (
   <div className='container'>
    <div className='row'>
        <div className='col-6'>
            <h1>this is heading {age}</h1>
            <h2>{50+90}</h2>
            <h3>{name=="ravi"? "name is ravi singh" :"no"}</h3>
            <h3>{name=="ravi"? <h3>this is true</h3> :name=="kumar"? <Aboutpage/> :"Nothing"}</h3>
            <div> <input type='text' value={age}/></div>
            {a}
            <input type="button" value="update" onClick={xyz}/>
        </div>
    </div>
   </div>

  )
}

export default Contactus
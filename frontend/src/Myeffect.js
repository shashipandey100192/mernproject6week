import React, { useEffect, useState } from 'react'

function Myeffect() {
    const [x,y]=useState("ravi"); 

    const myelet = (e)=>{
        console.log(e.target.value);
        y(e.target.value);
    }

    const showmsg = ()=>{
        // alert("welcome to reactjs");
        console.log("welcome to");
    }

    useEffect(()=>{
        showmsg();
    },[])

    return (
    <div>
        <input type='text' value={x} onInput={myelet}/>

        <h1>mydata list {x}</h1>


    </div>
  )
}

export default Myeffect
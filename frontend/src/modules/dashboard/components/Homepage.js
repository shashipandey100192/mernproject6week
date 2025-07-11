import React, { useEffect } from 'react'
import axios from 'axios';


function Homepage() {
  const alluserslist = async ()=>{
      await axios.get('http://localhost:5500/alluser').then((d)=>{
        console.log(d.data);
      })
  }

useEffect(()=>{
  alluserslist();
},[])



  return (
    <div>Homepage</div>
  )
}

export default Homepage
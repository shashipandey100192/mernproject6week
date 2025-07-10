import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

function Productdetailspage() {
    const {id} = useParams();
    const [mydata,setdatas]=useState({})

const singledata = ()=>{
        axios.get(`https://dummyjson.com/products/${id}`).then((d)=>{
            console.log(d.data);
            setdatas(d.data);
        })
    }

useEffect(()=>{
    singledata();
},[])



  return (
    <div className='container-fluid'>
       <div className='row'>
        <div className='col-md-4 border'>
                <img src={mydata.thumbnail} alt={mydata.id} />
        </div>
        <div className='col-md-8 border '>
            <h3>Product: {mydata.category}</h3>
            <h4>Title: {mydata.title}</h4>
            <p> {mydata.description}</p>
        </div>

       </div>

    </div>
  )
}

export default Productdetailspage
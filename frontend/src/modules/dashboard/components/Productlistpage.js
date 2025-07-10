import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Productlistpage() {
    const [mydata, setdata] = useState([])
    const [mycat, setcat]=useState([]);
    const [myfilter,setfilter]=useState([]);


    // const Myapi = () => {
    //     fetch('https://dummyjson.com/products').then((res) => {
    //         console.log(res);
    //         return res.json()
    //     }).then((d) => {
    //         console.log(d);
    //         setdata(d.products)

    //     })
    // }

    const Myapi = ()=>{
        axios.get('https://dummyjson.com/products').then((d)=>{
            // console.log(d.data.products);
            setdata(d.data.products);
            setfilter(d.data.products);
            const a = d.data.products;
            var b = a.map((x)=>{
                return x.category
            });
            setcat([...new Set(b)]);
        });
    }



    const myproductfilter = (e)=>{
        console.log(e.target.value);
        const filterdata = myfilter.filter((d)=>{
            return d.category===e.target.value
        });
        setdata(filterdata);

    }



useEffect(()=>{
    Myapi();
},[]);

    return (
        <div className="container-fluid">
             <div className="row">
                <div className='col-md-3'>
                    <select className='form-select' onChange={myproductfilter}>
                        {mycat.map((d)=>{
                        return <option key={d}> {d}</option>
                    })}
                    </select>
                </div>
                    <div className='col-md-5'>
                        <select className='form-select searchby'>
                            <option hidden>Search By</option>
                            <option>id</option>
                            <option>title</option>
                            <option>category</option>
                            <option>price</option>
                        </select><input type='text' className='form-control searchby searchby1 ms-2' placeholder='search by '/>
                    </div>

             </div>
            <div className='row'>
                {mydata.map((d) => {
                    return (<div className='col-md-3 mt-2' key={d.id}>
                        <div className='card p-3'>
                            <h5>Pro Id:{d.id}</h5>
                            <img src={d.thumbnail} />
                            <Link to={`detailspage/`+d.id} className='btn btn-primary'>Product Details</Link>
                           
                        </div>
                    </div>)

                })}

            </div>
        </div>
    )
}

export default Productlistpage
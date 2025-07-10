import React from 'react'
import Noidabranch from './Noidabranch'

function Mainbranch() {
    const emp = "this is use of props";
    const emp1 = [
            { name: "kumar", age: 20, sub: "web" },
            { name: "rohit", age: 20, sub: "web" },
            { name: "ravi", age: 20, sub: "web" }];
    return (
        <div className='container-fluid border'>
            <div className='row'>
                <div className='col-12 bg-warning p-4'>
                    <h2>this is main branch</h2>
                    {emp}
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <Noidabranch abcd={emp} datalist={emp1}></Noidabranch>
                </div>
            </div>
        </div>
    )
}

export default Mainbranch
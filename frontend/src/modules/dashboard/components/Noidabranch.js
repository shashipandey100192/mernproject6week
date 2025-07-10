import React from 'react'
import Electroniccity from './Electroniccity'

function Noidabranch(Props) {
  return (
    <div className='bg-info p-5 mt-2'>
        <h1>this is child branch</h1>
        {Props.abcd}

        <select>
        {Props.datalist.map((d)=>{
            return <option>{d.name}</option>
        })}
        </select>

        <Electroniccity emplist ={Props.abcd}></Electroniccity>

    </div>
  )
}

export default Noidabranch
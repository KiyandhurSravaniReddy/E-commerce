import React from 'react'
import {  kitchenData } from '../data/data/kitchen'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const Kitchenpage=()=>{
    return(
     <>
     <div className='propage'>
     <Navbar/>
      <div className='pagesection'>
     { kitchenData.map(()=>{
        return (
            <div>
               <Link to={`/Kitchen/${item.id}`}>
               <div className='pageimg'>
                    <img src={item.image} alt=""/>
                    </div></Link>
                    <div className='promodel'>
                          {item.company},{item.price},{item.model}
                        </div>
                </div>
        )
     })}
     </div>
      </div></>
    )
}
export default  Kitchenpage
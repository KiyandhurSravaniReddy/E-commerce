import React from 'react'
import {watchData } from '../data/data/watch'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const Watchespage=()=>{
    return(
     <>
     <div className='propage'>
     <Navbar/>
      <div className='pagesection'>
     { watchData.map(()=>{
        return (
            <div>
               <Link to={`/watches/${item.id}`}>
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
export default  Watchespage
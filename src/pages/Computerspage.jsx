import React from 'react'
import { computerData } from '../data/data/computers'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const Computerspage=()=>{
    return(
     <>
     <div className='propage'>
     <Navbar/>
      <div className='pagesection'>
     {computerData.map(()=>{
        return (
            <div>
               <Link to={`/computers/${item.id}`}>
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
export default  Computerspage
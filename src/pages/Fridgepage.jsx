import React from 'react'
import { fridgeData } from '../data/data/fridge'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const Fridgepage=()=>{
    return(
     <>
     <div className='propage'>
     <Navbar/>
      <div className='pagesection'>
     {fridgeData.map(()=>{
        return (
            <div>
               <Link to={`/Fridge/${item.id}`}>
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
export default  Fridgepage
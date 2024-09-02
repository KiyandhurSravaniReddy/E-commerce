import React from 'react'
import { furnitureData } from '../data/data/furniture'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const Furniturepage=()=>{
    return(
     <>
     <div className='propage'>
     <Navbar/>
      <div className='pagesection'>
     {furnitureData.map(()=>{
        return (
            <div>
               <Link to={`/Furniture/${item.id}`}>
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
export default  Furniturepage
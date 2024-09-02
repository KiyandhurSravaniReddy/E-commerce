import React from 'react'
import { menData } from '../data/data/men'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const Menfashionpage=()=>{
    return(
     <>
     <div className='propage'>
     <Navbar/>
      <div className='pagesection'>
     {menData.map(()=>{
        return (
            <div>
               <Link to={`/MenFashion/${item.id}`}>
               <div className='pageimg'>
                    <img src={item.image} alt=""/>
                    </div></Link>
                    <div className='promodel'>
                         {item.type}, {item.company},{item.price},{item.model}
                        </div>
                </div>
        )
     })}
     </div>
      </div></>
    )
}
export default  Menfashionpage
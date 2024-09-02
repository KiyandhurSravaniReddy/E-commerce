import React from 'react'
import { tvData } from '../data/data/tv'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const Tvpage=()=>{
    return(
     <>
     <div className='propage'>
     <Navbar/>
      <div className='pagesection'>
     {tvData.map(()=>{
        return (
            <div>
               <Link to={`/Tv/${item.id}`}>
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
export default  Tvpage
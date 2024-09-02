import React from 'react'
import { acData } from '../data/data/ac'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const Acpage=()=>{
    return(
     <>
     <div className='propage'>
     <Navbar/>
      <div className='pagesection'>
     {acData.map(()=>{
        return (
            <div>
               <Link to={`/Ac/${item.id}`}>
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
export default  Acpage
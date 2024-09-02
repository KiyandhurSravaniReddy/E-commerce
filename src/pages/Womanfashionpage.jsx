import React from 'react'
import { womanData } from '../data/data/woman'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const Womanfashionpage=()=>{
    return(
     <>
     <div className='propage'>
     <Navbar/>
      <div className='pagesection'>
     {womanData.map(()=>{
        return (
            <div>
               <Link to={`/women/${item.id}`}>
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
export default  Womanfashionpage
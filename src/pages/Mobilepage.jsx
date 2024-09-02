import React from 'react'
import { mobileData } from '../data/data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const Mobilepage=()=>{
    return(
     <>
     <div className='propage'>
     <Navbar/>
      <div className='pagesection'>
     {mobileData.map(()=>{
        return (
            <div>
               <Link to={`/mobiles/${item.id}`}>
               <div className='pageimg'>
                    <img src={item.image} alt=""/>
                    </div></Link>
                    <div className='promodel'>
                            {item.company},{item.model}
                        </div>
                </div>
        )
     })}
     </div>
      </div></>
    )
}
export default  Mobilepage
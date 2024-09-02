import React from 'react'
import { speakerData } from '../data/data/speaker'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const Speakerspage=()=>{
    return(
     <>
     <div className='propage'>
     <Navbar/>
      <div className='pagesection'>
     {speakerData.map(()=>{
        return (
            <div>
               <Link to={`/Speaker/${item.id}`}>
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
export default  Speakerspage
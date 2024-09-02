import React from 'react'
import {fridgeData} from '../data/data/fridge'
const Fridge=()=>{
  const firstfiveimages = fridgeData.slice(0,5)
    return(
     <>
     <div className='protitle'>
     <h2> Fridge</h2>
     </div>
     
      <div className='prosection'>
      {
        firstfiveimages.map((item)=>{
                return(
                    <div className='imgbox'>
                        <img className='proimage' src={item.image} alt="" />
                        </div>
                )
        })
      }
      </div></>
    )
}
export default  Fridge
import React from 'react'
import {furnitureData} from '../data/data/furniture'
const Furniture=()=>{
  const firstfiveimages =  furnitureData.slice(0,5)
    return(
     <>
     <div className='protitle'>
     <h2>Furniture</h2>
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
export default Furniture
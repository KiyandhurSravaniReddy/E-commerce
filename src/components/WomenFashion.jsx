import React from 'react'
import {womanData } from '../data/data/woman'
const WomenFashion=()=>{
  const firstfiveimages =  womanData .slice(0,5)
    return(
     <>
     <div className='protitle'>
     <h2>WomenFashion</h2>
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
export default WomenFashion
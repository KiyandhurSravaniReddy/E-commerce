import React from 'react'
import {acData} from '../data/data/ac'
const Ac=()=>{
  const firstfiveimages =  acData.slice(0,5)
    return(
     <>
     <div className='protitle'>
     <h2>Ac</h2>
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
export default Ac
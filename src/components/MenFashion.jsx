import React from 'react'
import {menData} from '../data/data/men'
const MenFashion=()=>{
  const firstfiveimages =  menData.slice(0,5)
    return(
     <>
     <div className='protitle'>
     <h2>MenFashion</h2>
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
export default MenFashion
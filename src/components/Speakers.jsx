import React from 'react'
import {speakerData} from '../data/data/speaker'
const Speakers=()=>{
  const firstfiveimages =  speakerData.slice(0,5)
    return(
     <>
     <div className='protitle'>
     <h2>Speakers</h2>
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
export default Speakers
import React from 'react'
import {mobileData} from '../data/data/mobiles'
const Mobiles=()=>{
  const firstfiveimages = mobileData.slice(0,5)
    return(
     <>
     <div className='protitle'>
     <h2>Mobiles</h2>
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
export default Mobiles
import React from 'react'
import {computerData} from '../data/data/computers'
const Computers=()=>{
  const firstfiveimages = computerData.slice(0,5)
    return(
     <>
     <div className='protitle'>
     <h2>Computers</h2>
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
      </div>
     </>
    )
}
export default Computers
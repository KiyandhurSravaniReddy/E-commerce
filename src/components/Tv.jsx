import React from 'react'
import {tvData} from '../data/data/tv'
const Tv=()=>{
  const firstfiveimages =  tvData.slice(0,5)
    return(
     <>
     <div className='protitle'>
     <h2>Tv</h2>
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
export default Tv
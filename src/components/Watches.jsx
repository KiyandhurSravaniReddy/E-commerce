import React from 'react'
import { watchData} from '../data/data/watch'
const Watches=()=>{
  const firstfiveimages =  watchData.slice(0,5)
    return(
     <>
     <div className='protitle'>
     <h2>Watches</h2>
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
export default Watches
import React from 'react'
import {watchData} from '../data/data/watch'
import { useParams } from 'react-router-dom'
const WatchSingle=()=>{
    const {id}=useParams()
    const product=watchData.find((item)=>item.id===id)
    console.log(id)
    return(
      <div className='ind-page'>
    <div className='ind-image'>
        <img src={product.image}alt=''/>
    </div>
    <div className='ind-price'>
        <h2>{product.price}</h2>
    </div>
    <div className='ind-desc'>
        <p>
            {product.description}
        </p>
    </div>
      </div>
    )
}
export default  WatchSingle
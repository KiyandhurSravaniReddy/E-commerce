import React from 'react'
import {tvData} from '../data/data/tv'
import { useParams } from 'react-router-dom'
const TvSingle=()=>{
    const {id}=useParams()
    const product=tvData.find((item)=>item.id===id)
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
export default  TvSingle
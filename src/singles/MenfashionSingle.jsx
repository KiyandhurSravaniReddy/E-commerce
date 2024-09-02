import React from 'react'
import {menData} from '../data/data/men'
import { useParams } from 'react-router-dom'
const MenfashionSingle=()=>{
    const {id}=useParams()
    const product=menData.find((item)=>item.id===id)
    console.log(id)
    return(
      <div className='ind-page'>
    <div className='ind-image'>
        <img src={product.image}alt=''/>
    </div>
    <div className='ind-price'>
        <h2>{product.type}</h2>
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
export default  MenfashionSingle
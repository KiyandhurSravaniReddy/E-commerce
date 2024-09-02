import React from 'react'
import {furnitureData} from '../data/data/furniture'
import { useParams } from 'react-router-dom'
const FurnitureSingle=()=>{
    const {id}=useParams()
    const product=furnitureData.find((item)=>item.id===id)
    console.log(id)
    return(
      <div className='ind-page'>
    <div className='ind-image'>
        <img src={product.image}alt=''/>
    </div>
    <div className='ind-price'>
        <h2>{product.price}</h2>
        <h2>{product.brand}</h2>
    </div>
    <div className='ind-desc'>
        <p>
            {product.description}
        </p>
    </div>
      </div>
    )
}
export default  FurnitureSingle
import React from 'react'
import {booksData } from '../data/data/books'
const Books=()=>{
  const firstfiveimages =  booksData .slice(0,5)
    return(
     <>
     <div className='protitle'>
     <h2>Books</h2>
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
export default Books
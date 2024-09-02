import React from 'react'
import { booksData } from '../data/data/books'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const Bookspage=()=>{
    return(
     <>
     <div className='propage'>
     <Navbar/>
      <div className='pagesection'>
     {booksData.map(()=>{
        return (
            <div>
               <Link to={`/Books/${item.id}`}>
               <div className='pageimg'>
                    <img src={item.image} alt=""/>
                    </div></Link>
                    <div className='promodel'>
                          {item.company},{item.price},{item.model}
                        </div>
                </div>
        )
     })}
     </div>
      </div></>
    )
}
export default  Bookspage
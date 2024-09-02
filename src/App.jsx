import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import Ac from './components/Ac'
import Computers from './components/Computers'
import Mobilepage from './pages/Mobilepage'
import Books from './components/Books'
import Fridge from './components/Fridge'
import Furniture from './components/Furniture'
import Kitchen from './components/Kitchen'
import MenFashion from './components/MenFashion'
import WomenFashion from './components/WomenFashion'
import Speakers from './components/Speakers'
import Tv from './components/Tv'
import Watches from './components/Watches'

import MobileSingle from './singles/MobileSingle'
import ComputerSingle from './singles/ComputerSingle'
import AcSingle from './singles/AcSingle'
import TvSingle from './singles/TvSingle'
import MenfashionSingle from './singles/MenfashionSingle'
import WomanfashionSingle from './singles/WomanfashionSingle'
import KitchenSingle from './singles/KitchenSingle'
import FridgeSingle from './singles/FridgeSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import BookSingle from './singles/BookSingle'
import WatchSingle from './singles/WatchSingle'
import SpeakerSingle from './singles/SpeakerSingle'

const App=()=>{
    return(
      <div>
      <Routes>
        <Route path='/' element={ <Landingpage/>}/>
        <Route path='/mobiles' element={ <Mobilepage/>}/>  
        <Route path='/computer' element={ <Computers/>}/>
        <Route path='/ac' element={<Ac/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/fridge' element={<Fridge/>}/>
        <Route path='/furniture' element={<Furniture/>}/>
        <Route path='/kitchen' element={<Kitchen/>}/>
        <Route path='/menfashion' element={<MenFashion/>}/>
        <Route path='/womenfashion' element={<WomenFashion/>}/>
        <Route path='/speakers' element={<Speakers/>}/>
        <Route path='/tv' element={<Tv/>}/>
        <Route path='/watches' element={<Watches/>}/>

        <Route path='/mobiles/:id' element={<MobileSingle/>}/>
        <Route path='/computers/:id' element={<ComputerSingle/>}/>
        <Route path='/menfashion/:id' element={<MenfashionSingle/>}/>
        <Route path='/womenfashion/:id' element={<WomanfashionSingle/>}/>
        <Route path='/furniture/:id' element={<FurnitureSingle/>}/>
        <Route path='/ac/:id' element={<AcSingle/>}/>
        <Route path='/kitchen/:id' element={<KitchenSingle/>}/>
        <Route path='/fridge/:id' element={<FridgeSingle/>}/>
        <Route path='/books/:id' element={<BookSingle/>}/>
        <Route path='/tv/:id' element={<TvSingle/>}/>
        <Route path='/Speakers/:id' element={<SpeakerSingle/>}/>
        <Route path='/watches/:id' element={<WatchSingle/>}/>
        </Routes>
      </div>
    )
}
export default App
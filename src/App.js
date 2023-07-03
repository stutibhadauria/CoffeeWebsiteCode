import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Header from './component/layouts/Header'
import Footer from './component/layouts/Footer'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Gallery from './component/Gallery'
import Textimonial from './component/Textimonial'
import PageNotFound from './component/PageNotFound'
import Login from './component/Login'

function App() {
  return (
    <>
    <Header/>
    <Routes>
       <Route path='/' element ={<Home/>}/>
       <Route path='/about' element ={<About/>}/>
       <Route path='/contact' element ={<Contact/>}/>
       <Route path='/gallery' element ={<Gallery/>}/>
       <Route path='/textimonial' element ={<Textimonial/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='*' element={<PageNotFound/>}/>  
    </Routes>
    <Footer/>
    </>
  )
}

export default App
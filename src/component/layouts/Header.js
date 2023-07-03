import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
 <header className='header'>
 <nav class="navbar navbar-expand-md navbar-dark fixed-top">
  <div class="container-fluid">
    <Link to="" class="navbar-brand">
       <img src="https://cdn1.iconfinder.com/data/icons/menu-dishes-color-filled/300/1864761T-T--T-1-64.png" width="70px" class="img-fluid weblogo"/>
      <img src="https://cdn3.iconfinder.com/data/icons/solid-amenities-icon-set/64/Morning_Coffee_2-64.png" class="moblogo"/>
    </Link>
    <button class="navbar-toggler"data-bs-toggle="collapse" data-bs-target="#a">
      <span class="navbar-toggler-icon"></span>
    </button>
     
    <div class="collapse navbar-collapse" id="a"> 
      <ul class="navbar-nav ms-auto">
      <li><Link to="/" class="nav-link">Home</Link></li>
      <li><Link to="/about" class="nav-link">About us</Link></li>
      <li><Link to="/gallery" class="nav-link">Gallery</Link></li>
      <li><Link to="/contact" class="nav-link">Contact</Link></li>
      <li><Link to="/textimonial" class="nav-link">Textimonial</Link></li>
      <li><Link to="/login" class="nav-link ">Login</Link></li>
       </ul>
    </div>
  </div>
</nav>
</header>
    </>
  )
}

export default Header
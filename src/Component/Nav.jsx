import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink, useLocation } from 'react-router-dom';
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import './Nav.css'
// import Nav from 'react-bootstrap/Nav';

export const Nav = () => {
  const loaction = useLocation()
  return (
    <>

<nav className="navbar navbar-expand-lg p-16">
  <div className="container">
    {/* <a className="navbar-brand" href="#"><img src={logo} alt="" /></a> */}
    <button className="navbar-toggler" 
    type="button"
    data-bs-toggle="offcanvas"
    href="#offcanvasExample"
    role="button"
    aria-controls="offcanvasExample">
      {/* <span className="navbar-toggler-icon"></span> */}
      <span><HiMiniBars3BottomRight /></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav  ms-11 mb-lg-0">

      <NavLink to={'/'}  className={`${location.pathname == '/' ? " border-1 border-dark border-bottom" : ""} edit`} >
      <li className="nav-item">
          <a className="nav-link text-xl font-fontRegular " href="#">Home</a>
        </li>
      </NavLink>

        
      <NavLink to={'/blogs'}  className={`${location.pathname == '/blogs' ? " border-1 border-dark border-bottom" : ""} edit`} >
      <li className="nav-item">
          <a className="nav-link text-xl font-fontRegular " href="#">Blog</a>
        </li>
      </NavLink> 



      <NavLink to={'/about'}  className={`${location.pathname == '/about' ? " border-1 border-dark border-bottom" : ""} edit`} >
      <li className="nav-item">
          <a className="nav-link text-xl font-fontRegular " href="#">About</a>
        </li>
      </NavLink>
    </ul>
    {/* <a className="nav-link text-center  text-4xl font-fontRegular font-extrabold cooking " href="#">Cooking with Cole</a> */}
          

     
    </div>
  </div>
</nav>



<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel"> 
      {/* <img src={logo} className='img-fluid' alt="" /> */}
       </h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    
    <div class="dropdown mt-3">
      
<ul className="navbar-nav m-auto mb-2 mb-lg-0">


<NavLink to={'/'}  className={`${location.pathname == '/' ? "text-danger" : ""} edit`} >
      <li data-bs-dismiss="offcanvas" className="nav-item">
          <a className="nav-link text-xl font-fontRegular p-1  mt-2 " href="#">Home</a>
        </li>
      </NavLink>

        
      <NavLink to={'/blogs'}  className={`${location.pathname == '/blogs' ? "text-danger" : ""} edit`} >
      <li data-bs-dismiss="offcanvas" className="nav-item">
          <a className="nav-link text-xl font-fontRegular p-1 mt-2" href="#">Blog</a>
        </li>
      </NavLink> 



      <NavLink to={'/about'}  className={`${location.pathname == '/about' ? "text-danger" : ""} edit`} >
      <li data-bs-dismiss="offcanvas" className="nav-item">
          <a className="nav-link text-xl font-fontRegular p-1 mt-2" href="#">About</a>
        </li>
      </NavLink>
 
</ul>

<ul className='m-0 d-flex'>
</ul>
    </div>
  </div>
</div>


    
    </>
  )
}

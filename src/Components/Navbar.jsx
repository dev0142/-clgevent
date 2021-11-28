import {React,useState} from 'react'
import { NavLink } from 'react-router-dom'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import bvi from '../assests/img1.png'


function Navbar(){
  
    return (
       
    <div className="container-fluid navbar-custom">
    <div className="row">
    <div className="col-10 mx-auto">
    <nav id="mainNav" className="navbar navbar-expand-lg fixed-top navbar-custom">
    
  <div className="container-fluid navbar-dark">
    <a className="img-responsive" href="/"><img src={bvi} alt={bvi} height="60"/></a>
    <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <a activeClassName="menu_active" className="nav-link" href="#EventContainer">Events</a>
        </li>
        <li className="nav-item">
          <a activeClassName="menu_active" className="nav-link" href="#ContactContainer">Contact</a>
        </li>
  
      </ul>

    </div>
  </div>
</nav>
</div>
</div>
</div>


    )
}

export default Navbar

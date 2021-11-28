import React from 'react'
import '../App.css'
import Events from '../Pages/Events'
import Contact from '../Pages/Contact'
import image1 from "../assests/image1.jpeg"
import image2 from "../assests/image2.jpeg"
import image3 from "../assests/image3.jpeg"

function Home() {
    return (
        <>
        
    <section id="header" className="mt-5"> 
<div className="carousel slide" data-ride="carousel" id="Demo" >
    
  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image1} alt="Los Angeles" width="1100" height="300" />
      <div className="carousel-caption" >
        <h3>Welcome To National Student's Convention (NSC) Event</h3>
        <h5>Event Date : 4th December</h5>
      </div>   
    </div>
    <div className="carousel-item">
      <img src={image2} alt="Chicago" width="1100" height="300"/>
      <div className="carousel-caption">
        <h3>Ready for the exciting competition....</h3>
        <h5>Join us in this amazing journey!!</h5>
      </div>   
    </div>
    <div className="carousel-item">
      <img src={image3} alt="New York" width="1100" height="300" />
      <div className="carousel-caption">
        <h3>wishing you all luck</h3>
        <h5>Thank You!</h5>
      </div>   
    </div>
  </div>
  <a className="carousel-control-prev" href="#Demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#Demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>
    <div>
        
            <Events />
        
            </div>
            <div>
                <Contact />
            </div>
        
        
        </section>
      
            
       
        </>
        
        
        
    )
}

export default Home

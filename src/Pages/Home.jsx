import React from 'react'
import '../App.css'
import Events from '../Pages/Events'
import Contact from '../Pages/Contact'
import image7 from "../assests/image7.jpg"
import image2 from "../assests/image2.jpeg"
import image8 from "../assests/image8.jpg"

function Home() {
    return (
        <>
        
    <section id="header" className="mt-5"> 
<div className="carousel slide" data-ride="carousel" id="Demo" >
    
  <ul className="carousel-indicators mb-4 text-right">
    <li data-target="#Demo" data-slide-to="0" className="active"></li>
    <li data-target="#Demo" data-slide-to="1"></li>
    <li data-target="#Demo" data-slide-to="2"></li>
  </ul>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image7} alt="Los Angeles" width="1100" height="100" />
      <div className="carousal-caption mb-4 text-center" >
        <h2> NATIONAL EDUCATION DAY</h2>
        <h4>Event Date : 4th December</h4>
      </div>   
    </div>
    <div className="carousel-item">
      <img src={image2} alt="Chicago" width="1100" height="100"/>
      <div className="carousal-caption mb-4  text-center">
        <h2>Ready for the exciting competitions....</h2>
        <h4>Join us in this amazing journey!!</h4>
      </div>   
    </div>
    <div className="carousel-item">
      <img src={image8} alt="New York" width="1100" height="200" />
      <div className="carousal-caption mb-4 text-center">
        <h2>Wishing you all luck</h2>
        <h4>Thank You!</h4>
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

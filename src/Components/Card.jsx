import React from 'react'
import {NavLink} from 'react-router-dom'
import {Button} from "react-bootstrap"
import {useState} from 'react'
import Modal from "react-bootstrap/Modal"


function Card(props) {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    
    return (
        <div className="col-md-12 col-lg-4 col-sm-3">
<div className="card shadow p-2 mb-1 bg-white rounded" >
  <img src={props.imgsrc} className="card-img-top" height="350px" alt="..."/>
  <div className="card-body">
    <h4 className="card-title font-weight-bold">{props.title}</h4>
    <p className="card-text">{props.text}</p>
    <a href={props.link} target="_blank" className="btn btn-primary EventButton btn-lg btn-sm">Register</a>
    <Button className="btn btn-primary EventButton btn-lg btn-sm" onClick={handleShow}>
        Rules & Regulations
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.poptitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="space">{props.poptext}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
   


  </div>
</div>
</div>

    )
}

export default Card

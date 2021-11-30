import React from "react";
import { NavLink } from "react-router-dom";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function ContactCard(props) {
  return (
    <div className="col-md-12 col-lg-4 col-sm-3">
      <div className="card shadow-lg p-4 mb-2 bg-white rounded">
        <img
          style={{ objectFit: "contain" }}
          src={props.imgsrc}
          height="350px"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h4 className="font-weight-bold">{props.name}</h4>
          <p className="card-title font-weight-bold">{props.title}</p>

          <a
            href={props.number}
            target="_blank"
            className="btn btn-primary EventButton btn-lg btn-sm text-center"
          >
            <PhoneIcon /> Call
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;

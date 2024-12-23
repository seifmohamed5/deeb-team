import React from 'react'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaLayerGroup } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import '../pages/course.css'
function Cards(props) {
  
  // cousrses cards


  return (
    <div key={props.course.id} className="col-lg-4">
      {/* card start */}
      <div className="card">
        {/* img */}
        <img src={props.course.image} alt={props.course.title} className="card-img-top" /> 
        {/* card body */}
        <div className="card-body">
          <h3 className="card-title">{props.course.title}</h3>
          <p className="card-text">{props.course.description}</p>
          <div className="price-teacher">
            <span className="teacher-course">{props.course.teacher}</span>
            <span className="course-price">${props.course.price}</span>
          </div>
          <div className="details detail">
            <span>
              <FaLayerGroup className="i" /> 12 Modules
            </span>
            <span>
              <FaClock className="i" /> 6 Hours
            </span>
          </div>
          <div className="btn-box">

          <Link to="/form" as={Button} className="btn btn-card">
            start course
          </Link>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Cards
import React from "react";
import Header from "../component/Header";
import coursesList from "./coursesList.json";
import "./course.css";
import Cards from "../component/cards";
function Courses() {
  // import cards function
  const courseCards = coursesList.map((course) => {

    return(
      <Cards key={course.id} course={course} />
    )
  })
    
  
  return (
    <>
      <Header title="Courses" smtitle="Courses" />
      {/* courses cards */}
      <div className="container courses">
        <h1>Courses</h1>
        <div className="row">{courseCards}</div>
      </div>
    </>
  );
}

export default Courses;

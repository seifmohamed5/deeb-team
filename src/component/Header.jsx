import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <>
    {/* header for pages */}
      <div className="header-img container-fluid">
        <div className="container">
          <div className="title-header d-flex flex-column justify-content-center ">
            <h2 className="display-4 text-white text-uppercase">
              {props.title}
            </h2>
            <p>
              <Link to="/">Home</Link> {">>"} {props.smtitle}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

import React, { useState } from "react";
import bg from "../img/bg_updated.svg";
import avatar from "../img/avatar_modified.svg";
import { FaEnvelope } from "react-icons/fa";

import { Link } from "react-router-dom";

import "./sinup.css";
import { Button } from "react-bootstrap";

function ForgotPass() {
  const [email, setEmail] = useState("");
  // falidation forgot password
  const onSubmit = () => {
    if (email === "") {
      alert("Please enter your email");
      window.location.reload();
    } else {
      window.location.href = "/resetpassowrd";
    }
  };
  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container ">
        <div className="row m-0">
          <div className="col-lg-12 signup">
            <div className="row page">
              {/* img left */}
              <div className="col-lg-5">
                <img className="left-img" src={bg} alt="" />
              </div>

              <div className="col-lg-6 form-sign">
                <div className="head-form">
                  {/* img form */}
                  <div className="img-box">
                    <img className="right-img" src={avatar} alt="" />
                  </div>
                  <h2>Reset Password</h2>
                </div>
                
                {/* form */}
                <form onSubmit={handelSubmit}>
                  <div className="form-signup">
                    <h5>Email</h5>
                    <div className="input-signup">
                      <FaEnvelope className="ico" />
                      <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="a-btn">
                    <Link onClick={onSubmit} className="signup-btn" as={Button}>
                      Submit
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPass;

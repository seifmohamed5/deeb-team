import React, { useState } from "react";
import bg from "../img/bg_updated.svg";
import avatar from "../img/avatar_modified.svg";

import { Link } from "react-router-dom";

import "./sinup.css";
import { Button } from "react-bootstrap";
import { FaLock } from "react-icons/fa6";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  // reset password vlidation
  const onSubmit = () => {
    if (password === "" || password2 === "") {
      alert("Please enter new password");
      window.location.reload();
    } else if (password !== password2) {
      alert("Passwords do not match");
      window.location.reload();
    } else {
      alert("success change password");
      window.location.href = "/";
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
                <form onSubmit={handelSubmit}>
                  <div className="form-signup">
                    <h5>New Password</h5>
                    <div className="input-signup">
                      <FaLock className="ico" />
                      <input
                        type="password"
                        placeholder="New Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-signup">
                    <h5>Password Again</h5>
                    <div className="input-signup">
                      <FaLock className="ico" />
                      <input
                        type="password"
                        placeholder="Password Again"
                        onChange={(e) => setPassword2(e.target.value)}
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

export default ResetPassword;

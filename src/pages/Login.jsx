import React, { useState } from "react";
import bg from "../img/bg_updated.svg";
import avatar from "../img/avatar_modified.svg";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./sinup.css";
import { Button } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // login validation
  const onSubmit = () => {
    if (email === "" || password === "") {
      alert("Please enter your email and password");
      window.location.reload();
    } else {
      alert("Login successful");
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
              {/* left img */}
              <div className="col-lg-5">
                <img className="left-img" src={bg} alt="" />
              </div>

              <div className="col-lg-6 form-sign">
                <div className="head-form">
                  {/* right img */}
                  <div className="img-box">
                    <img className="right-img" src={avatar} alt="" />
                  </div>
                  <h2>Log in</h2>
                </div>
                {/* form login */}
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

                  <div className="form-signup">
                    <h5>Password</h5>
                    <div className="input-signup">
                      <FaLock className="ico" />
                      <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="a-btn">
                    <Link className="a-login" to="/forgotpassword">
                      Forgot Password
                    </Link>
                    <Link onClick={onSubmit} className="signup-btn" as={Button}>
                      Log In
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

export default Login;

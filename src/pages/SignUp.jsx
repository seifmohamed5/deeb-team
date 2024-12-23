import React, { useState } from "react";
import bg from "../img/bg_updated.svg";
import avatar from "../img/avatar_modified.svg";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./sinup.css";
import { Button } from "react-bootstrap";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  // form validation
  const onSubmit = () => {
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      password === "" ||
      password2 === ""
    ) {
      alert("Please fill all fields");
      window.location.reload();
    } else if (setPassword !== setPassword2) {
      alert("Passwords do not match");
      window.location.reload();
    } else {
      alert("Form submitted successfully");
      window.location.href = "/";
    }
  };
  const handelSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="container ">
        <div className="row m-0">
          <div className="col-lg-12 signup">
            <div className="row page">
              <div className="col-lg-5">
                <img className="left-img" src={bg} alt="" />
              </div>

              <div className="col-lg-6 form-sign">
                <div className="head-form">
                  <div className="img-box">
                    <img className="right-img" src={avatar} alt="" />
                  </div>
                  <h2>Sign Up</h2>
                </div>
                <form onSubmit={handelSubmit}>
                  <h5>Username</h5>
                  <div className="input-signup">
                    <FaUser className="ico" />
                    <input
                      type="text"
                      placeholder="Username"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="form-signup">
                    <h5>Email</h5>
                    <div className="input-signup">
                      <FaEnvelope className="ico" />
                      <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-signup">
                    <h5>phone</h5>
                    <div className="input-signup">
                      <FaPhoneAlt className="ico" />
                      <input
                        type="text"
                        placeholder="phone"
                        onChange={(e) => setPhone(e.target.value)}
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
                    <Link className="a-login" to="/login">
                      Already have an account?
                    </Link>
                    <Link onClick={onSubmit} className="signup-btn" as={Button}>
                      Sign Up
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

export default SignUp;

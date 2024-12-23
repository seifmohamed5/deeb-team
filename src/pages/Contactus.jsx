import React, { useState } from "react";
import Header from "../component/Header";
import "./contact.css";
function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // validation function
  const handleclick = () => {
    if (name === "" || email === "" || message === "") {
      alert("Please fill All fields");
      window.location.reload();
      return;
    } else {
      alert("Your message is required");
    }
  };
  // API request
  const handelSubmitted = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5cac116b-f696-4d49-a7fc-fc5e489b4671");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      window.location.href = "/";
    } else {
      console.log("Error", res);
    }
  };

  return (
    <>
      <Header title="CONTACT US" smtitle="Contact us" />
      <div className="contact-page">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              {/* contact  */}
              <div className="contact">

                <h1>Contact Us</h1>
                <p>
                  We'd love to hear from you. please fill out the form below.
                </p>
                {/* form start */}
                <form id="contactform" onSubmit={handelSubmitted}>
                  {/* form inputs */}
                  <label for="name">Full Name</label> 
                  {/* name */}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Please Enter Your Full Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />

                  <label for="email">Email Address</label>
                  {/* email */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Please Enter Your Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />

                  <label for="message">Your Message</label>
                  {/* message */}
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Write Your Message Here..."
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                  {/* submit button */}
                  <input
                    className="submitform"
                    type="submit"
                    name="submit"
                    value="Send Message"
                    onClick={handleclick}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;

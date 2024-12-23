import React, { useState } from "react";
import "./form.css";

function Form() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [brithdate, setBrithdate] = useState("");
  const [gander, setGender] = useState("");
  // valedation of the form inputs
  const handelSubmit = () => {
    if (
      first === "" ||
      second === "" ||
      email === "" ||
      phone === "" ||
      country === "" ||
      city === "" ||
      brithdate === "" ||
      gander === ""
    ) {
      alert("Please fill all fields");
      window.location.reload();

      return;
    } else {
      alert("Form submitted successfully");
    }
  };
  // API request
  const onSubmit = async (event) => {
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
    {/* form box */}
      <div className="form-container col-lg-6 ">
        <div className="fill">
          <h1>Fill the Form</h1>
        </div>
        {/* form start */}
        <form onSubmit={onSubmit}>
          {/* form inputs */}
          <div className="name-form">
            {/* first name */}
            <input
              type="text"
              name="first"
              placeholder="First Name"
              onChange={(e) => setFirst(e.target.value)}
            />
            {/* second name */}
            <input
              type="text"
              name="second"
              placeholder="Second Name"
              onChange={(e) => setSecond(e.target.value)}
            />
          </div>
          <div className="contect-form">
            {/* email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* phone */}
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="country-form">
            {/* country */}
            <input
              type="text"
              name="country"
              placeholder="Your country"
              onChange={(e) => setCountry(e.target.value)}
            />
            {/* city */}
            <input
              type="text"
              name="city"
              placeholder="Your city"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="brith-form">
            {/* brith date */}
            <input
              type="date"
              name="brithdate"
              onChange={(e) => setBrithdate(e.target.value)}
            />
            {/* gender */}
            <select name="gander" onChange={(e) => setGender(e.target.value)}>
              <option value="">gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="sub">
            {/* submit button */}
            <input
              type="submit"
              value="Submit"
              name="submit"
              onClick={handelSubmit}
              className="btn btn-primary"
            />

          </div>
        </form>
      </div>
    </>
  );
}

export default Form;

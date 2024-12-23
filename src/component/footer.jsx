import React from "react";
import "./footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
function Footer() {
  return (
    <>
      <footer>
        <div className="container-fluid pt-7 foot">
          <div className="row pt-5">
            <div className="col-lg-7 col-md-12">
              <div className="row">
                {/* col left start */}
                <div className="col-md-6 mb-5">
                  <h4>GET IN TOUCH</h4>
                  <ul className="list-unstyled">
                    <li>
                      <FaLocationDot /> Borg Al-Alarab Technology, Alexandia
                    </li>
                    <li>
                      <FaPhoneAlt /> +2012 102 88768
                    </li>
                    <li>
                      <IoMdMail /> deeb@gmail.com
                    </li>
                  </ul>
                  <div className="social-media d-flex justify-content-start mt-4">
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f ">
                        <CiFacebook />
                      </i>
                    </a>
                    <a href="https://x.com/?lang=ar">
                      <i className="fab fa-twitter twitter">
                        <FaSquareXTwitter />
                      </i>
                    </a>
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram">
                        <IoLogoInstagram />
                      </i>
                    </a>
                    <a href="https://www.linkedin.com/">
                      <i className="fab fa-linkedin-in">
                        <CiLinkedin />
                      </i>
                    </a>
                  </div>
                </div>
                {/* col left end */}

                {/* col center start */}
                <div className="col-md-6 mb-5">
                  <h4>OUR COURSES</h4>
                  <ul className="footer-col-2">
                    <li>
                      <a href="/courses"> {">"} web design</a>
                    </li>
                    <li>
                      <a href="/courses"> {">"} markiting</a>
                    </li>
                    <li>
                      <a href="/courses"> {">"} mobile application</a>
                    </li>
                    <li>
                      <a href="/courses"> {">"} network</a>
                    </li>
                  </ul>
                </div>
                {/* col center end */}
              </div>
            </div>
            {/* col right start */}
            <div className="col-lg-5 col-md-12 mb-5 footer-col">
              <h4>NEW SLETTER</h4>
              <p>
                Rebum labore lorem dolores kasd est, et ipsum amet et at kasd,
                ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor
                duo eirmod sea justo no lorem est diam
              </p>
              <form className="form-inline">
                <div>
                  <input
                    type="email"
                    className="form-control border-light "
                    placeholder="Enter your email"
                  />
                  <button type="submit" className="btn-footer btn-primary">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            {/* col right end */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

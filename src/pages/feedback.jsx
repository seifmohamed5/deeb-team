import React from "react";
import Header from "../component/Header";
import "./feedback.css";
import feedimg1 from "../img/testimonial-1.jpg";
import feedimg2 from "../img/testimonial-3.jpg";
import feedimg3 from "../img/testimonial-4.jpg";
import { FaStar } from "react-icons/fa";
function Feedback() {
  return (
    <>
      <Header title="Feedback" smtitle="Feedback" />
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="feed">
              <div className="col-lg-5 form-feed">
        {/* <!-- feedback form--> */}
                <form className="form-box2">
                  <h1>Give your Feedback</h1>
                  <div className="id">
                    <input type="text" placeholder="fullname" />
                    <i class="far fa-user"></i>
                  </div>
                  <div className="id">
                    <input type="email" placeholder="Email address" />
                    <i class="far fa-envelope"></i>
                  </div>
                  <textarea
                    cols="15"
                    rows="5"
                    placeholder="Enter your opinions here.."
                  ></textarea>
                  <button>send</button>
                </form>
              </div>
              {/* reviews cards */}
              <div class="rev-section row">
                <h1>Last Reviews</h1>
                <div className="col-lg-12">
                  <div class="reviews row">
                    <div class="review col-lg-3">
                      <div class="head-review">
                        <img src={feedimg1} alt="" width="250px" />
                      </div>
                      <div class="body-review">
                        <div class="namve-review">Amir Ebrahim</div>
                        <div class="place-review">Egypt</div>
                        <div class="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />

                        </div>
                        <div class="desc-review">
                          One of the best course providers in the Arab world.
                          Thank you very much, Deeb Courses
                        </div>
                      </div>
                    </div>
                    <div class="review col-lg-3">
                      <div class="head-review">
                        <img src={feedimg2} alt="" width="250px" />
                      </div>
                      <div class="body-review">
                        <div class="namve-review">Abdallah Mohamed</div>
                        <div class="place-review">Morocco</div>
                        <div class="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        </div>
                        <div class="desc-review">
                          Deeb Courses Thank you very much, one of the best
                          course providers in the Arab world. Today I finished
                          the marketing course
                        </div>
                      </div>
                    </div>
                    <div class="review col-lg-3">
                      <div class="head-review">
                        <img src={feedimg3} alt="" width="250px" />
                      </div>
                      <div class="body-review">
                        <div class="namve-review">Shady Mohamed</div>
                        <div class="place-review">Saudi Arabia</div>
                        <div class="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        </div>
                        <div class="desc-review">
                          Deeb Courses Thank you very much, one of the best
                          course providers in the Arab world, and thank you for
                          your help. Today I finished the Embedded course.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;

import React from "react";
import Slider from "../component/Slider";
import coursesList from './coursesList.json'
import python from '../img/images4p.png'
import c from '../img/cimg.png'
import cpp from '../img/cppimg.png'
import Cards from "../component/cards";
import { FaLayerGroup  } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import feedimg1 from "../img/testimonial-1.jpg";
import feedimg2 from "../img/testimonial-3.jpg";
import feedimg3 from "../img/testimonial-4.jpg";
import './home.css'
function Home() {
  const courseCards = coursesList.map((course) => {

    return(course.price<500 &&
      <Cards key={course.id} course={course} />
    )
  })
  return (
    <>
      <Slider />
      {/* section courses */}
      <section className="section-home">
        <div className="container courses">
          <h1>Courses</h1>
          <div className="row">{courseCards}</div>
        </div>
      </section>
      {/* section free courses */}
      <section className="section-home">
      <div className="products-free" id="Products">
        <h1>FREE courses</h1>
        <div className="container-free">
            {/* <!-- one card-free--> */}
            <div className="card-free">
                <img src={python} alt="Teaching" />
                <h3>PYTHON</h3>
                <p>Python: versatile programming language, easy to learnflexible, powerful, widely used.</p>
                <div className="details">
                    <span><FaLayerGroup className='i' /> 12 Modules</span>
                    <span><FaClock className='i' /> 6 Hours</span>
                </div>
               <a href="https://www.youtube.com/watch?v=mvZHDpCHphk&list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs" className="btn-free">start</a>
            </div>

            <div className="card-free">
                <img src={c} alt="Designing" />
                <h3>C PROGRAMMING</h3>
                <p> C: powerful, fast, low-level, widely used, system programming language..</p>
                <div className="details">
                    <span><FaLayerGroup className='i' /> 12 Modules</span>
                    <span><FaClock className='i' /> 6 Hours</span>
                </div>
                <a href="https://www.youtube.com/watch?v=8lGYaQXeviM&list=PLRtfJqT1hc31ZP4tr3ijypE_0T-4PE_kZ" className="btn-free">start</a>
            </div>
    
            <div className="card-free">
                <img src={cpp} alt="Dancing" />
                <h3>C++ PROGRAMMING</h3>
                <p>C++: A versatile programming language for systems, applications, and performance.</p>
                <div className="details">
                    <span><FaLayerGroup className='i' /> 12 Modules</span>
                    <span><FaClock className='i' /> 6 Hours</span>
                </div>
                <a href="https://www.youtube.com/watch?v=XDuWyYxksXU&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS" className="btn-free">start</a>
            </div>
      </div>
      </div>

      </section>
      {/* section feed back */}
      <section className="section-home">
                <h1>Last Reviews</h1>
      <div className="section">
        {/* <!-- feedback form--> */}
        <div className="container">
          <div className="row">
            <div className="feed">

              <div class="rev-section row">
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
      
      </section>
      
      {/* section about */}
      <section className="section-home">
        <div className="container">
        <div className=' about-title about-home'>

          <h1>About Our Company</h1>
          <p className="col-lg-8 m-auto">Deeb Courses is the online learning platform from world-leading digital education company . Deeb
                    Couress was founded by Borg Elarab Universty as an experiment to make the world’s best education
                    available to everyone.

                    Today, Deeb Courses connects over 86 million people worldwide with online learning that delivers
                    real professional progress across nearly every career discipline,Together with universities and
                    organizations at the forefront of their fields, Deeb Courses offers thousands of job-relevant
                    programs designed to give every ambitious learner a path to achievement.</p>
        </div>
        </div>


      </section>


    </>
  );
}

export default Home;

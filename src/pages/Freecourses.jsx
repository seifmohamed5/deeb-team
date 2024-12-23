import React from 'react'
import python from '../img/images4p.png'
import c from '../img/cimg.png'
import cpp from '../img/cppimg.png'
import cs50 from '../img/images4..cs50.png'
import bootstrap from '../img/download..bootstrap.png'
import solving from '../img/images1..pro.jpg'
import js from '../img/1628644950-javascript.avif'
import jsoop from '../img/Cp_g920Aq9BVwJ5lxM_q7..oop2.png'
import Git from '../img/download1.git.png'
import { FaLayerGroup  } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import './free.css'
import Header from '../component/Header'
function Freecourses() {
  return (
    <>
    <Header title='FREE COURSES' smtitle='Free courses' />
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
               <a href="https://youtube.com/playlist?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs&si=FM0lEMN1lTYsFCkI" className="btn-free" >start</a>
            </div>
    
            {/* <!-- باقي الكاردات --> */}
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
            <div className="card-free">
                <img src={cs50} alt="Dancing" />
                <h3>CS50 PROGRAMMING</h3>
                <p>CS50:Harvard's free introductory course on computer science..</p>
                <div className="details">
                    <span><FaLayerGroup className='i' /> 12 Modules</span>
                    <span><FaClock className='i' /> 6 Hours</span>
                </div>
                <a href="https://www.youtube.com/watch?v=yhnRH_Vik0Y&list=PLvGNfY-tFUN_1D3D0WAMlWULl3qnEKHEA" className="btn-free">start</a>
            </div>
            <div className="card-free">
                <img src={bootstrap} alt="Dancing" />
                <h3>BOOTSTRAP</h3>
                <p>Bootstrap is a popular CSS framework for responsive web design..</p>
                <div className="details">
                    <span><FaLayerGroup className='i' /> 12 Modules</span>
                    <span><FaClock className='i' /> 6 Hours</span>
                </div>
                <a href="https://www.youtube.com/watch?v=-G72ZuCWo6U&list=PLxbVBWjVdAEjom8KOV1c9aXMCz4IE0OZy" className="btn-free">start</a>
            </div>
            <div className="card-free">
                <img src={solving} alt="Dancing" />
                <h3>PROBLEM SOLVING</h3>
                <p>Problem-solving courses develop critical thinking and analytical decision-making skills.</p>
                <div className="details">
                    <span><FaLayerGroup className='i' /> 12 Modules</span>
                    <span><FaClock className='i' /> 6 Hours</span>
                </div>
                <a href="https://www.youtube.com/watch?v=YwiXDtIJ9Vo&list=PLDoPjvoNmBAyX4CCOP--TR36SfD5g7gru" className="btn-free">start</a>
            </div>
            <div className="card-free">
                <img src={jsoop} alt="Dancing" />
                <h3>JS OOP</h3>
                <p>JavaScript OOP enables creating reusable, organized, and scalable object-based code.</p>
                <div className="details">
                    <span><FaLayerGroup className='i' /> 12 Modules</span>
                    <span><FaClock className='i' /> 6 Hours</span>
                </div>
                <a href="https://www.youtube.com/watch?v=6ivFyw0gs8o&list=PLDoPjvoNmBAzLyvrWPwMw6bbBlTwPxgLF"className="btn-free" >start</a>
            </div>
            <div className="card-free">
                <img src={js} alt="Dancing" />
                <h3>JAVA SCRIPT</h3>
                <p>JavaScript is a dynamic programming language for interactive web development.</p>
                <div className="details">
                    <span><FaLayerGroup className='i' /> 12 Modules</span>
                    <span><FaClock className='i' /> 6 Hours</span>
                </div>
                <a href="https://www.youtube.com/watch?v=GM6dQBmc-Xg&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv"className="btn-free">start</a>
            </div>
            <div className="card-free">
                <img src={Git} alt="Dancing" /> 
                <h3>GIT</h3>
                <p>Git is a version control system; GitHub hosts repositories collaboratively online.</p>
                <div className="details">
                    <span><FaLayerGroup className='i' /> 12 Modules</span>
                    <span><FaClock className='i' /> 6 Hours</span>
                </div>
                <a href="https://www.youtube.com/watch?v=ACOiGZoqC8w&list=PLDoPjvoNmBAw4eOj58MZPakHjaO3frVMF" className="btn-free">start</a>
            </div>
            {/* <!-- أضف 3 كاردات إضافية لو عايز 6 --> */}
        </div>
    </div>
    </>
  )
}

export default Freecourses
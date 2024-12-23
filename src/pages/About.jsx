import React from 'react'
import Header from '../component/Header'
import imgApout from '../img/about.jpg'
import './about.css'
function About() {
  return (
    <>
    {/* header */}
    <Header title='About' smtitle='About' />
    <div className='container about'>
      <div className='row'>
        <div className='col-lg-12 topic'>
          <div className='row'>

          <div className='col-lg-5 about-img'>
            {/* img about */}
            <img src={imgApout} alt="About" />
          </div>
          {/* about title */}
          <div className='col-lg-6 about-title'>
            <h2>ABOUT </h2>
            <h3>Hello, We are the Deeb Courses team</h3>
          <p>Deeb Courses is the online learning platform from world-leading digital education company . Deeb
                    Couress was founded by Borg Elarab Universty as an experiment to make the world’s best education
                    available to everyone.

                    Today, Deeb Courses connects over 86 million people worldwide with online learning that delivers
                    real professional progress across nearly every career discipline,Together with universities and
                    organizations at the forefront of their fields, Deeb Courses offers thousands of job-relevant
                    programs designed to give every ambitious learner a path to achievement.
                </p>
                {/* learn more */}
                <a href="/courses" className='learn-more'>Learn More</a>

          </div>
          </div>


        </div>

      </div>
    </div>
    </>
  )
}

export default About
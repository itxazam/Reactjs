import React from 'react'
import Testimonial from '../../screens/Testimonial/Testimonial'
import "./Aboutdetails.css"
const Aboutdetails = () => {
  return (
    <section className="about_section" id="about">

   
         
       <div className='container-fluid about-header'>
          <div className='row'>
         
          <div className='col-4 about-heading'>
           <h1>About Us</h1>
           <h3>What We Do Best?</h3>
          </div>
          <div className='col-8 about-heading'>
          <p>It is our mission to empower you to become a truly connected enterprise. 
          Using our industry-leading suite of products across integration & API management,
           IoT & analytics and business transformation,
          we create a fluid flow of data between people, departments, systems, and devices.

          We believe in developer privacy, productivity, and happiness above all.
          We’re a team of developers building tools that we want to use.

          The goal is to create the most efficient and effective web application, free from clutter, noise and distraction. 
          To deliver exactly what the customer wants quickly with minimal steps that is logical to the user.</p>
          </div>
      </div>
          
          <div className='row developed-projects'>
              <div className='col-4 project-count'><span>5+</span><p>Years</p></div>
              <div className='col-4 project-count'><span>300+</span><p>Projects</p></div>
              <div className='col-4 project-count'><span>100+</span><p>Clients</p></div>
          </div>
       </div>
        <div className='team-section'>
         <div className='team-container'>
          <input type="radio" name='dot' id="one" />
          <input type="radio" name='dot' id="two" />
           <h3>Meet our team</h3>
            <div className='main-card'>
              <div className='cards'>
                <div className='card'>
                  <div className='content'>
                    <div className='about-team-image'>
                      <img src='/images/team/3.png' alt="iimage1" />
                    </div>
                    <div className='details'>
                    <div className='employ-name'>Sohail Anjum</div>
                    <div className='employ-desination'>MERN developer</div>
                    </div>
                     <div className='media-icon'>
                    <a href='wwww.linkedin.com'><i className='fab fa-facebook'></i></a>
                    <a href='www.facebook.com'><i className='fab fa-instagram'></i></a>
                    <a href='www.twitter.com'><i className='fab fa-twitter'></i></a>
                     </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='content'>
                    <div className='about-team-image'>
                      <img src='/images/team/3.png' alt="iimage1" />
                    </div>
                    <div className='details'>
                    <div className='employ-name'>Macksy</div>
                    <div className='employ-desination'>Android</div>
                    </div>
                  <div className='media-icon'>
                    <a href='wwww.linkedin.com'><i className='fab fa-facebook'></i></a>
                    <a href='www.facebook.com'><i className='fab fa-instagram'></i></a>
                    <a href='www.twitter.com'><i className='fab fa-twitter'></i></a>
                  </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='content'>
                    <div className='about-team-image'>
                      <img src='/images/team/3.png' alt="iimage1" />
                    </div>
                    <div className='details'>
                    <div className='employ-name'>Sohail Anjum</div>
                    <div className='employ-desination'>MERN developer</div>
                    </div>
                  <div className='media-icon'>
                    <a href='wwww.linkedin.com'><i className='fab fa-facebook'></i></a>
                    <a href='www.facebook.com'><i className='fab fa-instagram'></i></a>
                    <a href='www.twitter.com'><i className='fab fa-twitter'></i></a>
                  </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='content'>
                    <div className='about-team-image'>
                      <img src='/images/team/3.png' alt="iimage1" />
                    </div>
                    <div className='details'>
                    <div className='employ-name'>Sohail Anjum</div>
                    <div className='employ-desination'>MERN developer</div>
                    </div>
                     <div className='media-icon'>
                    <a href='wwww.linkedin.com'><i className='fab fa-facebook'></i></a>
                    <a href='www.facebook.com'><i className='fab fa-instagram'></i></a>
                    <a href='www.twitter.com'><i className='fab fa-twitter'></i></a>
                     </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='content'>
                    <div className='about-team-image'>
                      <img src='/images/team/3.png' alt="iimage1" />
                    </div>
                    <div className='details'>
                    <div className='employ-name'>Sohail Anjum</div>
                    <div className='employ-desination'>MERN developer</div>
                    </div>
                  <div className='media-icon'>
                    <a href='wwww.linkedin.com'><i className='fab fa-facebook'></i></a>
                    <a href='www.facebook.com'><i className='fab fa-instagram'></i></a>
                    <a href='www.twitter.com'><i className='fab fa-twitter'></i></a>
                  </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='content'>
                    <div className='about-team-image'>
                      <img src='/images/team/3.png' alt="iimage1" />
                    </div>
                    <div className='details'>
                    <div className='employ-name'>Sohail Anjum</div>
                    <div className='employ-desination'>MERN developer</div>
                    </div>
                  <div className='media-icon'>
                    <a href='wwww.linkedin.com'><i className='fab fa-facebook'></i></a>
                    <a href='www.facebook.com'><i className='fab fa-instagram'></i></a>
                    <a href='www.twitter.com'><i className='fab fa-twitter'></i></a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='button'>
              <label for="one" className='one active'></label>
              <label for="two" className='two'></label>
            </div>
         </div>
        </div>
        <div className='testimain-section'>
            <Testimonial />
        </div>
      
       </section>
  )
}

export default Aboutdetails
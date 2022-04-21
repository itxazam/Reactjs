import "./Career.css"
import Header from "../header/Header";
import React from 'react'
import ContactApplication from "./ContactApplication.js";
import {HashLink} from "react-router-hash-link";

const Career = () => {
  return (
            <>
      <Header />
     <div className="container-fluid career-page">

        {/*Job head section*/}

        <div className="container career-head">
            <div className="career-head-heading">
                <h3>WHY JOIN ZOHRA JABIN?</h3>
            </div>
            <div className="career-head-paragraph">
                <p>
                We're on the hunt for talented individual to join our team at OptimusFox.
                Are you ready to take on new challenges, expand your skillset and work alongside
                a dynamic team of motivated and ambitious people? 
                Come join us at OptimusFox and open yourself up to some amazing career opportunities.
                </p>
            </div>
        </div> 


        {/*Jobs search section*/}

        <div className="container career-search">
            <div>
                 <label>Services</label><br />
                 <input type="text" placeholder="search Services" />
            </div>
            <div>
                 <label>Technology</label><br />
                 <input type="text" placeholder="search Technology" />
            </div>
            <div className="search-button">
                <a href="/job">Search Jobs</a>
            </div>
        </div> 


        {/*Android section*/}

        <div className="container-fluid career-jobs-details-black">
            <div className="container career-job-heading-button-black">
                <div className="career-job-main-heading-black">
                    <h3>Android Consultant</h3>
                </div>
                <div className="career-job-apply-link-black">
                    <HashLink to="/#employe">Apply</HashLink>
                </div>
            </div>
            <div className="container career-job-description-black">
                 <div className="career-job-description-heading-black">
                     <h4>Experience: 5+ Years</h4>
                 </div>
                 <div className="career-job-description-paragraph-black">
                    <p>We are looking for an Android developer responsible for the development 
                    and maintenance of applications aimed at a vast number of diverse Android 
                    devices. Your primary focus will be the development of Android applications
                    and their integration with back-end services. You will be working along-side
                    other engineers and developers working on different layers of the infrastructure.
                    Therefore, commitment to collaborative problem solving, sophisticated design, 
                    and creating quality products is essential. A person with 5+ years of experience.
                     </p>
                 </div>
            </div>
            <div className="container career-job-responsibilities-black">
                <div className="career-job-responsibilities-heading-black">
                <h4>Responsibilities</h4>
                </div>
                <div className="career-job-responsiblity-black">
                <ul>
                     <li>
                        <i class="fas fa-check-circle"></i>
                        <span>Translate designs and wireframes into high quality code</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Design, build, and maintain high performance, reusable, and reliable Java code</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Ensure the best possible performance, quality, and responsiveness of the application</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Identify and correct bottlenecks and fix bugs</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Help maintain code quality, organization, and automatization</span>
                    </li>
                 </ul>
                </div>
            </div>
            <div className="container career-job-responsibilities-black">
              <div className="career-job-responsibilities-heading-black">
                <h4>Skills</h4>
                </div>
                <div className="career-job-responsiblity-black">
                     <ul>
                     <li>
                        <i class="fas fa-check-circle"></i>
                        <span>Strong knowledge of Android SDK, different versions of Android, and how to deal with different screen sizes</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Familiarity with RESTful APIs to connect Android applications to back-end services</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Strong knowledge of Android UI design principles, patterns, and best practices</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Hands on experience in Kotlin</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Jetpck compose experience</span>
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <span>Unit testing</span>
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <span>Instrumental testing</span>
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <span>UI testing</span>
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <span>Experience with offline storage, threading, and performance tuning</span>
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <span>Ability to design applications around natural user interfaces, such as “touch”</span>
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <span>Familiarity with the use of additional sensors, such as gyroscopes and accelerometers</span>
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <span>Knowledge of the open-source Android ecosystem and the libraries available for common tasks</span>
                    </li>
                    <li>
                         <i class="fas fa-check-circle"></i>
                        <span>Ability to understand business requirements and translate them into technical requirements</span>
                    </li>
                    <li>
                         <i class="fas fa-check-circle"></i>
                        <span>Familiarity with cloud message APIs and push notifications</span>
                    </li>
                    <li>
                         <i class="fas fa-check-circle"></i>
                        <span>A knack for benchmarking and optimization</span>
                    </li>
                    <li>
                         <i class="fas fa-check-circle"></i>
                        <span>Understanding of Google’s Android design principles and interface guidelines</span>
                    </li>
                    <li>
                         <i class="fas fa-check-circle"></i>
                        <span>Proficient understanding of code versioning tools, such as Git</span>
                    </li>
                    <li>
                         <i class="fas fa-check-circle"></i>
                        <span>Familiarity with continuous integration</span>
                    </li>
                   
                     </ul>
              </div>
            </div>
        </div>

        {/*Mern section*/}

        <div className="container-fluid career-jobs-details-white">
            <div className="container career-job-heading-button-white">
                <div className="career-job-main-heading-white">
                    <h3>MERN Stack Intern</h3>
                </div>
                <div className="career-job-apply-link-white">
                    <a href="/jobapplyform">Apply</a>
                </div>
            </div>
            <div className="container career-job-description-white">
                 <div className="career-job-description-heading-white">
                     <h4>Experience: 6+ Month to 2+ Years</h4>
                 </div>
                 <div className="career-job-description-paragraph-white">
                    <p>We’re on the lookout for a skilled MERN Stack Interns to learn and grow with company 
                    - they will be working on multiple products based on skills and will be supervised accordingly.
                     </p>
                 </div>
            </div>
            <div className="container career-job-responsibilities-white">
                <div className="career-job-responsibilities-heading-white">
                <h4>Responsibilities</h4>
                </div>
                <div className="career-job-responsiblity-white">
                <ul>
                     <li>
                        <i class="fas fa-check-circle"></i>
                        <span>MERN stack developer should have the ability to translate Wireframes and PSD Designs into functional web apps.</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Binding of UI elements to JavaScript object models</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Creating RESTful services with Node.js</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>MERN stack developer must have proven experience in front & back-end development</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Work in a cross-functional team to deliver a complete user experience</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Be responsive to change requests and feature requests</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>MERN Stack Intern must have the ability to wear many hats and learn new technologies quickly</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>MERN stack developer should know Git Repository and Jira.</span>
                    </li>
                 </ul>
                </div>
            </div>
            <div className="container career-job-responsibilities-white">
              <div className="career-job-responsibilities-heading-white">
                <h4>Skills</h4>
                </div>
                <div className="career-job-responsiblity-white">
                     <ul>
                     <li>
                        <i class="fas fa-check-circle"></i>
                        <span>Strong knowledge of development how to deal with different screen sizes</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Familiarity with RESTful APIs to connect Android applications to back-end services</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Reactjs Nodejs developer must know MongoDB, Express, Node.js, & React.</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Create Unit and Integration tests to ensure the quality of code</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Write code that is cross-platform and cross-device compatible</span>
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <span>Understanding & proficiency in REST APIs</span>
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <span>Integration of data storage solutions [RDBMS, NoSQL DB]</span>
                    </li>
                    
                   
                     </ul>
              </div>
            </div>
        </div>

         {/*Android section*/}

         <div className="container-fluid career-jobs-details-black">
            <div className="container career-job-heading-button-black">
                <div className="career-job-main-heading-black">
                    <h3>Android Consultant</h3>
                </div>
                <div className="career-job-apply-link-black">
                    <a href="/jobapplyform">Apply</a>
                </div>
            </div>
            <div className="container career-job-description-black">
                 <div className="career-job-description-heading-black">
                     <h4>Experience: 5+ Years</h4>
                 </div>
                 <div className="career-job-description-paragraph-black">
                    <p>We are looking for an Android developer responsible for the development 
                    and maintenance of applications aimed at a vast number of diverse Android 
                    devices. Your primary focus will be the development of Android applications
                    and their integration with back-end services. You will be working along-side
                    other engineers and developers working on different layers of the infrastructure.
                    Therefore, commitment to collaborative problem solving, sophisticated design, 
                    and creating quality products is essential. A person with 5+ years of experience.
                     </p>
                 </div>
            </div>
            <div className="container career-job-responsibilities-black">
                <div className="career-job-responsibilities-heading-black">
                <h4>Responsibilities</h4>
                </div>
                <div className="career-job-responsiblity-black">
                <ul>
                     <li>
                        <i class="fas fa-check-circle"></i>
                        <span>Translate designs and wireframes into high quality code</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Design, build, and maintain high performance, reusable, and reliable Java code</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Ensure the best possible performance, quality, and responsiveness of the application</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Identify and correct bottlenecks and fix bugs</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Help maintain code quality, organization, and automatization</span>
                    </li>
                 </ul>
                </div>
            </div>
            <div className="container career-job-responsibilities-black">
              <div className="career-job-responsibilities-heading-black">
                <h4>Skills</h4>
                </div>
                <div className="career-job-responsiblity-black">
                     <ul>
                     <li>
                        <i class="fas fa-check-circle"></i>
                        <span>Strong knowledge of Android SDK, different versions of Android, and how to deal with different screen sizes</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Familiarity with RESTful APIs to connect Android applications to back-end services</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Strong knowledge of Android UI design principles, patterns, and best practices</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Hands on experience in Kotlin</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Jetpck compose experience</span>
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <span>Unit testing</span>
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <span>Instrumental testing</span>
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <span>UI testing</span>
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <span>Experience with offline storage, threading, and performance tuning</span>
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <span>Ability to design applications around natural user interfaces, such as “touch”</span>
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <span>Familiarity with the use of additional sensors, such as gyroscopes and accelerometers</span>
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <span>Knowledge of the open-source Android ecosystem and the libraries available for common tasks</span>
                    </li>
                    <li>
                         <i class="fas fa-check-circle"></i>
                        <span>Ability to understand business requirements and translate them into technical requirements</span>
                    </li>
                    <li>
                         <i class="fas fa-check-circle"></i>
                        <span>Familiarity with cloud message APIs and push notifications</span>
                    </li>
                    <li>
                         <i class="fas fa-check-circle"></i>
                        <span>A knack for benchmarking and optimization</span>
                    </li>
                    <li>
                         <i class="fas fa-check-circle"></i>
                        <span>Understanding of Google’s Android design principles and interface guidelines</span>
                    </li>
                    <li>
                         <i class="fas fa-check-circle"></i>
                        <span>Proficient understanding of code versioning tools, such as Git</span>
                    </li>
                    <li>
                         <i class="fas fa-check-circle"></i>
                        <span>Familiarity with continuous integration</span>
                    </li>
                   
                     </ul>
              </div>
            </div>
        </div>

         {/*Mern section*/}

         <div className="container-fluid career-jobs-details-white">
            <div className="container career-job-heading-button-white">
                <div className="career-job-main-heading-white">
                    <h3>MERN Stack Intern</h3>
                </div>
                <div className="career-job-apply-link-white">
                    <a href="/jobapplyform">Apply</a>
                </div>
            </div>
            <div className="container career-job-description-white">
                 <div className="career-job-description-heading-white">
                     <h4>Experience: 6+ Month to 2+ Years</h4>
                 </div>
                 <div className="career-job-description-paragraph-white">
                    <p>We’re on the lookout for a skilled MERN Stack Interns to learn and grow with company 
                    - they will be working on multiple products based on skills and will be supervised accordingly.
                     </p>
                 </div>
            </div>
            <div className="container career-job-responsibilities-white">
                <div className="career-job-responsibilities-heading-white">
                <h4>Responsibilities</h4>
                </div>
                <div className="career-job-responsiblity-white">
                <ul>
                     <li>
                        <i class="fas fa-check-circle"></i>
                        <span>MERN stack developer should have the ability to translate Wireframes and PSD Designs into functional web apps.</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Binding of UI elements to JavaScript object models</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Creating RESTful services with Node.js</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>MERN stack developer must have proven experience in front & back-end development</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Work in a cross-functional team to deliver a complete user experience</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Be responsive to change requests and feature requests</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>MERN Stack Intern must have the ability to wear many hats and learn new technologies quickly</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>MERN stack developer should know Git Repository and Jira.</span>
                    </li>
                 </ul>
                </div>
            </div>
            <div className="container career-job-responsibilities-white">
              <div className="career-job-responsibilities-heading-white">
                <h4>Skills</h4>
                </div>
                <div className="career-job-responsiblity-white">
                     <ul>
                     <li>
                        <i class="fas fa-check-circle"></i>
                        <span>Strong knowledge of development how to deal with different screen sizes</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Familiarity with RESTful APIs to connect Android applications to back-end services</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Reactjs Nodejs developer must know MongoDB, Express, Node.js, & React.</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Create Unit and Integration tests to ensure the quality of code</span>
                    </li>
                    <li>
                       <i class="fas fa-check-circle"></i>
                       <span>Write code that is cross-platform and cross-device compatible</span>
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <span>Understanding & proficiency in REST APIs</span>
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <span>Integration of data storage solutions [RDBMS, NoSQL DB]</span>
                    </li>
                    
                   
                     </ul>
              </div>
            </div>
        </div>
     </div>
     <div id="employecontact">
          {/*Contact Form */}
        <ContactApplication />
       
     </div>
    </>
  )
}

export default Career
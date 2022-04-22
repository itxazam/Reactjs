import React from 'react'
import Services from "./serviceData";
import {Tab, Tabs} from "react-bootstrap";
import {HomeService, HomeIndustry} from "../servicesComponents/serviceComponents";
import "./Servicedetails.css"
const Servicedetails = () => {
  return (
    
    <div className="service-section" id="services">
    <h1>WHAT WE OFFER</h1> 
  <Tabs defaultActiveKey="services" className="tab">
     <Tab className="tablinks" eventKey="services" title="services">
        <div className="container rows">
         <div className="tabcontent" id="London">           
          <div className="row">
            {Services.services.map((service) => (
              <HomeService key={service.id} service={service} />
            )) }
          </div>
         </div>
       </div>
     </Tab>
     <Tab className="tablinks" eventKey="technology" title="technology">
       <div className="container rows">
        <div className="tabcontent" id="London">
          <div className="row">
           {Services.Technology.map((technology) =>(
            <div className="technology-center col-lg-4 col-md-4 col-sm-6" key={technology.id}>
             <div className="sectionBox">
               <div className="sectionImage">
              <img src={technology.image} alt={technology.title} />
            </div>
            <div className="sectionWords">
              <h4>{technology.name}</h4>
              <ul>
              {technology.techs.map((oneTech) =>(
                <li key={oneTech.id}>{oneTech.name}</li>
              ))}
              </ul>
            </div>
          </div>
        </div> 
      ))}
      </div>
        </div>
      </div>
     </Tab>
     <Tab className="tablinks" eventKey="industry" title="industry">
     <div class="container rows">
      <div class="tabcontent" id="London">
       <div class="row">
          {Services.Industry.map((industry) => (
            <HomeIndustry key={industry.id} industry={industry} />
          ))}
      </div>
     </div>
    </div>
     </Tab>
  </Tabs>
   </div>

  )
}

export default Servicedetails
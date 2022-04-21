import React from 'react'

import Header from '../components/header/Header';
import "./Home.css";



import AppsData from "../data/AppData";
import WebsiteData from "../data/WebsiteData.js";
import RecentApp from '../components/recentsComponents/RecentApp';
import RecentWeb from '../components/recentsComponents/RecentWeb';
import ContactForm from '../components/contact/ContactForm';
import Aboutdetails from '../components/Aboutdetails/Aboutdetails';
import "./Home.css"
import Servicedetails from '../components/servicedetails/Servicedetails';

const HomeScreen = (props) => {

  return (
    <>
        <Header bgColor="black" />
        
       <section className='home'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col home-title'>
              <p>Take your business to the next level.</p>
              <h1>We Are a Zohra Jabin
              services & solutions
              Provider</h1>
              <p>As a Solution Provider with a track record of expertise under Our belt, we
              at Zohra Jabin are committed to Delivering high-quality results to Our
              clients.</p>
            </div>
            <div className='col home_image'>
              <img src='/images/home_image.png' className='img-fluid' alt='home_image' />
            </div>
          </div>
        </div>
       </section>  

      <Servicedetails />

       

       <Aboutdetails />

        <div id="contact">
        <ContactForm />
        </div>
      

   {/*}
    <div className="container" id="blogs">
      <div className="article">
        <h2>Recent Work</h2>
        <hr />
        <div className="rows">
        {WebsiteData.websites.slice(0, 2).map((website) => (
          <RecentWeb key={website.id} website={website} />
        ))}

        {AppsData.apps.slice(0, 2).map((app) => (
          <RecentApp key={app.id} website={app} />
        ))}

        </div>
      </div>
    </div>
    
 */}
    </>
  )
}

export default HomeScreen
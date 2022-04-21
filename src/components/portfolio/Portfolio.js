import React from 'react'
import Header from '../header/Header'
import ContactForm from '../contact/ContactForm'

import "./Portfolio.css";


const Portfolio = () => {

  return (
      <>
    <Header bgColor="black" />
    <div className="container-fluid portfolio">
      <div className='container portfolio-main-head'>
         <div className='porfolio-heading'>
            <h3>OUR SUCCESSFULL PROJECTS</h3>
         <div/>
            <div className='portfolio-paragraph'>

            <p>Walk through some of our gripping work to get an idea about wat we dom
            and why we are the "Talk of the Town!"Our creative team is proud to pull off some amasing projects for 
            multiple industries with our unparalleled standard and resources..
            </p>
            </div>
            <div className='portfolio-quote'>
             <button>Get a Quote</button>
            </div>
            <div className='portfolio-developing-buttons'>
               <div className='developing-button'>
                 <a href="/link">Show All</a>
               </div>
               <div className='developing-button'>
                 <a href="/link">Branding</a>
               </div>
               <div className='developing-button'>
                 <a href="/link">UI/UX</a>
               </div>
               <div className='developing-button'>
                 <a href="/link">Mobile App</a>
               </div>
               <div className='developing-button'>
                 <a href="/link">Seftware Development</a>
               </div>
               <div className='developing-button'>
                 <a href="/link">Video Animation</a>
               </div>
               <div className='developing-button'>
                 <a href="/link">Webistes</a>
               </div>
            </div>
         </div>
        </div>

        <div className='container project-details'>
          <div className='webproject'>
             <div className='project-description'>
                <p>Hello! There are some website that we developed and most popular in public due to designing, techinical and time speed responsing</p>
             </div>
             <div className='project-images'>
             <img src="/images/portfolio/IMPC.webp" alt="webimage" />
             </div>
             <div className='project-images'>
             <img src="/images/portfolio/impc-header.png" alt="webimage" />
             </div>
             <div className='project-images'>
               <img src="/images/portfolio/impc-footer.png" alt="webimage" />
             </div>
          </div>
        </div>

        <div className='container project-details'>
          <div className='webproject'>
             <div className='project-description'>
                <p>Hello! There are some website that we developed and most popular in public due to designing, techinical and time speed responsing</p>
             </div>
             <div className='project-images'>
             <img src="/images/portfolio/Zest-Complaince.webp" alt="webimage" />
             </div>
             <div className='project-images'>
             <img src="/images/portfolio/zest-header.png" alt="webimage" />
             </div>
             <div className='project-images'>
               <img src="/images/portfolio/zest-service.png" alt="webimage" />
             </div>
          </div>
        </div>

        <div className='container project-details'>
          <div className='webproject'>
             <div className='project-description'>
                <p>Hello! There are some website that we developed and most popular in public due to designing, techinical and time speed responsing</p>
             </div>
             <div className='project-images'>
             <img src="/images/portfolio/william-ross.webp" alt="webimage" />
             </div>
             <div className='project-images'>
             <img src="/images/portfolio/william-ross.png" alt="webimage" />
             </div>
             <div className='project-images'>
               <img src="/images/portfolio/william-ross-footer.png" alt="webimage" />
             </div>
          </div>
        </div>

        <div className='container project-details'>
          <div className='webproject'>
             <div className='project-description'>
                <p>Hello! There are some website that we developed and most popular in public due to designing, techinical and time speed responsing</p>
             </div>
             <div className='project-images'>
             <img src="/images/portfolio/blackbooking-1.webp" alt="webimage" />
             </div>
             <div className='project-images'>
             <img src="/images/portfolio/blackbookiing-header.png" alt="webimage" />
             </div>
             <div className='project-images'>
               <img src="/images/portfolio/blackbooking-footer.png" alt="webimage" />
             </div>
          </div>
        </div>  

        <div className='container project-details'>
          <div className='webproject'>
             <div className='project-description'>
                <p>Hello! There are some website that we developed and most popular in public due to designing, techinical and time speed responsing</p>
             </div>
             <div className='project-images'>
             <img src="/images/portfolio/Techbeon.webp" alt="webimage" />
             </div>
             <div className='project-images'>
             <img src="/images/portfolio/techbeon_header.png" alt="webimage" />
             </div>
             <div className='project-images'>
               <img src="/images/portfolio/techbeon_footer.png" alt="webimage" />
             </div>
          </div>
        </div> 

        <div className='container project-details'>
          <div className='webproject'>
             <div className='project-description'>
                <p>Hello! There are some website that we developed and most popular in public due to designing, techinical and time speed responsing</p>
             </div>
             <div className='project-images'>
             <img src="/images/portfolio/FX-GULF-Trading.webp" alt="webimage" />
             </div>
             <div className='project-images'>
             <img src="/images/portfolio/gulftrading-header.png" alt="webimage" />
             </div>
             <div className='project-images'>
               <img src="/images/portfolio/gulftrading-footer.png" alt="webimage" />
             </div>
          </div>
        </div> 

    </div>
   
    <ContactForm />
    </>
  )
}

export default Portfolio
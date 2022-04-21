
import React from 'react'
import {HashLink} from "react-router-hash-link";
import { Link } from 'react-router-dom';
import "./Footer.css"
const Footer = () => {
  return (
<footer>
  <div className='container footer-container'>
    <div className='footer-content'>
           <div className=' footer-about'>
              <HashLink to="/#home"><img src="/images/ZJ-Logo.png" className='logo' alt="logo_image" /></HashLink>
              <p>At Zohra Jabin, you can digital transform
              your business with our top-notch solutions.
              We offer Web and Mobile  App development
              solution to reinvent</p>
              <div className='footer-heading'>
              <h4 >FOLLOW US</h4>
              </div>
              <ul className='footer-social'>
                <li>
                <a href="https://www.linkedin.com"><i class="fab fa-linkedin-in"></i></a>
                </li>
                <li>
                  <a href='https://www.google.com'><i class="fab fa-google"></i></a>
                </li>
                <li>
                <a href="https://www.facebook.com"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                <a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a>
                </li>
                <li>
                <a href="https://www.instagram.com"><i class="fab fa-twitter"></i></a>
                </li>
              </ul>
          </div>
          <div className='footer-service'>
            <div className='footer-heading'>
            <h4>OUR SERVICES</h4>
            </div>
         
          <ul className='footer-service'>
            <li>
              <Link to="#">Software Development</Link>
            </li>
            <li>
              <Link to="/website">Web Development</Link>
            </li>
            <li>
              <Link to="/app">Mobile App Development</Link>
            </li>
            <li>
              <Link to='/digitalmarketing'>Digital Marketing</Link>
            </li>
            <li>
              <Link to="/blockchaindevelopment">BlockChain Development</Link>
            </li>
            <li>
              <Link to="/designing">Designing</Link>
            </li>
          </ul>
          </div>
          <div className='footer-quicklinks'>
            <div className='footer-heading'>
            <h4 >QUICK LINKS</h4>
            </div>
           
            <ul className='footer-links'>
              <li>
                <HashLink to="/#about">About Us</HashLink>
              </li>
              <li>
                <HashLink to="/#services">Services</HashLink>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <HashLink to="/#contact">Contact Us</HashLink>
              </li>
              <li>
                <HashLink to="#privacypolicy">Privacy & Policy</HashLink>
              </li>
              <li>
                <HashLink to="#termcondition">Terms & Conditions</HashLink>
              </li>
            </ul>
          </div>
          <div className='footer-contact'>
           <div className="footer-heading">
           <h4 >CONTACTS</h4>
           </div>
   
            <ul className='footer-contact'>
              <li>
              <i class="fas fa-phone-alt"></i>
              <span>+92123456789</span>
              </li>
              <li>
              <i class="fas fa-envelope-open-text"></i>
              <span>support@example.com</span>
              </li>
              <li>
              <i class="fas fa-map-marker-alt"></i>
              <span>Nawab Town Lahore</span>
              </li>
              <li>
              <i class="fas fa-map-marker-alt"></i>
              <span>California USA</span>
              </li>
            </ul>
          </div>

    </div>
    <div className='footer-company-description'>
    <p>Zohra Jabin IT Sourcing 2021 &copy; All Right Reseved.</p>
    </div>
  </div>
</footer>
  )
}
export default Footer;


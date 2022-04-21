import React from 'react'
import Header from '../components/header/Header'

const WebsiteScreen = (props) => {
  return (
    <>
    <Header />
    <div className="banner">
        <div className='overlay'>
            <div className='container'>
                <h1>Recent Websites</h1>
                <button>
                    <a href="/">Home</a>
                </button>
            </div>
        </div>
    </div>
    <div className="container blogcontainer">
        <div className="row">
            <div className="blogBox col-lg-4 col-md-6 col-sm-6">
                <div className='blogBox_pic'>
                    <img src="/images/webdevelopmentbanner.jpg" alt="project_image" />
                    <div className="blogLebal">
                        <a href="/details">Project Details</a>
                    </div>
                </div>
                <div className="blog_text">
                    <ul>
                        <li>
                            <i class="far fa-calendar"></i>12 March 2021
                        </li>
                    </ul>
                    <h5>
                        <a href="/travel">Travel App</a>
                    </h5>
                    <p>
                    I enjoy creating things that live on the internet, where
                    that be website, applications, or anything in between...    
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default WebsiteScreen
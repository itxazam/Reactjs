import "./Testimonail.css";
import Slider from "react-slick"
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import { ArrowForwardIos, ArrowBackIos } from "@material-ui/icons";


const PreviousBtn = (props) => {
    console.log(props);
    const {className, onClick }= props;
    return(
        <div className={className} onClick={onClick}>
            <ArrowBackIos style={{ color:"black", fontSize:"40px", marginRight:90}} />
        </div>
    );
};
const NextBtn = (props) => {
    console.log(props);
    const {className, onClick }= props;
    return(
        <div className={className} onClick={onClick}>
            <ArrowForwardIos style={{ color:"black", fontSize:"40px", marginLeft:90}} />
        </div>
    );
};

const Testimonial = () => {
  return (
    <div className="testimonial-slider" style={{display: "flex", justifyContent: "center", marginTop: 50 }}>
    <div className="testimonial-main" style={{width: "65%", color:"black", textAlign:"center", fontFamily:"sans-serif"}}>
        <h3>TESTIMONIALS</h3>
        <Slider
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
         dots>
            <Card img="/images/1.jpg"  />
            <Card img="/images/1.jpg"  />
            <Card img="/images/1.jpg"  />
        </Slider>
    </div>
    </div>
  )
};

const Card = ({img}) => {
    return(
        <div className="container">
            <div className="row testimonial-bg-image">
                <div className="col-8 testimonial-left" style={{textAlign:"left"}}>
                    <a href="#" className="testimonial-reviews-link"
                    style={{}}>Reviews</a>
                    <p>We stratigise and build creative launh
                    and account management strategies Testimonail
                    win multiple best seller badges</p>
                    <a href="#" className="testimonial-project-link">Project</a>
                </div>
                <div className="col-4 testimonial-right" style={{ display:"flex",
                 flexDirection: "column"}}>
                     <p>
                         Hello! Guyes I good experience with IT Sourcing zohrajabin
                         I build many websites and application that fullfilled 
                         to my rquirements and completed on time.
                     </p>
                   <div style={{ display: "flex"    }}>
                   <Avatar
                    imgProps={{ style: { borderRadius: "50%"}}}
                    src={img}
                    style={{
                        width: 80,
                        height: 80,
                        border: "1px solid lightgray",
                        padding: 7,
                        marginLeft:20
                    }}
                     />   <p Style={{ fontStyle:"italic",}}>
                     <span style={{ fontWeight: 500, color: "goldenrod"}}>POUL WILSON</span> Media Analyst
                     </p>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
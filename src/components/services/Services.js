import React from 'react';
import {Tab, Tabs} from "react-bootstrap";
import {HomeService, HomeIndustry}from '../servicesComponents/serviceComponents';
import Header from '../header/Header'
import "./Services.css"
import Servicedetails from '../servicedetails/Servicedetails';
const Services = () => {
  return (
    <>
        <Header />

        <Servicedetails />
    </>
  )
}

export default Services
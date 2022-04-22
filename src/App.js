import React from "react";
import Footer from "./components/footer/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom"
import HomeScreen from "./screens/HomeScreen";

import AppScreen from "./screens/AppScreen";
import WebsiteScreen from "./screens/WebsiteScreen";
import Services from "./components/services/Services"
import Aboutus from "./components/aboutus/Aboutus";
import Portfolio from "./components/portfolio/Portfolio";
import Career from "./components/career/Career";
import Contactus from "./components/contactus/Contactus"
import "./App.css"
import "./index.css"
function App () {
  return (
    <Router>
      <div className="App">
       <main>
       <Route exact={true} path="/"  component={HomeScreen} />
        <Route  path="/home"  component={HomeScreen} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={Aboutus} />
        <Route  path="/app"  component={AppScreen} />
        <Route  path="/website"  component={WebsiteScreen} />
        <Route  path="/portfolio" component={Portfolio} />
        <Route  path="/career" component={Career} />
        <Route  path="/contact" component={Contactus} />
        </main>
      <Footer /> 
     </div>
    </Router>
  )
}
export default App;

import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import axios from "axios";

import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import TechCrunch from "./components/TechCrunch.jsx";
import Business from "./components/Business.jsx";
import Wallstreet from "./components/Wallstreet.jsx";
import Apple from "./components/Apple.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";


function App() {

  const [ techCrunchData, setTechCrunchData ] = useState([]);
  const [ appleData, setAppleData ] = useState([]);
  const [ businessData, setBusinessData ] = useState([]);
  const [ wallStreetData, setWallStreetData ] = useState([]);


  useEffect(() => {
    if(techCrunchData.length === 0) {
      axios.get("http://localhost:4000/techCrunch")
      .then((res) => {
        setTechCrunchData(res.data);
        console.log("Tech Crunch GET:: ", res.data);
      }).catch((err) => {
        console.log(err);
      })
    }
    
  }, [techCrunchData])

  useEffect(() => {
    if(appleData.length === 0) {
      axios.get("http://localhost:4000/apple")
      .then((res) => {
        setAppleData(res.data);
        console.log("APPLE GET:: ", res.data);
      }).catch((err) => {
        console.log(err);
      })
    }
  }, [appleData])

  useEffect(() => {
    if(businessData.length === 0) {
      axios.get("http://localhost:4000/business")
      .then((res) => {
        setBusinessData(res.data);
        console.log("BUSINESS GET:: ", res.data);
      }).catch((err) => {
        console.log(err);
      })
    }
  }, [businessData])

  useEffect(() => {
    if(wallStreetData.length === 0) {
      axios.get("http://localhost:4000/wallStreet")
      .then((res) => {
        setWallStreetData(res.data);
        console.log("WALL STREET GET:: ", res.data);
      }).catch((err) => {
        console.log(err);
      })
    }
  }, [wallStreetData])

  return (
    <Router>
        <NavBar />
          <Switch>

            <Route exact path="/"><Home /></Route>

            <Route path="/techcrunch">
              <TechCrunch data={techCrunchData} />
            </Route>

            <Route path="/business">
              <Business data={businessData} />
            </Route>

            <Route path="/wallstreet">
              <Wallstreet data={wallStreetData} />
            </Route>

            <Route path="/apple">
              <Apple data={appleData} />
            </Route>

            <Route path="/about"><About /></Route>
            <Route path="/contact"><Contact /></Route>

            
          </Switch>
        <Footer />
    </Router>
  );
}

export default App;

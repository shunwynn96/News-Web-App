import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import axios from "axios";

import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Science from "./components/Science.jsx";
import Sports from "./components/Sports.jsx";
import Technology from "./components/Technology.jsx";
import Business from "./components/Business.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";


function App() {

  const [ scienceData, setScienceData ] = useState([]);
  const [ technologyData, setTechnologyData ] = useState([]);
  const [ businessData, setBusinessData ] = useState([]);
  const [ sportsData, setSportsData ] = useState([]);


  useEffect(() => {
      axios.get("http://localhost:4000/science-api")
      .then((res) => {
        setScienceData(res.data);
      }).catch((err) => {
        console.log(err);
      })
  }, [])

  useEffect(() => {
      axios.get("http://localhost:4000/sports-api")
      .then((res) => {
        setSportsData(res.data);
      }).catch((err) => {
        console.log(err);
      })
    
  }, [])

  useEffect(() => {
   
      axios.get("http://localhost:4000/business-api")
      .then((res) => {
        setBusinessData(res.data);
      }).catch((err) => {
        console.log(err);
      })
    
  }, [])

  useEffect(() => {
    
      axios.get("http://localhost:4000/technology-api")
      .then((res) => {
        setTechnologyData(res.data);
      }).catch((err) => {
        console.log(err);
      })
    
  }, [])

  return (
    <Router>
        <NavBar />
          <Switch>

            <Route exact path="/"><Home /></Route>

            <Route path="/science">
              <Science data={scienceData} />
            </Route>

            <Route path="/business">
              <Business data={businessData} />
            </Route>

            <Route path="/technology">
              <Technology data={technologyData} />
            </Route>

            <Route path="/sports">
              <Sports data={sportsData} />
            </Route>

            <Route path="/about"><About /></Route>
            <Route path="/contact"><Contact /></Route>
            

            
          </Switch>
        <Footer />
    </Router>
  );
}

export default App;

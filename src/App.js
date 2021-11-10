import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import { Switch,Route } from "react-router-dom";
import Services from "./components/Services";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Model from "./components/Model";
import Team from "./components/Team";

const App=()=> {
  return (
    <>
    <Nav />
    {/* <Banner />
    <Services />
    <About />
    <Contact /> */}
    <Switch>
      {/* <Banner />
      <Nav />
      <Services />
      <About />
      <Prices />
      <Contact /> */}
      {/* <Route exact path='/' component={Banner}/> */}
      
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/prices' component={Prices}/> 
      <Route exact path='/Gallery' component={Gallery}/> 
      <Route exact path='/Model' component={Model}/> 
      <Route exact path='/Team' component={Team}/> 
      {/* <Route exact path='/contact' component={Contact}/> */}
      <Route exact path='/services' component={Services}/>
      </Switch>
      <Contact />
    </>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import './App.css';

import profile from "./images/kitel.jpg";
import crizel_resume from "./files/crizell_resume.pdf";
import crizel_portfolio from "./files/crizell_portfolio.pdf";

import v1 from "./images/art1.JPG";
import v2 from "./images/art2.JPG";

const pdfStyle = {
  minHeight:'100vh',
  width:'100%'
}
const Resume = () => {
  return <div className="">  <iframe src={crizel_resume} style={pdfStyle} ></iframe></div>
}

const Portfolio = () => {
  return <div className="">  <iframe src={crizel_portfolio}  style={pdfStyle} ></iframe></div>
}

const VectorArts = () => {
  return <div className="vectors"> <img className='art' src={v1} /> <img className='art' src={v2} /></div>
}

function App() {
  return (
    <div className="App">
    <Router>
      <div className="banner">
      <img className='myprofile' src={ profile }  />
      <div className="title">Crizell Ann Chavez Famorcan</div>
      </div>
      
      <div className="nav">
        <ul>
          <li><NavLink to='/' exact>Resume</NavLink></li>
          <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
          <li><NavLink to="/vectorarts">Vector Arts</NavLink></li>
        </ul>
      </div>

      <div className="content-viewer">
       <Route path="/" exact component={Resume} />
        <Route path="/portfolio/" component={Portfolio} />
        <Route path="/vectorarts/" component={VectorArts} />
      </div>
      </Router>
    </div>
  );
}

export default App;

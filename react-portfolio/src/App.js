import React, {compnents} from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from "./compnents/Header";
import Footer from "./compnents/Footer";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import './App.js';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="my-react-portfolio/" element={<AboutMe/>}/>
        <Route exact path="/my-react-portfolio/portfolio" element={<Portfolio/>}/>
        <Route exact path="/my-react-portfolio/contact" element={<Contact/>}/>
        <Route exact path="/my-react-portfolio/resume" element={<Resume/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

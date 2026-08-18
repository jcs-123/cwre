import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavbarComponent from './layout/NavbarComponent'
import FooterComponent from './layout/FooterComponent'
import Home from './pages/Home'
import About from './pages/About'
import PlusOnePlusTwo from './pages/PlusOnePlusTwo'
import College from './pages/College'
import Publications from './pages/Publications'
import Reports from './pages/Reports'
import Services from './pages/Services'
import Accreditation from './pages/Accreditation'
import Resources from './pages/Resources'
import Feedback from './pages/Feedback'
import ResourceDetail from './pages/ResourceDetail';
import Competition from './pages/competition';

import ScrollToTop from './pages/ScrollToTop';  // 👈 import
import Workshop from './pages/Workshop';

function App() {
  return (
    <Router>
      <ScrollToTop />   {/* 👈 this resets scroll on every page change */}
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plus-one-plus-two" element={<PlusOnePlusTwo />} />
        <Route path="/college" element={<College />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/programmes-and-reports" element={<Reports />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/services" element={<Services />} />
        <Route path="/accreditation" element={<Accreditation />} />
        <Route path="/accrediation" element={<Accreditation />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/resource/:id" element={<ResourceDetail />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/workshop" element={<Workshop />} />
      </Routes>
      <FooterComponent />
    </Router>
  )
}

export default App;

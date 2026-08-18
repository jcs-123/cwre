import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import './Home.css';
import heroBg from '../assets/hero_water_drop.png';
import soilImage from '../assets/soil.jpg';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMicroscope, FaHandsWash, FaUsers, FaTint } from 'react-icons/fa';

import waterImg from '../assets/water.jpg';
import joseKonikkara from '../assets/jose_konikkara.jpg';
import davidNettikadan from '../assets/david_nettikadan.jpg';
import joseKannampuzha from '../assets/jose_kannampuzha.jpg';
import sojanLal from '../assets/Sojan_lal.jpg';
import joseTherattil from '../assets/jose_therattil.jpg';
import staff1 from '../assets/staff1.jpg';
import staff2 from '../assets/staff2.jpg';

// Faculty / Coordinator Images arranged by name
import leeshmaImg from '../assets/media_1786701451225.jpg';
import bindhuImg from '../assets/media_1786700270225.jpg';
import jeffyImg from '../assets/media_1786701499526.jpg';
import ninuImg from '../assets/media_1786701452243.jpg';
import geethuImg from '../assets/media_1786700271076.jpg';
import jithinJoyImg from '../assets/media_1786701857556.jpg';
import drJithinKJoseImg from '../assets/media_1786701564144.jpg';
import sibinImg from '../assets/media_1786700142896.jpg';
import annaImg from '../assets/media_1786700271060.jpg';
import frAjeeshImg from '../assets/media_1786702106166.jpg';
import drXaviourImg from '../assets/media_1786702116404.jpg';
import drAlwynImg from '../assets/media_1786700270262.jpg';
import sibinJohnyImg from '../assets/media_1786702289359.jpg';
import './About.css';

// Core Committee Data
const homeCoreCommittee = [
  { img: joseKonikkara, name: "Msgr. Jose Konikkara", role: "Patron & Manager" },
  { img: davidNettikadan, name: "Fr. David Nettikadan", role: "Executive Manager" },
  { img: joseKannampuzha, name: "Fr Dr Jose Kannampuzha", role: "Director (Academics)" },
  { img: sojanLal, name: "Dr. P. Sojan Lal", role: "Principal" },
  { img: drXaviourImg, name: "Dr. V. M. Xaviour", role: "Core Committee Member" },
  { img: frAjeeshImg, name: "Fr. Ajeesh Perinchery", role: "Core Committee Member" },
  { img: drAlwynImg, name: "Dr. Alwyn Varghese", role: "Head of Department (Civil)" }
];

const homeLeadCoordinator = [
  { img: staff2, name: "Professor Cyriac MG", role: "Chief Coordinator, CWRE" }
];

const homeAsstCoordinators = [
  { img: annaImg, name: "Anna Joseph", role: "Asst. Coordinator (Civil Engineering)" },
  { img: sibinImg, name: "Dr. Thomas", role: "Asst. Coordinator (Non Civil)" }
];

const homeDeptCoordinators = [
  { img: leeshmaImg, dept: "AD", name: "LEESHMA", role: "Department Coordinator (AD)" },
  { img: bindhuImg, dept: "BSH", name: "BINDHU K S", role: "Department Coordinator (BSH)" },
  { img: jeffyImg, dept: "CE", name: "JEFFY JOHNY", role: "Department Coordinator (CE)" },
  { img: ninuImg, dept: "CSE", name: "NINU FRANSIS", role: "Department Coordinator (CSE)" },
  { img: geethuImg, dept: "CY", name: "DR. GEETHU MARY GEORGE", role: "Department Coordinator (CY)" },
  { img: jithinJoyImg, dept: "ECE", name: "JITHIN JOY", role: "Department Coordinator (ECE)" },
  { img: drJithinKJoseImg, dept: "EEE", name: "Dr. JITHIN K JOSE", role: "Department Coordinator (EEE)" },
  { img: sibinJohnyImg, dept: "MRE", name: "SIBIN JOHNY", role: "Department Coordinator (MRE)" }
];
function Home() {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const rippleDataRef = useRef({
    ripples: [],
    animationId: null,
  });

  // Water ripple effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;

    const ctx = canvas.getContext('2d');
    const data = rippleDataRef.current;

    const resizeCanvas = () => {
      const rect = hero.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const addRipple = (x, y) => {
      data.ripples.push({
        x, y,
        radius: 0,
        maxRadius: 120 + Math.random() * 80,
        opacity: 0.35,
        speed: 2.5 + Math.random() * 1.5,
        lineWidth: 2,
      });
      // Limit ripple count for performance
      if (data.ripples.length > 25) {
        data.ripples = data.ripples.slice(-25);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      data.ripples = data.ripples.filter(r => r.opacity > 0.01);

      data.ripples.forEach(ripple => {
        ripple.radius += ripple.speed;
        const progress = ripple.radius / ripple.maxRadius;
        ripple.opacity = 0.35 * (1 - progress);

        if (ripple.opacity <= 0.01) return;

        // Outer ring
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${ripple.opacity})`;
        ctx.lineWidth = ripple.lineWidth * (1 - progress * 0.5);
        ctx.stroke();

        // Inner ring (slightly delayed)
        if (ripple.radius > 15) {
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius * 0.65, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(173, 216, 255, ${ripple.opacity * 0.6})`;
          ctx.lineWidth = ripple.lineWidth * 0.6 * (1 - progress * 0.5);
          ctx.stroke();
        }

        // Subtle glow
        if (ripple.radius > 5 && ripple.opacity > 0.05) {
          const gradient = ctx.createRadialGradient(
            ripple.x, ripple.y, ripple.radius * 0.8,
            ripple.x, ripple.y, ripple.radius
          );
          gradient.addColorStop(0, `rgba(100, 180, 255, 0)`);
          gradient.addColorStop(0.7, `rgba(100, 180, 255, ${ripple.opacity * 0.15})`);
          gradient.addColorStop(1, `rgba(100, 180, 255, 0)`);
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });

      data.animationId = requestAnimationFrame(animate);
    };

    animate();

    // Throttled mouse move handler
    let lastTime = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < 80) return; // Throttle to ~12fps for ripple creation
      lastTime = now;
      const rect = canvas.getBoundingClientRect();
      addRipple(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handleTouchMove = (e) => {
      const now = Date.now();
      if (now - lastTime < 80) return;
      lastTime = now;
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      addRipple(touch.clientX - rect.left, touch.clientY - rect.top);
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      // Create a burst of ripples on click
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      addRipple(x, y);
      setTimeout(() => addRipple(x + 5, y - 5), 100);
      setTimeout(() => addRipple(x - 5, y + 5), 200);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('click', handleClick);
      cancelAnimationFrame(data.animationId);
    };
  }, []);

  // Floating water droplets data (memoized so they don't regenerate)
  const floatingDroplets = useMemo(() =>
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      size: 6 + Math.random() * 14,
      duration: 6 + Math.random() * 10,
      delay: Math.random() * 8,
      opacity: 0.15 + Math.random() * 0.25,
    })), []);

  // Stagger animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const featureBarVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 1.2, ease: 'easeOut' },
    },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 1.4 + i * 0.15 },
    }),
  };

  return (
    <div className="home-wrapper">

      {/* Hero Section with Video Background */}
      <div className="hero-section" ref={heroRef}>
        {/* Video Background */}
        <video
          className="hero-video-bg"
          autoPlay
          muted
          loop
          playsInline
          poster={heroBg}
        >
          <source
            src="https://videos.pexels.com/video-files/2421545/2421545-sd_640_360_25fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Fallback static image in case video doesn't load */}
        <div className="hero-video-fallback" style={{ backgroundImage: `url(${heroBg})` }}></div>

        {/* Animated gradient overlay */}
        <div className="hero-gradient-overlay"></div>

        {/* Floating Water Droplet Particles */}
        <div className="floating-droplets-container">
          {floatingDroplets.map((drop) => (
            <div
              key={drop.id}
              className="floating-droplet"
              style={{
                left: drop.left,
                width: `${drop.size}px`,
                height: `${drop.size}px`,
                animationDuration: `${drop.duration}s`,
                animationDelay: `${drop.delay}s`,
                opacity: drop.opacity,
              }}
            />
          ))}
        </div>

        {/* Interactive Water Ripple Canvas */}
        <canvas ref={canvasRef} className="water-ripple-canvas" />

        <div className="hero-overlay">
          <div className="container hero-container">
            <motion.div
              className="hero-content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 className="hero-title" variants={itemVariants}>
                Centre for<br />
                Water Research , Education<br />
                <span className="hero-uba-title">&amp; Unnat Bharath Abhiyan</span>
              </motion.h1>
              <motion.p className="hero-subtitle" variants={itemVariants}>
                Advancing water science, sustainability, and education<br />
                through research-driven ecological percolation modeling<br />
                and community awareness initiatives.
              </motion.p>
            </motion.div>

            {/* Hero Features Bar - positioned bottom left */}
            <motion.div
              className="hero-features-floating"
              variants={featureBarVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { icon: <FaMicroscope />, text: <>Research Driven<br />Innovations</> },
                { icon: <FaHandsWash />, text: <>Sustainable Water<br />Solutions</> },
                { icon: <FaUsers />, text: <>Community<br />Awareness</> },
              ].map((feature, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="feature-divider"></div>}
                  <motion.div
                    className="feature-item"
                    custom={i}
                    variants={featureItemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.08, transition: { duration: 0.25 } }}
                  >
                    <div className="feature-icon-wrapper">{feature.icon}</div>
                    <span className="feature-text">{feature.text}</span>
                  </motion.div>
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Animated Waves at the bottom of hero */}
        <div className="hero-waves-container">
          <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
              <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="wave-parallax">
              <use href="#wave-path" x="48" y="0" className="wave wave-1" />
              <use href="#wave-path" x="48" y="3" className="wave wave-2" />
              <use href="#wave-path" x="48" y="5" className="wave wave-3" />
              <use href="#wave-path" x="48" y="7" className="wave wave-4" />
            </g>
          </svg>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="main-content-section container-fluid px-5">
        <div className="row align-items-center g-4 py-5">
          <motion.div
            className="col-xl-4 col-lg-5 text-column"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '60px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="section-accent-bar"
            />
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Change in water quality while rain water is percolated through the earth
            </motion.h2>
            <motion.div
              className="section-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p>
                Significant water quality change occurs while rain water percolates through the earth. Ground water is generally high in dissolved mineral contents as compared to surface water, which is caused by the dissolution of minerals from soil/rock under influence of atmospheric carbon dioxide dissolved in rain water.
              </p>
              <p>
                While percolating, carbonic acid reacts with calcium and magnesium carbonate in soil/rock forming bicarbonate, which is soluble and enters the percolating water. Clay minerals also play an important role by exchanging sodium and potassium with calcium and magnesium in water.
              </p>
              <p>
                The above phenomenon is the reason for water in the shallow wells being generally low in pH and high in hardness, calcium, magnesium, bicarbonate, and iron content, depending on the mineral characteristics of the soil and rock formations.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="col-xl-8 col-lg-7 diagram-column"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="diagram-full-layout">
              <motion.div
                className="diagram-badge"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 200 }}
                viewport={{ once: true }}
              >
                Percolation Diagram
              </motion.div>

              <div className="diagram-center-area">
                {/* Soil layers labels */}
                <div className="soil-labels">
                  {['Top Soil', 'Recharge Zone', 'Weathered Rock', 'Fractured Rock', 'Bed Rock'].map((label, i) => (
                    <motion.div
                      key={label}
                      className="soil-label"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {label} <span></span>
                    </motion.div>
                  ))}
                </div>

                {/* Main Image */}
                <motion.img
                  src={soilImage}
                  alt="Percolation Diagram"
                  className="percolation-3d-img"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                />

                {/* Water Quality Changes Card */}
                <motion.div
                  className="water-quality-card"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h5>Water Quality Changes</h5>
                  <ul className="changes-list">
                    <li><span className="icon-circle ph-icon">pH</span> <span className="list-text">pH decreases</span> <span className="arrow down">↓</span></li>
                    <li><span className="icon-circle hardness-icon">H</span> <span className="list-text">Hardness increases</span> <span className="arrow up">↑</span></li>
                    <li><span className="icon-circle ca-icon" style={{ fontSize: '0.6rem' }}>Ca/Mg</span> <span className="list-text">Calcium & Magnesium<br />increase</span> <span className="arrow up">↑</span></li>
                    <li><span className="icon-circle hco3-icon" style={{ fontSize: '0.55rem' }}>HCO3</span> <span className="list-text">Bicarbonate increases</span> <span className="arrow up">↑</span></li>
                    <li><span className="icon-circle fe-icon">Fe</span> <span className="list-text">Iron content varies</span> <span className="arrow updown">↑↓</span></li>
                  </ul>
                </motion.div>
              </div>

              {/* Footer Bar */}
              <motion.div
                className="diagram-footer-bar"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="footer-step">
                  <div className="drop-circle">💧</div>
                  <span>Rain Water</span>
                  <span className="arrow-line">→</span>
                </div>
                <div className="footer-step">
                  <div className="layers-circle">📚</div>
                  <span>Percolation<br />Through Earth</span>
                  <span className="arrow-line">→</span>
                </div>
                <div className="footer-step">
                  <div className="drop-circle dark">💧</div>
                  <span>Ground Water with<br />Higher Mineral Content</span>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <div className="home-about-section">
        <div className="container">

          {/* Header row — image + text */}
          <div className="row align-items-center g-5 py-4">
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="about-media-wrapper">
                <img src={waterImg} alt="Drinking Water" className="about-image-premium img-fluid" />
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="about-text-wrapper">
                <span className="section-mini-badge">OUR BACKGROUND</span>
                <h2 className="about-title-premium">About Us</h2>
                <p className="about-desc-text">
                  Centre for Water Research and Education (CWRE) was established on 05-08-2016 as a
                  subsidiary of Civil Engineering department Jyothi Engineering College, Cheruthuruthy.
                  The centre aims at providing services to the people...
                </p>
              </div>
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <div className="row g-4 py-4">
            <div className="col-md-6">
              <motion.div
                className="vision-mission-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(59,130,246,0.15)' }}
              >
                <div className="card-pulse-icon">👁️</div>
                <h3 className="card-heading">Vision</h3>
                <p className="card-body-text">To provide efficient and affordable service...</p>
              </motion.div>
            </div>
            <div className="col-md-6">
              <motion.div
                className="vision-mission-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(59,130,246,0.15)' }}
              >
                <div className="card-pulse-icon">🚀</div>
                <h3 className="card-heading">Mission</h3>
                <p className="card-body-text">To establish a centre of excellence...</p>
              </motion.div>
            </div>
          </div>

          {/* Objectives */}
          <motion.div
            className="objectives-premium-wrap py-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="objectives-box-card">
              <h3 className="objectives-title-premium">Objectives</h3>
              <div className="row g-4 mt-2">
                {[
                  "Providing consultancy service to Water Boards...",
                  "Testing water samples...",
                  "Training engineers and supervisors...",
                  "Providing training to faculty and students...",
                  "Dissemination of knowledge through publications."
                ].map((obj, i) => (
                  <motion.div
                    className="col-md-6 col-lg-4"
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="obj-pill-card">
                      <span className="obj-bullet-num">{i + 1}</span>
                      <p className="obj-pill-text">{obj}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 1. Core Committee Members */}
          <div className="committee-section my-5">
            <div className="committee-header-wrap">
              <span className="committee-badge">GOVERNANCE &amp; LEADERSHIP</span>
              <h3 className="section-title">Core Committee</h3>
              <p className="committee-subtext">The governing leadership overseeing strategic planning and institutional direction.</p>
            </div>
            <div className="members-grid">
              {homeCoreCommittee.map((member, index) => (
                <motion.div
                  key={index}
                  className="member-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="member-photo-frame">
                    <img src={member.img} alt={member.name} />
                  </div>
                  <h5>{member.name}</h5>
                  <p>{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 2. Coordinator */}
          <div className="committee-section my-5">
            <div className="committee-header-wrap">
              <span className="committee-badge">EXECUTIVE COORDINATION</span>
              <h3 className="section-title">Coordinator</h3>
              <p className="committee-subtext">Chief leadership in charge of overall CWRE operations and research programmes.</p>
            </div>
            <div className="members-grid justify-center-single">
              {homeLeadCoordinator.map((member, index) => (
                <motion.div
                  key={index}
                  className="member-card featured-lead-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="member-photo-frame">
                    <img src={member.img} alt={member.name} />
                  </div>
                  <h5>{member.name}</h5>
                  <p>{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 3. Asst. Coordinators College Level */}
          <div className="committee-section my-5">
            <div className="committee-header-wrap">
              <span className="committee-badge">INSTITUTIONAL LIAISON</span>
              <h3 className="section-title">Asst. Coordinators College Level</h3>
              <p className="committee-subtext">Coordinating inter-departmental research activities and outreach across the college.</p>
            </div>
            <div className="members-grid">
              {homeAsstCoordinators.map((member, index) => (
                <motion.div
                  key={index}
                  className="member-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="member-photo-frame">
                    <img src={member.img} alt={member.name} />
                  </div>
                  <h5>{member.name}</h5>
                  <p>{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 4. Department Coordinators */}
          <div className="committee-section my-5">
            <div className="committee-header-wrap">
              <span className="committee-badge">DEPARTMENT LIAISONS</span>
              <h3 className="section-title">Department Coordinators</h3>
              <p className="committee-subtext">Faculty representatives driving department-specific water awareness &amp; research initiatives.</p>
            </div>
            <div className="members-grid">
              {homeDeptCoordinators.map((member, index) => (
                <motion.div
                  key={index}
                  className="member-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  viewport={{ once: true }}
                >
                  <div className="member-photo-frame">
                    <img src={member.img} alt={member.name} />
                    <span className="dept-tag">{member.dept}</span>
                  </div>
                  <h5>{member.name}</h5>
                  <p>{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Accreditation Section */}
      <div className="accreditation-premium-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <motion.div
                className="accreditation-card-premium"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <div className="accreditation-badge-top">
                  <span className="accreditation-glow-dot"></span> State Board Approved
                </div>
                <h3 className="accreditation-heading-text">Accreditation</h3>
                <div className="accreditation-line-divider"></div>
                <p className="accreditation-body-paragraph">
                  Laboratory of the Centre is accredited by the Kerala state pollution control board as a
                  commercial laboratory vide order number <strong>PCB/LAB/C12/2014</strong> dated{' '}
                  <strong>13/10/2015 of Member Secretary</strong>. As such the Centre is competent to analyze
                  water samples and issue certificate regarding the quality of water and also suggest remedial
                  measures.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;

import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import waterImg from '../assets/water.jpg';

// ===== MEMBER IMAGES & DEMO ASSETS =====
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

// Core Committee Data
const coreCommittee = [
  { img: joseKonikkara, name: "Msgr. Jose Konikkara", role: "Patron & Manager" },
  { img: davidNettikadan, name: "Fr. David Nettikadan", role: "Executive Manager" },
  { img: joseKannampuzha, name: "Fr Dr Jose Kannampuzha", role: "Director (Academics)" },
  { img: sojanLal, name: "Dr. P. Sojan Lal", role: "Principal" },
  { img: drXaviourImg, name: "Dr. V. M. Xaviour", role: "Core Committee Member" },
  { img: frAjeeshImg, name: "Fr. Ajeesh Perinchery", role: "Core Committee Member" },
  { img: drAlwynImg, name: "Dr. Alwyn Varghese", role: "Head of Department (Civil)" }
];

// Lead Coordinator Data
const leadCoordinator = [
  { img: staff2, name: "Professor Cyriac MG", role: "Chief Coordinator, CWRE" }
];

// Asst. Coordinators (College Level) Data
const asstCoordinators = [
  { img: annaImg, name: "Anna Joseph", role: "Asst. Coordinator (Civil Engineering)" },
  { img: sibinImg, name: "Dr. Thomas", role: "Asst. Coordinator (Non Civil)" }
];

// Department Coordinators Data
const deptCoordinators = [
  { img: leeshmaImg, dept: "AD", name: "LEESHMA", role: "Department Coordinator (AD)" },
  { img: bindhuImg, dept: "BSH", name: "BINDHU K S", role: "Department Coordinator (BSH)" },
  { img: jeffyImg, dept: "CE", name: "JEFFY JOHNY", role: "Department Coordinator (CE)" },
  { img: ninuImg, dept: "CSE", name: "NINU FRANSIS", role: "Department Coordinator (CSE)" },
  { img: geethuImg, dept: "CY", name: "DR. GEETHU MARY GEORGE", role: "Department Coordinator (CY)" },
  { img: jithinJoyImg, dept: "ECE", name: "JITHIN JOY", role: "Department Coordinator (ECE)" },
  { img: drJithinKJoseImg, dept: "EEE", name: "Dr. JITHIN K JOSE", role: "Department Coordinator (EEE)" },
  { img: sibinJohnyImg, dept: "MRE", name: "SIBIN JOHNY", role: "Department Coordinator (MRE)" }
];

function About() {
  return (
    <div className="about-container">
      {/* Header Section */}
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={waterImg} alt="Drinking Water" className="about-image" />
        <motion.div
          className="about-text-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="section-mini-badge">ABOUT US</span>
          <h2 className="about-title">Centre for Water Research &amp; Education (CWRE)</h2>
          <p>
            Centre for Water Research and Education (CWRE) was established on 05-08-2016 as a
            subsidiary of Civil Engineering department Jyothi Engineering College, Cheruthuruthy.
            The centre aims at providing services to the people and society in solving water quality issues and ensuring pure drinking water across communities.
          </p>
        </motion.div>
      </motion.div>

      {/* Vision & Mission Section */}
      <motion.div
        className="vision-mission"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="vision-box">
          <h3 className="box-title">Vision</h3>
          <p>
            To provide efficient, affordable, and sustainable water testing and research services, empowering communities with clean, potable water.
          </p>
        </div>
        <div className="mission-box">
          <h3 className="box-title">Mission</h3>
          <p>
            To establish a centre of excellence in water quality analysis, environmental remediation, and community-driven water preservation initiatives.
          </p>
        </div>
      </motion.div>

      {/* Objectives Section */}
      <motion.div
        className="objectives-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="objectives-title">Objectives</h3>
        <ul className="objectives-list">
          <li>Providing consultancy service to Water Boards and governmental/panchayat bodies.</li>
          <li>Testing water samples with accredited laboratory accuracy.</li>
          <li>Training engineers, supervisors, and community health inspectors.</li>
          <li>Providing training to faculty, research scholars, and students.</li>
          <li>Dissemination of knowledge through research publications, workshops, and manuals.</li>
        </ul>
      </motion.div>

      {/* 1. Core Committee Members */}
      <div className="committee-section">
        <div className="committee-header-wrap">
          <span className="committee-badge">GOVERNANCE &amp; LEADERSHIP</span>
          <h3 className="section-title">Core Committee</h3>
          <p className="committee-subtext">The governing leadership overseeing strategic planning and institutional direction.</p>
        </div>
        <div className="members-grid">
          {coreCommittee.map((member, index) => (
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
      <div className="committee-section">
        <div className="committee-header-wrap">
          <span className="committee-badge">EXECUTIVE COORDINATION</span>
          <h3 className="section-title">Coordinator</h3>
          <p className="committee-subtext">Chief leadership in charge of overall CWRE operations and research programmes.</p>
        </div>
        <div className="members-grid justify-center-single">
          {leadCoordinator.map((member, index) => (
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
      <div className="committee-section">
        <div className="committee-header-wrap">
          <span className="committee-badge">INSTITUTIONAL LIAISON</span>
          <h3 className="section-title">Asst. Coordinators College Level</h3>
          <p className="committee-subtext">Coordinating inter-departmental research activities and outreach across the college.</p>
        </div>
        <div className="members-grid">
          {asstCoordinators.map((member, index) => (
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
      <div className="committee-section">
        <div className="committee-header-wrap">
          <span className="committee-badge">DEPARTMENT LIAISONS</span>
          <h3 className="section-title">Department Coordinators</h3>
          <p className="committee-subtext">Faculty representatives driving department-specific water awareness &amp; research initiatives.</p>
        </div>
        <div className="members-grid">
          {deptCoordinators.map((member, index) => (
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
  );
}

export default About;

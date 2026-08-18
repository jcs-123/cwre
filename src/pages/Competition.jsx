import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTrophy,
  FaCalendarAlt,
  FaAward,
  FaMoneyBillWave,
  FaDownload,
  FaFileWord,
  FaFilePdf,
  FaBookOpen,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaInfoCircle
} from 'react-icons/fa';
import './Competition.css';

const Competition = () => {
  const [activeTab, setActiveTab] = useState('college'); // 'college' or 'school'

  // Tab content switching animation variants
  const tabContentVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: 'easeIn' } }
  };

  return (
    <div className="comp-container">
      {/* HEADER SECTION */}
      <header className="comp-header">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="comp-badge">Statewide Event</span>
          <h1 className="comp-title">Quiz for Clean Kerala</h1>
          <p className="comp-subtitle">
            A Statewide Water Quality & Sanitation Awareness Challenge organized by the Centre for Water Research and Education (CWRE) in association with Unnat Bharat Abhiyan (UBA)
          </p>
        </motion.div>
      </header>

      {/* INTERACTIVE TABS */}
      <div className="comp-tabs-wrapper">
        <div className="comp-tabs">
          <button
            className={`comp-tab ${activeTab === 'college' ? 'active' : ''}`}
            onClick={() => setActiveTab('college')}
          >
            College Level
          </button>
          <button
            className={`comp-tab ${activeTab === 'school' ? 'active' : ''}`}
            onClick={() => setActiveTab('school')}
          >
            +1 & +2 Level
          </button>
        </div>
      </div>

      {/* CONTENT PANEL */}
      <AnimatePresence mode="wait">
        {activeTab === 'college' ? (
          <motion.div
            key="college-tab"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="tab-content-wrap"
          >
            <div className="comp-grid">
              {/* Left side: Brochure Preview */}
              <div className="comp-brochure-card">
                <div className="comp-brochure-header">
                  <div className="comp-brochure-title-group">
                    <h4>Competition Brochure & Syllabus</h4>
                    <span>Statewide Challenge (Graduate, Post-Graduate & Diploma)</span>
                  </div>
                  <a
                    href="/downloads/All kerala water quality and sanitation competetion for diploma , graduation and post graduation level (1).pdf"
                    download
                    className="comp-dl-btn"
                    title="Download PDF Brochure"
                  >
                    <FaDownload />
                  </a>
                </div>
                <div className="comp-iframe-container">
                  <iframe
                    src="/downloads/All kerala water quality and sanitation competetion for diploma , graduation and post graduation level (1).pdf#toolbar=0"
                    title="College Competition PDF Brochure"
                    className="comp-iframe"
                  />
                </div>
              </div>

              {/* Right side: Key Info & Downloads */}
              <div className="comp-info-pane">
                {/* Quick Info Grid */}
                <div className="comp-facts-grid">
                  <div className="comp-fact-card">
                    <div className="comp-fact-icon-wrap date-color">
                      <FaCalendarAlt />
                    </div>
                    <div className="comp-fact-details">
                      <h5>Important Dates</h5>
                      <p><strong>Reg. Deadline:</strong> 31 Jan 2026</p>
                      <p><strong>Written Exam:</strong> 7 Feb 2026</p>
                      <p><small>(11:00 AM - 12:00 PM)</small></p>
                    </div>
                  </div>

                  <div className="comp-fact-card">
                    <div className="comp-fact-icon-wrap prize-color">
                      <FaTrophy />
                    </div>
                    <div className="comp-fact-details">
                      <h5>Attractive Prizes</h5>
                      <p><strong>1st:</strong> ₹12,000</p>
                      <p><strong>2nd:</strong> ₹8,000</p>
                      <p><strong>3rd:</strong> ₹5,000</p>
                    </div>
                  </div>

                  <div className="comp-fact-card">
                    <div className="comp-fact-icon-wrap">
                      <FaAward />
                    </div>
                    <div className="comp-fact-details">
                      <h5>KTU & Diploma Points</h5>
                      <p><strong>KTU Students:</strong> 30 Activity Points</p>
                      <p><strong>Diploma Students:</strong> 10 Activity Points</p>
                    </div>
                  </div>

                  <div className="comp-fact-card">
                    <div className="comp-fact-icon-wrap">
                      <FaMoneyBillWave />
                    </div>
                    <div className="comp-fact-details">
                      <h5>Registration & Fee</h5>
                      <p><strong>Fee:</strong> ₹100 per candidate</p>
                      <p><strong>GPay:</strong> cyriac989@okicici</p>
                    </div>
                  </div>
                </div>

                {/* Venue Card */}
                <div className="comp-fact-card w-100">
                  <div className="comp-fact-icon-wrap date-color">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="comp-fact-details">
                    <h5>Examination Venue</h5>
                    <p><strong>Jyothi Engineering College, Cheruthuruthy, Thrissur</strong></p>
                    <p><small>Note: Candidates must make their own travel arrangements.</small></p>
                  </div>
                </div>

                {/* CTA Register Card */}
                <div className="comp-cta-card">
                  <h3 className="comp-cta-title">Ready to Participate?</h3>
                  <p className="comp-cta-desc">
                    Join the challenge, test your knowledge of water sanitation, and win cash awards & certificates.
                  </p>
                  <a
                    href="https://forms.gle/uTJTbXYR9SJD23FF7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comp-reg-btn"
                  >
                    Register Now <FaExternalLinkAlt size={14} />
                  </a>
                </div>

                {/* Resources list */}
                <div className="comp-resources-card">
                  <h4><FaBookOpen /> Reference Study Material</h4>
                  <div className="comp-resources-list">
                    <div className="comp-resource-item">
                      <div className="comp-resource-info">
                        <FaFileWord className="comp-file-icon word-type" />
                        <span className="comp-resource-name">Water Resources Study Material (College)</span>
                      </div>
                      <a
                        href="/downloads/material for 2025-2026.docx"
                        download
                        className="comp-dl-btn"
                      >
                        <FaDownload />
                      </a>
                    </div>

                    <div className="comp-resource-item">
                      <div className="comp-resource-info">
                        <FaFilePdf className="comp-file-icon pdf-type" />
                        <span className="comp-resource-name">Previous Year Question Paper (2024-25)</span>
                      </div>
                      <a
                        href="/downloads/question  for 2024-25.pdf"
                        download
                        className="comp-dl-btn"
                      >
                        <FaDownload />
                      </a>
                    </div>

                    <div className="comp-resource-item">
                      <div className="comp-resource-info">
                        <FaFilePdf className="comp-file-icon pdf-type" />
                        <span className="comp-resource-name">EE Lab Manual</span>
                      </div>
                      <a
                        href="/downloads/EE LAB MANUAL NEW.pdf"
                        download
                        className="comp-dl-btn"
                      >
                        <FaDownload />
                      </a>
                    </div>

                    <div className="comp-resource-item">
                      <div className="comp-resource-info">
                        <FaFilePdf className="comp-file-icon pdf-type" />
                        <span className="comp-resource-name">Jalasuraksha Revised Book</span>
                      </div>
                      <a
                        href="/downloads/Jalasuraksha Revised Book.pdf"
                        download
                        className="comp-dl-btn"
                      >
                        <FaDownload />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="school-tab"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="tab-content-wrap"
          >
            <div className="comp-grid">
              {/* Left side: Brochure Preview */}
              <div className="comp-brochure-card">
                <div className="comp-brochure-header">
                  <div className="comp-brochure-title-group">
                    <h4>Competition Brochure & Syllabus</h4>
                    <span>Statewide Challenge (Higher Secondary Students)</span>
                  </div>
                  <a
                    href="/downloads/+1 - +2 Work.pdf"
                    download
                    className="comp-dl-btn"
                    title="Download PDF Brochure"
                  >
                    <FaDownload />
                  </a>
                </div>
                <div className="comp-iframe-container">
                  <iframe
                    src="/downloads/+1 - +2 Work.pdf#toolbar=0"
                    title="School Competition PDF Brochure"
                    className="comp-iframe"
                  />
                </div>
              </div>

              {/* Right side: Key Info & Downloads */}
              <div className="comp-info-pane">
                {/* Quick Info Grid */}
                <div className="comp-facts-grid">
                  <div className="comp-fact-card">
                    <div className="comp-fact-icon-wrap date-color">
                      <FaCalendarAlt />
                    </div>
                    <div className="comp-fact-details">
                      <h5>Important Dates</h5>
                      <p><strong>Reg. Deadline:</strong> 22 Oct 2025</p>
                      <p><strong>Written Exam:</strong> 1 Nov 2025</p>
                      <p><small>(11:00 AM - 12:00 PM)</small></p>
                    </div>
                  </div>

                  <div className="comp-fact-card">
                    <div className="comp-fact-icon-wrap prize-color">
                      <FaTrophy />
                    </div>
                    <div className="comp-fact-details">
                      <h5>Attractive Prizes</h5>
                      <p><strong>1st:</strong> ₹10,000</p>
                      <p><strong>2nd:</strong> ₹7,000</p>
                      <p><strong>3rd:</strong> ₹5,000</p>
                    </div>
                  </div>

                  <div className="comp-fact-card">
                    <div className="comp-fact-icon-wrap">
                      <FaInfoCircle />
                    </div>
                    <div className="comp-fact-details">
                      <h5>Syllabus Overview</h5>
                      <p>Water Resources, Chemistry of Water, Biological Parameters, Sanitation & Waste Management.</p>
                    </div>
                  </div>

                  <div className="comp-fact-card">
                    <div className="comp-fact-icon-wrap">
                      <FaMoneyBillWave />
                    </div>
                    <div className="comp-fact-details">
                      <h5>Registration & Fee</h5>
                      <p><strong>Fee:</strong> ₹100 per candidate</p>
                      <p><strong>GPay:</strong> cyriac989@okicici</p>
                    </div>
                  </div>
                </div>

                {/* Venue Card */}
                <div className="comp-fact-card w-100">
                  <div className="comp-fact-icon-wrap date-color">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="comp-fact-details">
                    <h5>Examination Venue</h5>
                    <p><strong>Jyothi Engineering College, Cheruthuruthy, Thrissur</strong></p>
                    <p><small>Note: Candidates must make their own travel arrangements.</small></p>
                  </div>
                </div>

                {/* CTA Register Card */}
                <div className="comp-cta-card">
                  <h3 className="comp-cta-title">Ready to Participate?</h3>
                  <p className="comp-cta-desc">
                    Join the challenge, test your knowledge of water sanitation, and win cash awards & certificates.
                  </p>
                  <a
                    href="https://tinyurl.com/CleanKeralaQuiz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comp-reg-btn"
                  >
                    Register Now <FaExternalLinkAlt size={14} />
                  </a>
                </div>

                {/* Resources list */}
                <div className="comp-resources-card">
                  <h4><FaBookOpen /> Reference Study Material</h4>
                  <div className="comp-resources-list">
                    <div className="comp-resource-item">
                      <div className="comp-resource-info">
                        <FaFileWord className="comp-file-icon word-type" />
                        <span className="comp-resource-name">Water Resources Study Material (+1, +2)</span>
                      </div>
                      <a
                        href="/downloads/material for +1,+2 2025-2026..docx"
                        download
                        className="comp-dl-btn"
                      >
                        <FaDownload />
                      </a>
                    </div>

                    <div className="comp-resource-item">
                      <div className="comp-resource-info">
                        <FaFilePdf className="comp-file-icon pdf-type" />
                        <span className="comp-resource-name">Previous Year Questions (General Water Quiz)</span>
                      </div>
                      <a
                        href="/downloads/Previous_year_questions_water_quality_awareness_competetion.pdf"
                        download
                        className="comp-dl-btn"
                      >
                        <FaDownload />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Competition;

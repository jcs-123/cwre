import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaDownload, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import './PlusOnePlusTwo.css';

function PlusOnePlusTwo() {
  const pdfUrl = "/downloads/gudeline and questions for quiz 2.pdf";

  return (
    <div className="plus-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="plus-content"
      >
        <div className="plus-header-badge">
          <FaAward className="me-2" /> Statewide Competition
        </div>
        <h2 className="plus-heading">Clean Kerala Quiz 2.0 (+1 &amp; +2)</h2>
        <p className="plus-paragraph">
          A Statewide Water Quality &amp; Sanitation Awareness Challenge for Higher Secondary Students (+1, +2 of Kerala Syllabus, CBSE, ICSE) organized by CWRE in association with Unnat Bharat Abhiyan (UBA).
        </p>

        {/* Key Highlights Pills */}
        <div className="plus-highlights-row mb-4">
          <div className="highlight-pill">
            <span className="pill-dot"></span> <strong>Eligibility:</strong> +1 &amp; +2 (State, CBSE, ICSE)
          </div>
          <div className="highlight-pill">
            <span className="pill-dot"></span> <strong>Theme:</strong> Water Quality &amp; Sanitation
          </div>
          <div className="highlight-pill">
            <span className="pill-dot"></span> <strong>Association:</strong> CWRE &amp; UBA
          </div>
        </div>

        {/* Action Bar */}
        <div className="plus-action-bar">
          <div className="plus-doc-info">
            <FaFilePdf className="plus-doc-icon-small text-danger" />
            <span className="plus-doc-title-small">Clean Kerala Quiz 2.0 – Guidelines &amp; Questions</span>
          </div>
          <div className="plus-action-btns">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="plus-btn plus-btn-outline"
            >
              <FaExternalLinkAlt className="btn-icon-spacing" /> Open Fullscreen
            </a>
            <a
              href={pdfUrl}
              download
              className="plus-btn plus-btn-download"
            >
              <FaDownload className="btn-icon-spacing" /> Download PDF
            </a>
          </div>
        </div>

        {/* Embedded PDF iframe with FitH parameter */}
        <div className="plus-iframe-container">
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
            title="Guideline and Questions for Quiz 2"
            className="plus-pdf-iframe"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default PlusOnePlusTwo;

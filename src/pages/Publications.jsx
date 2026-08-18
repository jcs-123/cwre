import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBookOpen, FaEye, FaDownload, FaNewspaper } from 'react-icons/fa';
import './Publications.css';

// ===== PORTRAIT COVERS (PDF FRONT PAGES) =====
import pubCover1 from '../assets/pub_cover_1.png';
import pubCover2 from '../assets/pub_cover_2.png';
import pubCover3 from '../assets/pub_cover_3.png';
import pubCover4 from '../assets/pub_cover_4.png';

const publications = [
  {
    edition: 'October 2025 (Issue 1)',
    title: 'പരിസ്ഥിതിയും ആരോഗ്യവും',
    titleEn: 'Environment & Health',
    file: '/downloads/1 ആരോഗ്യവും പരിസ്ഥിതിയും.pdf',
    img: pubCover1,
  },
  {
    edition: 'December 2025 (Issue 2)',
    title: 'പരിസ്ഥിതിയും ആരോഗ്യവും',
    titleEn: 'Environment & Health',
    file: '/downloads/2ആരോഗ്യവും പരിസ്ഥിതിയും.pdf',
    img: pubCover2,
  },
  {
    edition: 'February 2026 (Issue 3)',
    title: 'പരിസ്ഥിതിയും ആരോഗ്യവും',
    titleEn: 'Environment & Health',
    file: '/downloads/3 ആരോഗ്യവും പരിസ്ഥിതിയും.pdf',
    img: pubCover3,
  },
  {
    edition: 'April 2026 (Issue 4)',
    title: 'പരിസ്ഥിതിയും ആരോഗ്യവും',
    titleEn: 'Environment & Health',
    file: '/downloads/4ആരോഗ്യവും പരിസ്ഥിതിയും.pdf',
    img: pubCover4,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

function Publications() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="publications-page">
      <div className="pub-inner">

        {/* Header */}
        <motion.div
          className="pub-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="pub-label">KNOWLEDGE SHARING</span>
          <h2 className="pub-heading">Publications</h2>
          <div className="pub-heading-line"></div>
          <p className="pub-desc">
            Monthly publications on Health and Environment by the Centre for Water Research &amp; Education, Jyothi Engineering College.
          </p>
        </motion.div>

        {/* Section title */}
        <motion.h3
          className="pub-section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="pub-section-icon"><FaNewspaper /></span>
          Monthly Publications — പരിസ്ഥിതിയും ആരോഗ്യവും
        </motion.h3>

        {/* Cards Grid */}
        <motion.div
          className="pub-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              className="pub-card"
              variants={cardVariants}
            >
              {/* Thumbnail */}
              <div className="pub-card-thumb" onClick={() => setActiveImage(pub)}>
                <img src={pub.img} alt={pub.title} className="pub-card-img" />
              </div>

              {/* Body */}
              <div className="pub-card-body">
                <h4 className="pub-card-title">{pub.title}</h4>
                <p className="pub-card-subtitle">{pub.titleEn} — {pub.edition}</p>

                {/* Actions */}
                <div className="pub-card-actions">
                  <a
                    href={pub.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub-btn pub-btn-view"
                  >
                    <FaEye /> View
                  </a>
                  <a
                    href={pub.file}
                    download
                    className="pub-btn pub-btn-download"
                  >
                    <FaDownload /> Download
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {activeImage && (
            <motion.div
              className="pub-image-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setActiveImage(null)}
            >
              <motion.div
                className="pub-image-modal-content"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                onClick={(event) => event.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="pub-modal-header">
                  <div className="pub-modal-header-info">
                    <h3 className="pub-modal-title">{activeImage.title} ({activeImage.edition})</h3>
                  </div>
                  <button
                    className="pub-modal-close-btn"
                    onClick={() => setActiveImage(null)}
                    aria-label="Close modal"
                  >
                    &times;
                  </button>
                </div>

                {/* Modal Body */}
                <div className="pub-modal-body">
                  <img
                    src={activeImage.img}
                    alt={activeImage.title}
                    className="pub-image-modal-img"
                  />
                </div>

                {/* Modal Footer */}
                <div className="pub-modal-footer">
                  <a
                    href={activeImage.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub-btn pub-btn-view"
                  >
                    <FaEye /> View PDF
                  </a>
                  <a
                    href={activeImage.file}
                    download
                    className="pub-btn pub-btn-download"
                  >
                    <FaDownload /> Download
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

export default Publications;

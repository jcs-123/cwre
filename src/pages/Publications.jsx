import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBook, FaBookOpen, FaEye, FaDownload, FaNewspaper, FaLayerGroup } from 'react-icons/fa';
import './Publications.css';

// ===== AUTHENTIC PDF FRONT PAGE COVERS =====
// Periodicals (പരിസ്ഥിതിയും ആരോഗ്യവും)
import pubCover1 from '../assets/pub_cover_1.png';
import pubCover2 from '../assets/pub_cover_2.png';
import pubCover3 from '../assets/pub_cover_3.png';
import pubCover4 from '../assets/pub_cover_4.png';
import pubCover5 from '../assets/pub_cover_5.png';

// Books
import bookCoverJalasuraksha from '../assets/book_cover_jalasuraksha.png';
import bookCoverParisara from '../assets/book_cover_parisara.png';
import bookCoverJalavumJeevithavum from '../assets/book_cover_jalavum_jeevithavum.png';

const allPublications = [
  // ────────── 1. BIMONTHLY PERIODICALS (PUBLICATIONS) ──────────
  {
    id: 'periodical-1',
    category: 'periodical',
    badge: 'Bimonthly Journal',
    edition: 'October 2025 (Issue 1)',
    title: 'പരിസ്ഥിതിയും ആരോഗ്യവും',
    titleEn: 'Environment & Health — Issue 1',
    author: 'Editorial Board, CWRE & UBA',
    publisher: 'Centre for Water Research & Education, Jyothi Engineering College',
    file: '/downloads/1 ആരോഗ്യവും പരിസ്ഥിതിയും.pdf',
    img: pubCover1,
  },
  {
    id: 'periodical-2',
    category: 'periodical',
    badge: 'Bimonthly Journal',
    edition: 'December 2025 (Issue 2)',
    title: 'പരിസ്ഥിതിയും ആരോഗ്യവും',
    titleEn: 'Environment & Health — Issue 2',
    author: 'Editorial Board, CWRE & UBA',
    publisher: 'Centre for Water Research & Education, Jyothi Engineering College',
    file: '/downloads/2ആരോഗ്യവും പരിസ്ഥിതിയും.pdf',
    img: pubCover2,
  },
  {
    id: 'periodical-3',
    category: 'periodical',
    badge: 'Bimonthly Journal',
    edition: 'February 2026 (Issue 3)',
    title: 'പരിസ്ഥിതിയും ആരോഗ്യവും',
    titleEn: 'Environment & Health — Issue 3',
    author: 'Editorial Board, CWRE & UBA',
    publisher: 'Centre for Water Research & Education, Jyothi Engineering College',
    file: '/downloads/3 ആരോഗ്യവും പരിസ്ഥിതിയും.pdf',
    img: pubCover3,
  },
  {
    id: 'periodical-4',
    category: 'periodical',
    badge: 'Bimonthly Journal',
    edition: 'April 2026 (Issue 4)',
    title: 'പരിസ്ഥിതിയും ആരോഗ്യവും',
    titleEn: 'Environment & Health — Issue 4',
    author: 'Editorial Board, CWRE & UBA',
    publisher: 'Centre for Water Research & Education, Jyothi Engineering College',
    file: '/downloads/4ആരോഗ്യവും പരിസ്ഥിതിയും.pdf',
    img: pubCover4,
  },
  {
    id: 'periodical-5',
    category: 'periodical',
    badge: 'Journal Book',
    edition: 'Special Journal Edition',
    title: 'പരിസ്ഥിതിയും ആരോഗ്യവും (ജേർണൽ ബുക്ക്)',
    titleEn: 'Environment & Health — Journal Book Compilation',
    author: 'Editorial Board, CWRE & UBA',
    publisher: 'Centre for Water Research & Education, Jyothi Engineering College',
    file: '/downloads/Journal Book.pdf',
    img: pubCover5,
  },

  // ────────── 2. AUTHORED REFERENCE BOOKS ──────────
  {
    id: 'book-1',
    category: 'book',
    badge: 'Book',
    edition: 'Revised Edition',
    title: 'ജലസുരക്ഷ നിത്യജീവിതത്തിൽ',
    titleEn: 'Jalasuraksha Nithyajeevithathil (Water Security in Daily Life)',
    author: 'Prof. M. G. Cyriac, Dr. Vincy Verghese, Smt. Anna Joseph, Smt. Joffy Joy',
    publisher: 'CWRE & Unnat Bharat Abhiyan (UBA), Jyothi Engineering College',
    file: '/downloads/Jalasuraksha Revised Book.pdf',
    img: bookCoverJalasuraksha,
  },
  {
    id: 'book-2',
    category: 'book',
    badge: 'Book',
    edition: 'First Edition',
    title: 'പരിസരമലിനീകരണം – പ്രകൃതിയുടെ വിലാപങ്ങൾ',
    titleEn: 'Parisara Malinikaranam – Prakruthiyude Vilapangal',
    author: 'Prof. M. G. Cyriac',
    publisher: 'Centre for Water Research and Education (CWRE)',
    file: '/downloads/parisara_malinikaranam_prakruthiyude_vilapangal.pdf',
    img: bookCoverParisara,
  },
  {
    id: 'book-3',
    category: 'book',
    badge: 'Book',
    edition: 'Reference Edition',
    title: 'ജലവും ജീവിതവും',
    titleEn: 'Jalavum Jeevithavum (Water and Life)',
    author: 'Prof. M. G. Cyriac & Prof. S. Ratheesh',
    publisher: 'CWRE, Dept. of Civil Engineering, Jyothi Engineering College',
    file: '/downloads/jalavum_jeevithavum.pdf',
    img: bookCoverJalavumJeevithavum,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

function Publications() {
  const [filter, setFilter] = useState('all');
  const [activeImage, setActiveImage] = useState(null);

  const displayedPublications = allPublications.filter((pub) => {
    if (filter === 'all') return true;
    return pub.category === filter;
  });

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
          <span className="pub-label">KNOWLEDGE SHARING &amp; RESEARCH</span>
          <h1 className="pub-heading">Publications &amp; Books</h1>
          <div className="pub-heading-line"></div>
          <p className="pub-desc">
            Explore bimonthly publications on Environment, Water Quality, and Health alongside authored reference books by the Centre for Water Research &amp; Education (CWRE), Jyothi Engineering College.
          </p>
        </motion.div>

        {/* Filter Navigation Tabs */}
        <div className="pub-filter-nav">
          <button
            type="button"
            className={`pub-filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            <FaLayerGroup /> <span>All ({allPublications.length})</span>
          </button>
          <button
            type="button"
            className={`pub-filter-btn ${filter === 'periodical' ? 'active' : ''}`}
            onClick={() => setFilter('periodical')}
          >
            <FaNewspaper /> <span>Publications (4)</span>
          </button>
          <button
            type="button"
            className={`pub-filter-btn ${filter === 'book' ? 'active' : ''}`}
            onClick={() => setFilter('book')}
          >
            <FaBook /> <span>Books (3)</span>
          </button>
        </div>

        {/* Section title */}
        <div className="pub-category-bar">
          <h2 className="pub-section-title">
            <span className="pub-section-icon">
              {filter === 'periodical' ? <FaNewspaper /> : filter === 'book' ? <FaBook /> : <FaBookOpen />}
            </span>
            {filter === 'all' && 'All Bimonthly Publications & Authored Books'}
            {filter === 'periodical' && 'Bimonthly Publications — പരിസ്ഥിതിയും ആരോഗ്യവും'}
            {filter === 'book' && 'Authored Reference Books'}
          </h2>
          <span className="pub-count-badge">
            {displayedPublications.length} {displayedPublications.length === 1 ? 'Item' : 'Items'}
          </span>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="pub-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={filter}
        >
          {displayedPublications.map((pub) => (
            <motion.div
              key={pub.id}
              className={`pub-card pub-category-${pub.category}`}
              variants={cardVariants}
            >
              {/* Thumbnail */}
              <div className="pub-card-thumb" onClick={() => setActiveImage(pub)}>
                <img src={pub.img} alt={pub.title} className="pub-card-img" />
                <span className="pub-edition-tag">{pub.badge}</span>
              </div>

              {/* Body */}
              <div className="pub-card-body">
                <h3 className="pub-card-title">{pub.title}</h3>
                <p className="pub-card-subtitle">{pub.titleEn}</p>
                {pub.author && (
                  <p className="pub-card-author"><strong>Author / By:</strong> {pub.author}</p>
                )}
                {pub.edition && (
                  <p className="pub-card-edition-text"><strong>Edition:</strong> {pub.edition}</p>
                )}

                {/* Actions */}
                <div className="pub-card-actions">
                  <a
                    href={pub.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub-btn pub-btn-view"
                  >
                    <FaEye /> View PDF
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

        {/* PDF Modal Viewer / Image Cover Preview */}
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
                    <span className="pub-modal-badge">{activeImage.badge}</span>
                    <h3 className="pub-modal-title">{activeImage.title}</h3>
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
                    <FaEye /> Open PDF Document
                  </a>
                  <a
                    href={activeImage.file}
                    download
                    className="pub-btn pub-btn-download"
                  >
                    <FaDownload /> Download PDF
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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBook, FaFilePowerpoint, FaNewspaper, FaDownload, FaEye } from 'react-icons/fa';

// ===== IMAGE RESOURCES =====
import terrafilTechnology from '../assets/terrafil_technology__67531.png';

// ===== BOOK THUMBNAILS (AUTHENTIC PDF FRONT PAGES) =====
import bookCoverJalasuraksha from '../assets/book_cover_jalasuraksha.png';
import bookCoverParisara from '../assets/book_cover_parisara.png';
import bookCoverJalavumJeevithavum from '../assets/book_cover_jalavum_jeevithavum.png';

import './Resources.css';

// ===== ARTICLES & BOOKS DATA =====
const articleAndBookResources = [
  // ────────── ARTICLES ──────────
  {
    title: 'Terrafil Technology',
    img: terrafilTechnology,
    type: 'article',
    link: '/resource/terrafil-technology',
  },

  // ────────── BOOKS (AUTHENTIC PDF COVERS) ──────────
  {
    title: 'ജലസുരക്ഷ നിത്യജീവിതത്തിൽ (Jalasuraksha Nithyajeevithathil)',
    subtitle: 'Prof. M. G. Cyriac, Dr. Vincy Verghese, Smt. Anna Joseph, Smt. Joffy Joy',
    img: bookCoverJalasuraksha,
    type: 'book',
    file: '/downloads/Jalasuraksha Revised Book.pdf',
  },
  {
    title: 'പരിസരമലിനീകരണം – പ്രകൃതിയുടെ വിലാപങ്ങൾ (Parisara Malinikaranam)',
    subtitle: 'Prof. M. G. Cyriac',
    img: bookCoverParisara,
    type: 'book',
    file: '/downloads/parisara_malinikaranam_prakruthiyude_vilapangal.pdf',
  },
  {
    title: 'ജലവും ജീവിതവും (Jalavum Jeevithavum – Water & Life)',
    subtitle: 'Prof. M. G. Cyriac & Prof. S. Ratheesh',
    img: bookCoverJalavumJeevithavum,
    type: 'book',
    file: '/downloads/jalavum_jeevithavum.pdf',
  },
];

// ===== LIST OF POWERPOINT PRESENTATIONS (EXACT ORDER & REMARKS) =====
const pptPresentations = [
  {
    slNo: 1,
    title: 'Water Treatment Systems & Processes',
    remarks: 'Commercial water treatment for traditional water quality issues',
    file: '/downloads/water treatmnet.pptx',
  },
  {
    slNo: 2,
    title: 'Environmental Planning of Buildings and the Surroundings',
    remarks: 'Explanation of pollution free planning of building',
    file: '/downloads/Environmaental planning of Buildings and the surroundings.pptx',
  },
  {
    slNo: 3,
    title: 'Water Quality Problems in Kerala State',
    remarks: 'Detailed explanation on water quality issues in Kerala state',
    file: '/downloads/Water quality problems in Kerala StatEnglish  remodelled copy dt 7.1.2026.pptx',
  },
  {
    slNo: 4,
    title: 'Water Pollution and Water Quality Standards',
    remarks: 'Water pollution issues and water quality standards',
    file: '/downloads/water pollution and water quality standards.pptx',
  },
  {
    slNo: 5,
    title: 'Measurement of physical and chemical water quality parameters',
    remarks: 'Measurement method explained',
    file: '/downloads/Analysisi of water qualty parametrs (1).ppt',
  },
  {
    slNo: 6,
    title: 'Bacterial analysis of water',
    remarks: 'Analysis methods and other details are explained',
    file: '/downloads/bacterial-analysis.ppt',
  },
  {
    slNo: 7,
    title: 'Terrafil Technology for water treatment',
    remarks: 'Use , merits , manufacturing of terrafil filters',
    file: '/downloads/Terrafil_Technology__40528.pptx',
  },
  {
    slNo: 8,
    title: 'Sanitary survey',
    remarks: 'Steps and concepts explained',
    file: '/downloads/Sanitary_Survey_and__53216.pptx',
  },
  {
    slNo: 9,
    title: 'Rain Water harvesting',
    remarks: 'Only brief explanation given',
    file: '/downloads/Rain_water_Harvestin_83606.pptx',
  },
  {
    slNo: 10,
    title: 'State specific water quality issues and remedial measures',
    remarks: 'Area specific water quality in Kerala state is explained',
    file: '/downloads/State_specific_Water_60654.pptx',
  },
  {
    slNo: 11,
    title: 'Water treatment plant',
    remarks: 'Only about water treatment plant operation',
    file: '/downloads/water  treatment plant ppt.ppt',
  },
  {
    slNo: 12,
    title: 'Conservation of traditional water sources of Kerala',
    remarks: 'Maintenance of traditional water sources is explained',
    file: '/downloads/CONSERVATION OF TRADITIONAL WATER SOURCES OF KERALA.pptx',
  },
];

function Resources() {
  const [activeTab, setActiveTab] = useState('article');

  const filteredCardResources = articleAndBookResources.filter((item) => item.type === activeTab);

  return (
    <div className="resources-page-wrapper">
      <div className="resources-container">
        
        {/* Header */}
        <div className="resources-header">
          <span className="resources-badge">KNOWLEDGE HUB</span>
          <h1 className="resources-title">Resources</h1>
          <div className="resources-title-underline"></div>
          <p className="resources-subtitle">
            Explore our curated collection of scientific articles, reference books, and educational PowerPoint presentations.
          </p>
        </div>

        {/* Tab Switcher: Articles, Books, PPTs */}
        <div className="resources-filter-bar">
          <button 
            type="button"
            className={`filter-btn ${activeTab === 'article' ? 'active' : ''}`}
            onClick={() => setActiveTab('article')}
          >
            <FaNewspaper /> <span>Articles</span>
          </button>
          
          <button 
            type="button"
            className={`filter-btn ${activeTab === 'book' ? 'active' : ''}`}
            onClick={() => setActiveTab('book')}
          >
            <FaBook /> <span>Books</span>
          </button>
          
          <button 
            type="button"
            className={`filter-btn ${activeTab === 'ppt' ? 'active' : ''}`}
            onClick={() => setActiveTab('ppt')}
          >
            <FaFilePowerpoint /> <span>PPTs</span>
          </button>
        </div>

        {/* Category Header Label */}
        <div className="resources-category-heading-bar">
          <h2 className="resources-current-category-title">
            {activeTab === 'article' && 'Articles & Guidelines'}
            {activeTab === 'book' && 'Authored Reference Books'}
            {activeTab === 'ppt' && 'List of PowerPoint presentations'}
          </h2>
          <span className="resources-item-count">
            {activeTab === 'ppt'
              ? `${pptPresentations.length} Presentations`
              : `${filteredCardResources.length} ${filteredCardResources.length === 1 ? 'Item' : 'Items'}`}
          </span>
        </div>

        {/* Conditional View: PPT Table vs Article/Book Grid */}
        {activeTab === 'ppt' ? (
          <div className="resources-ppt-table-container">
            <table className="resources-ppt-table">
              <thead>
                <tr>
                  <th className="col-th-sl">Sl no</th>
                  <th className="col-th-name">Name</th>
                  <th className="col-th-remarks">Remarks</th>
                  <th className="col-th-action">Download</th>
                </tr>
              </thead>
              <tbody>
                {pptPresentations.map((item) => (
                  <tr key={item.slNo} className="resources-ppt-row">
                    <td className="col-td-sl">{item.slNo}</td>
                    <td className="col-td-name">
                      <a
                        href={item.file}
                        download
                        className="ppt-name-link"
                        title={`Download ${item.title}`}
                      >
                        <FaFilePowerpoint className="ppt-table-icon" />
                        <span>{item.title}</span>
                      </a>
                    </td>
                    <td className="col-td-remarks">{item.remarks}</td>
                    <td className="col-td-action">
                      <a
                        href={item.file}
                        download
                        className="ppt-download-btn"
                        title={`Download ${item.title}`}
                      >
                        <FaDownload /> <span>Download</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <motion.div 
            layout
            className="resources-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredCardResources.map((item) => (
                <motion.div
                  layout
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 15 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className={`resource-card card-type-${item.type}`}
                >
                  {/* Thumbnail & Badge */}
                  <div className={`resource-img-wrap ${item.type === 'book' ? 'resource-book-thumb' : ''}`}>
                    <img src={item.img} alt={item.title} className="resource-image" />
                    <span className={`card-type-badge badge-${item.type}`}>
                      {item.type === 'article' && 'Article'}
                      {item.type === 'book' && 'Book'}
                      {item.type === 'ppt' && 'PPT'}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="resource-card-title">{item.title}</h3>
                  {item.subtitle && (
                    <p className="resource-card-subtitle">{item.subtitle}</p>
                  )}

                  {/* Action Buttons */}
                  <div className="resource-card-action">
                    {item.type === 'article' ? (
                      <Link to={item.link} className="resource-action-btn btn-read-more">
                        <FaEye /> Read Article
                      </Link>
                    ) : (
                      <div className="resource-dual-actions">
                        <a
                          href={item.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="resource-action-btn btn-view-book"
                        >
                          <FaEye /> View PDF
                        </a>
                        <a
                          href={item.file}
                          download
                          className="resource-action-btn btn-download-book"
                        >
                          <FaDownload /> Download
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </div>
  );
}

export default Resources;
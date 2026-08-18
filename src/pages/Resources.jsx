import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBook, FaFilePowerpoint, FaNewspaper, FaDownload, FaEye } from 'react-icons/fa';

// ===== IMAGE RESOURCES =====
import bacterialAnalysis from '../assets/img133.png';
import terrafilTechnology from '../assets/terrafil_technology__67531.png';
import waterContamination from '../assets/Terrafil_Technology__40528.png';
import safeDrinking from '../assets/Sanitary_Survey_and__53216.png';
import simpleWaterTests from '../assets/Rain_water_Harvestin_83606.jpg';
import rainwaterHarvesting from '../assets/State_specific_Water_60654.jpg';
import filterDesigns from '../assets/Combatting_Tradition_6993.png';
import disinfectionTechniques from '../assets/Managing_Water_Quali_77112.png';

// ===== PPT THUMBNAILS =====
import pptEnvironmentalPlanning from '../assets/img111.jpg';
import pptWaterTreatment from '../assets/img121.jpg';
import pptWaterQualityKerala from '../assets/img123.jpg';
import pptWaterPollutionStandards from '../assets/pollution.png';

// ===== BOOK THUMBNAILS (AUTHENTIC PDF FRONT PAGES) =====
import bookCoverJalasuraksha from '../assets/book_cover_jalasuraksha.png';
import bookCoverParisara from '../assets/book_cover_parisara.png';
import bookCoverJalavumJeevithavum from '../assets/book_cover_jalavum_jeevithavum.png';

import './Resources.css';

// ===== RESOURCES DATA =====
const resources = [
  // ────────── ARTICLES ──────────
  {
    title: 'Terrafil Technology',
    img: terrafilTechnology,
    type: 'article',
    link: '/resource/terrafil-technology',
  },
  {
    title: 'Combating Traditional Water Pollution in Kerala – An Overview',
    img: filterDesigns,
    type: 'article',
    link: '/resource/filter-designs',
  },
  {
    title: 'Managing Water Quality in the Traditional Water Sources of Kerala',
    img: disinfectionTechniques,
    type: 'article',
    link: '/resource/disinfection-techniques',
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

  // ────────── PRESENTATIONS (PPTS) ──────────
  {
    title: 'Water Treatment Systems & Processes',
    subtitle: 'Centre for Water Research and Education',
    img: pptWaterTreatment,
    type: 'ppt',
    file: '/downloads/water treatmnet.pptx',
  },
  {
    title: 'Environmental Planning of Buildings and the Surroundings',
    subtitle: 'Centre for Water Research and Education',
    img: pptEnvironmentalPlanning,
    type: 'ppt',
    file: '/downloads/Environmaental planning of Buildings and the surroundings.pptx',
  },
  {
    title: 'Water Quality Problems in Kerala State',
    subtitle: 'Centre for Water Research and Education',
    img: pptWaterQualityKerala,
    type: 'ppt',
    file: '/downloads/Water quality problems in Kerala StatEnglish  remodelled copy dt 7.1.2026.pptx',
  },
  {
    title: 'Water Pollution and Water Quality Standards',
    subtitle: 'Centre for Water Research and Education',
    img: pptWaterPollutionStandards,
    type: 'ppt',
    file: '/downloads/water pollution and water quality standards.pptx',
  },
  {
    title: 'Bacterial Analysis of Water',
    subtitle: 'Centre for Water Research and Education',
    img: bacterialAnalysis,
    type: 'ppt',
    file: '/downloads/bacterial-analysis.ppt',
  },
  {
    slNo: 7,
    title: 'Terrafil Technology for Water Treatment',
    subtitle: 'Centre for Water Research and Education',
    img: waterContamination,
    type: 'ppt',
    file: '/downloads/Terrafil_Technology__40528.pptx',
  },
  {
    slNo: 8,
    title: 'Sanitary Survey',
    subtitle: 'Centre for Water Research and Education',
    img: safeDrinking,
    type: 'ppt',
    file: '/downloads/Sanitary_Survey_and__53216.pptx',
  },
  {
    slNo: 9,
    title: 'Rain Water Harvesting',
    subtitle: 'Centre for Water Research and Education',
    img: simpleWaterTests,
    type: 'ppt',
    file: '/downloads/Rain_water_Harvestin_83606.pptx',
  },
  {
    slNo: 10,
    title: 'State Specific Water Quality Issues and Remedial Measures',
    subtitle: 'Centre for Water Research and Education',
    img: rainwaterHarvesting,
    type: 'ppt',
    file: '/downloads/State_specific_Water_60654.pptx',
  },
  {
    slNo: 11,
    title: 'Water Treatment Plant',
    subtitle: 'Centre for Water Research and Education',
    img: pptWaterTreatment,
    type: 'ppt',
    file: '/downloads/water  treatment plant ppt.ppt',
  },
  {
    slNo: 12,
    title: 'Conservation of Traditional Water Sources of Kerala',
    subtitle: 'Centre for Water Research and Education',
    img: filterDesigns,
    type: 'ppt',
    file: '/downloads/CONSERVATION OF TRADITIONAL WATER SOURCES OF KERALA.pptx',
  },
];

function Resources() {
  const [activeTab, setActiveTab] = useState('article');

  const filteredResources = resources.filter((item) => item.type === activeTab);

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
            {activeTab === 'ppt' && 'PowerPoint Presentations (PPTs)'}
          </h2>
          <span className="resources-item-count">
            {filteredResources.length} {filteredResources.length === 1 ? 'Item' : 'Items'}
          </span>
        </div>

        {/* Grid with Animations */}
        <motion.div 
          layout
          className="resources-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredResources.map((item) => (
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
                  ) : item.type === 'book' ? (
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
                  ) : (
                    <a
                      href={item.file}
                      download
                      className="resource-action-btn btn-download-ppt"
                    >
                      <FaDownload /> Download PPT
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}

export default Resources;
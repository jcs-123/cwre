import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBook, FaFilePowerpoint, FaNewspaper, FaDownload, FaEye } from 'react-icons/fa';

// ===== IMAGE RESOURCES =====
import analysisOfWater from '../assets/analysis_of_water_qu_28562.png';
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

// ===== BOOK THUMBNAILS =====
import jalaBookCover from '../assets/rpt_cover_1.png';
import parisaraBookCover from '../assets/pub_edition_1.png';
import jalavumJeevithavumCover from '../assets/pub_edition_2.png';

import './Resources.css';

// ===== RESOURCES DATA =====
const resources = [
  // ────────── ARTICLES ──────────
  {
    title: 'Analysis of water quality parameters',
    img: analysisOfWater,
    type: 'article',
    link: '/resource/analysis-of-water',
  },
  {
    title: 'Bacterial analysis of water',
    img: bacterialAnalysis,
    type: 'article',
    link: '/resource/bacterial-analysis',
  },
  {
    title: 'Terrafil technology',
    img: terrafilTechnology,
    type: 'article',
    link: '/resource/terrafil-technology',
  },
  {
    title: 'Terrafil Technology for water treatment',
    img: waterContamination,
    type: 'article',
    link: '/resource/water-contamination',
  },
  {
    title: 'Sanitary Survey and Identification of Well Pollution and Analysis of Water Quality Using Kits',
    img: safeDrinking,
    type: 'article',
    link: '/resource/safe-drinking',
  },
  {
    title: 'Rain Water Harvesting',
    img: simpleWaterTests,
    type: 'article',
    link: '/resource/simple-tests',
  },
  {
    title: 'State specific Water quality issues – Remedial measures',
    img: rainwaterHarvesting,
    type: 'article',
    link: '/resource/rainwater-harvesting',
  },
  {
    title: 'Combatting Traditional Water Pollution in Kerala - An overview',
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

  // ────────── BOOKS & MANUALS (ONLY BOOKS) ──────────
  {
    title: 'Jalasuraksha Revised Book',
    img: jalaBookCover,
    type: 'book',
    file: '/downloads/Jalasuraksha Revised Book.pdf',
  },
  {
    title: 'പരിസരമലിനീകരണം – പ്രകൃതിയുടെ വിലാപങ്ങൾ (Parisara Malinikaranam)',
    img: parisaraBookCover,
    type: 'book',
    file: '/downloads/parisara_malinikaranam_prakruthiyude_vilapangal.pdf',
  },
  {
    title: 'ജലവും ജീവിതവും (Jalavum Jeevithavum)',
    img: jalavumJeevithavumCover,
    type: 'book',
    file: '/downloads/jalavum_jeevithavum.pdf',
  },

  // ────────── PRESENTATIONS (PPTS) ──────────
  {
    title: 'Environmental Planning of Buildings and the Surroundings',
    img: pptEnvironmentalPlanning,
    type: 'ppt',
    file: '/downloads/Environmaental planning of Buildings and the surroundings.pptx',
  },
  {
    title: 'Water Treatment Systems & Processes',
    img: pptWaterTreatment,
    type: 'ppt',
    file: '/downloads/water treatmnet.pptx',
  },
  {
    title: 'Water Quality Problems in Kerala State',
    img: pptWaterQualityKerala,
    type: 'ppt',
    file: '/downloads/Water quality problems in Kerala StatEnglish  remodelled copy dt 7.1.2026.pptx',
  },
  {
    title: 'Water Pollution and Water Quality Standards',
    img: pptWaterPollutionStandards,
    type: 'ppt',
    file: '/downloads/water pollution and water quality standards.pptx',
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
            Explore our curated collection of scientific articles, reference books &amp; study manuals, and educational PowerPoint presentations.
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
            {activeTab === 'book' && 'Books & Reference Manuals'}
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
                <div className="resource-img-wrap">
                  <img src={item.img} alt={item.title} className="resource-image" />
                  <span className={`card-type-badge badge-${item.type}`}>
                    {item.type === 'article' && 'Article'}
                    {item.type === 'book' && 'Book'}
                    {item.type === 'ppt' && 'PPT'}
                  </span>
                </div>

                {/* Title */}
                <h3 className="resource-card-title">{item.title}</h3>

                {/* Action Button */}
                <div className="resource-card-action">
                  {item.type === 'article' ? (
                    <Link to={item.link} className="resource-action-btn btn-read-more">
                      <FaEye /> Read Article
                    </Link>
                  ) : (
                    <a href={item.file} download className={`resource-action-btn btn-download-${item.type}`}>
                      <FaDownload /> Download {item.type === 'book' ? 'Book / Manual' : 'PPT'}
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
// src/pages/ResourceDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

import analysisOfWater from '../assets/analysis_of_water_qu_28562.png';
import bacterialAnalysis from '../assets/Bacterial_analysis_o_66514.png';
import terrafilTechnology from '../assets/terrafil_technology__67531.png';
import waterContamination from '../assets/Terrafil_Technology__40528.png';
import safeDrinking from '../assets/Sanitary_Survey_and__53216.png';
import simpleWaterTests from '../assets/Rain_water_Harvestin_83606.jpg';
import rainwaterHarvesting from '../assets/State_specific_Water_60654.jpg';
import filterDesigns from '../assets/Combatting_Tradition_6993.png';
import disinfectionTechniques from '../assets/Managing_Water_Quali_77112.png';

const resources = {
  'analysis-of-water': {
    title: 'Analysis of water quality parameters',
    img: analysisOfWater,
    file: 'analysis-of-water.xlsx',
  },
  'bacterial-analysis': {
    title: 'Bacterial analysis of water',
    img: bacterialAnalysis,
    file: 'bacterial-analysis.ppt',
  },
  'terrafil-technology': {
    title: 'Terrafil technology',
    img: terrafilTechnology,
    file: 'terrafil_technology.pdf',
  },
  'water-contamination': {
    title: 'Water contamination indicators',
    img: waterContamination,
    file: 'Terrafil_Technology__40528.pptx',
  },
  'safe-drinking': {
    title: 'Safe drinking methods',
    img: safeDrinking,
    file: 'Sanitary_Survey_and__53216.pptx',
  },
  'simple-tests': {
    title: 'Simple water tests',
    img: simpleWaterTests,
    file: 'Rain_water_Harvestin_83606.pptx',
  },
  'rainwater-harvesting': {
    title: 'Rainwater harvesting systems',
    img: rainwaterHarvesting,
    file: 'State_specific_Water_60654.pptx',
  },
  'filter-designs': {
    title: 'Filter designs for homes',
    img: filterDesigns,
    file: 'Combatting_Tradition_6993.pdf',
  },
  'disinfection-techniques': {
    title: 'Disinfection techniques',
    img: disinfectionTechniques,
    file: 'Managing_Water_Quali_77112.pdf',
  },
};

function ResourceDetail() {
  const { id } = useParams();
  const resource = resources[id];

  if (!resource) {
    return <div style={{ padding: '20px' }}>Resource not found.</div>;
  }

  return (
    <div style={{ padding: '30px', fontFamily: 'Segoe UI, sans-serif' }}>
      <h2 style={{ color: '#0080c0', marginBottom: '20px', textTransform: 'capitalize' }}>
        {resource.title}
      </h2>

      {/* Download Button Styled Like Your Screenshot */}
      <a
        href={`/downloads/${resource.file}`}
        download
        style={{
          display: 'block',
          backgroundColor: '#669bb0',
          color: 'white',
          textAlign: 'center',
          padding: '12px 0',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          marginBottom: '20px',
          maxWidth: '400px',
        }}
      >
        &#8681; Download File
      </a>

      {/* Resource Image */}
      <img
        src={resource.img}
        alt={resource.title}
        style={{
          width: '60%',
          maxWidth: '600px',
          height: 'auto',
          borderRadius: '6px',
          display: 'block',
          marginBottom: '20px',
        }}
      />
    </div>
  );
}

export default ResourceDetail;

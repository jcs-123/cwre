import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCogs, 
  FaMapMarkedAlt, 
  FaFlask, 
  FaWrench, 
  FaMicroscope, 
  FaBullhorn, 
  FaBookOpen, 
  FaCloudRain 
} from 'react-icons/fa';
import waterImage from '../assets/water-splash.png';
import './Services.css';

function Services() {
  const services = [
    {
      text: 'Analysis, Simulation and Design of water supply systems.',
      icon: <FaCogs />
    },
    {
      text: 'Water quality and similar water related study of a particular area based memorandum of understanding.',
      icon: <FaMapMarkedAlt />
    },
    {
      text: 'Analysis of water sample on nominal fee.',
      icon: <FaFlask />
    },
    {
      text: 'Design of pumping systems.',
      icon: <FaWrench />
    },
    {
      text: 'Conducting sponsored research activities in water conveyance & quality problems.',
      icon: <FaMicroscope />
    },
    {
      text: 'Engaging awareness activities on water related subjects.',
      icon: <FaBullhorn />
    },
    {
      text: 'Publishing booklets on water related subjects.',
      icon: <FaBookOpen />
    },
    {
      text: 'Providing consultancy works to the people on water conservation and rain water harvesting.',
      icon: <FaCloudRain />
    }
  ];

  // Framer Motion Variants for Staggered Load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const mediaVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 }
    }
  };

  return (
    <div className="services-page-wrapper">
      <div className="services-header">
        <span className="services-badge">OUR EXPERTISE</span>
        <h2 className="services-title">Services</h2>
        <div className="services-title-underline"></div>
        <p className="services-subtitle">
          Pioneering technical and scientific services to support sustainable water resource management, research, and local community needs.
        </p>
      </div>

      <div className="services-container">
        <div className="services-main-row">
          
          {/* Left: Services Grid with entry animation */}
          <motion.div 
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                variants={cardVariants}
              >
                <div className="service-icon-wrap">
                  {service.icon}
                </div>
                <p className="service-text">{service.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Media Splash & Info block */}
          <motion.div 
            className="services-media-column"
            variants={mediaVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="splash-img-wrap">
              <img src={waterImage} alt="Water Splash" className="splash-image" />
              <div className="splash-overlay"></div>
            </div>

            <div className="services-side-card">
              <h4 className="side-card-title">Professional Consultations</h4>
              <p className="side-card-text">
                Our specialized team at the Centre for Water Research &amp; Education provides design, simulation, and analytical services to academic, municipal, and private entities.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Services;

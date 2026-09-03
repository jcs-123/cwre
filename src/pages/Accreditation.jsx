import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function Accreditation() {
  return (
    <div style={{ minHeight: '80vh', padding: '40px 0 80px 0', background: '#f8fafc' }}>
      {/* Accreditation Section */}
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <motion.div
              className="accreditation-card-premium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="accreditation-badge-top">
                <span className="accreditation-glow-dot"></span> State Board Approved
              </div>
              <h2 className="accreditation-heading-text">Accreditation</h2>
              <div className="accreditation-line-divider"></div>
              <p className="accreditation-body-paragraph">
                Laboratory of the Centre is accredited by the Kerala state pollution control board as a
                commercial laboratory vide order number <strong>PCB/LAB/C12/2014</strong> dated{' '}
                <strong>13/10/2015 of Member Secretary</strong>. As such the Centre is competent to analyze
                water samples and issue certificate regarding the quality of water and also suggest remedial
                measures.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Partnership Activities Section */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <motion.div
              className="partnership-card-premium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            >
              <div className="text-center">
                <div className="partnership-badge-top">COLLABORATIONS &amp; OUTREACH</div>
                <h2 className="partnership-heading-text">Partnership Activities of CWRE</h2>
                <div className="partnership-line-divider"></div>
              </div>
              <p className="partnership-body-paragraph">
                The Centre for Water Research and Education (CWRE) joins hands with various organizations,
                both within and outside the institution, to carry out its activities in the water sector.
              </p>
              <p className="partnership-body-paragraph">
                Unnat Bharat Abhiyan (UBA), a flagship programme of the Government of India, is a key
                partner in all CWRE activities. This collaboration is designated as the <strong>CWRE–UBA Association</strong>.
              </p>
              <p className="partnership-body-paragraph">
                The Indian Society for Technical Education (ISTE) supports CWRE in all its activities,
                including providing financial support. The National Service Scheme (NSS) and the Civil
                Engineering Association (CEA) also work jointly with CWRE to fulfill its objectives.
              </p>

              <div className="partnership-partners-grid">
                <div className="partner-item-card">
                  <div className="partner-item-title">Unnat Bharat Abhiyan (UBA)</div>
                  <p className="partner-item-desc">Flagship programme of the Govt. of India (CWRE–UBA Association)</p>
                </div>
                <div className="partner-item-card">
                  <div className="partner-item-title">ISTE</div>
                  <p className="partner-item-desc">Indian Society for Technical Education - Activity &amp; Financial Support</p>
                </div>
                <div className="partner-item-card">
                  <div className="partner-item-title">NSS &amp; CEA</div>
                  <p className="partner-item-desc">National Service Scheme &amp; Civil Engineering Association</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accreditation;


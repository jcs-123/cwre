import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaEnvelope, FaTrophy } from 'react-icons/fa';
import './Feedback.css';

const feedbackVideos = [
  {
    title: 'CWRE feedback 2',
    url: 'https://www.youtube.com/embed/cjr8hwWGsfw',
  },
  {
    title: 'CWRE feedback 1',
    url: 'https://www.youtube.com/embed/VDfWqHkvxvY',
  },
];

function Feedbacks() {
  return (
    <div className="feedback-page">
      <div className="feedback-inner">

        {/* Header */}
        <motion.div
          className="fb-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="fb-label">TESTIMONIALS</span>
          <h2 className="fb-heading">Feedbacks</h2>
          <div className="fb-heading-line"></div>
          <p className="fb-desc">
            Watch what our stakeholders and collaborators have to say about the services offered by the Centre for Water Research &amp; Education.
          </p>
        </motion.div>

        {/* Video testimonials grid */}
        <div className="fb-videos-section">
          <motion.h3
            className="fb-section-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="fb-section-icon"><FaPlay /></span>
            Video Testimonials
          </motion.h3>

          <div className="fb-video-grid">
            {feedbackVideos.map((video, index) => (
              <motion.div
                key={index}
                className="fb-video-card"
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="fb-video-frame">
                  <iframe
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h4 className="fb-video-label">{video.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Competition Highlights Videos */}
        <div className="fb-videos-section" style={{ marginTop: '56px' }}>
          <motion.h3
            className="fb-section-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="fb-section-icon"><FaTrophy /></span>
            Competition Highlights
          </motion.h3>

          <div className="fb-video-grid">
            <motion.div
              className="fb-video-card"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="fb-video-frame">
                <video
                  src="/downloads/video 1.mp4"
                  controls
                  style={{ width: '100%', height: '100%', display: 'block' }}
                />
              </div>
              <h4 className="fb-video-label">+1 &amp; +2 Competition Highlights</h4>
            </motion.div>

            <motion.div
              className="fb-video-card"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              viewport={{ once: true }}
            >
              <div className="fb-video-frame">
                <video
                  src="/downloads/video 2.mp4"
                  controls
                  style={{ width: '100%', height: '100%', display: 'block' }}
                />
              </div>
              <h4 className="fb-video-label">College Competition Highlights</h4>
            </motion.div>
          </div>
        </div>

        {/* CTA strip */}
        <motion.div
          className="fb-cta-strip"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="fb-cta-text">
            <h3 className="fb-cta-title">Have feedback to share?</h3>
            <p className="fb-cta-subtitle">
              We'd love to hear about your experience with CWRE's water analysis, consultancy, or training programs.
            </p>
          </div>
          <a href="mailto:cwre@jecc.ac.in" className="fb-cta-btn">
            <FaEnvelope /> Send Feedback
          </a>
        </motion.div>

      </div>
    </div>
  );
}

export default Feedbacks;

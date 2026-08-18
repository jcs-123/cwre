import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileWord, FaFilePdf, FaDownload, FaEye, FaTimes, FaSpinner, FaExclamationTriangle, FaTrophy } from 'react-icons/fa';
import { renderAsync } from 'docx-preview';
import './College.css';

const documents = [
  {
    id: 1,
    title: 'Water Resources – Study Material (2025–2026)',
    subtitle: 'For College Students',
    fileName: 'material for 2025-2026.docx',
    url: '/downloads/material for 2025-2026.docx',
    type: 'docx',
    icon: 'word',
  },
  {
    id: 2,
    title: 'Water Resources – Question Paper (2024–2025)',
    subtitle: 'Previous Year Question Paper',
    fileName: 'question for 2024-25.pdf',
    url: '/downloads/question  for 2024-25.pdf',
    type: 'pdf',
    icon: 'pdf',
  },
];

function DocxViewer({ url, onClose }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchDocx = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch');
        const blob = await response.blob();
        if (containerRef.current) {
          await renderAsync(blob, containerRef.current, null, {
            inWrapper: true,
            ignoreWidth: false,
            ignoreHeight: false,
            breakPages: true,
            experimental: true,
            trimXmlDeclaration: true,
          });
        }
        setIsLoading(false);
      } catch (err) {
        setError(true);
        setIsLoading(false);
      }
    };
    fetchDocx();
  }, [url]);

  return (
    <div className="college-modal-viewer">
      {isLoading && (
        <div className="college-viewer-loading">
          <FaSpinner className="college-spinner-icon" />
          <p>Loading document...</p>
        </div>
      )}
      {error && !isLoading && (
        <div className="college-viewer-error">
          <FaExclamationTriangle className="college-error-icon" />
          <p>Unable to load document. Please download it instead.</p>
        </div>
      )}
      <div
        ref={containerRef}
        style={{ display: isLoading || error ? 'none' : 'block' }}
      />
    </div>
  );
}

function PdfViewer({ url }) {
  return (
    <iframe
      src={url}
      title="PDF Viewer"
      className="college-pdf-iframe"
    />
  );
}

function College() {
  const [activeDoc, setActiveDoc] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeDoc ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [activeDoc]);

  return (
    <div className="college-container">

      {/* Full-Screen Document Modal */}
      <AnimatePresence>
        {activeDoc && (
          <motion.div
            className="college-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveDoc(null)}
          >
            <motion.div
              className="college-modal-box"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="college-modal-header">
                <div className="college-modal-title-group">
                  {activeDoc.icon === 'word'
                    ? <FaFileWord className="college-modal-type-icon word-color" />
                    : <FaFilePdf className="college-modal-type-icon pdf-color" />
                  }
                  <div>
                    <h3 className="college-modal-title">{activeDoc.title}</h3>
                    <p className="college-modal-subtitle">{activeDoc.subtitle}</p>
                  </div>
                </div>
                <div className="college-modal-actions">
                  <a href={activeDoc.url} download className="college-modal-download-btn">
                    <FaDownload /> Download
                  </a>
                  <button className="college-modal-close-btn" onClick={() => setActiveDoc(null)}>
                    <FaTimes />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="college-modal-body">
                {activeDoc.type === 'docx'
                  ? <DocxViewer url={activeDoc.url} />
                  : <PdfViewer url={activeDoc.url} />
                }
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="college-content"
      >
        <h2 className="college-heading">College Competition</h2>
        <p className="college-paragraph">
          Study materials and question papers for college-level water resources programs.
        </p>

        <div className="college-documents-list">
          {documents.map((doc, i) => (
            <motion.div
              key={doc.id}
              className="college-doc-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -4 }}
            >
              {/* Icon */}
              <div className={`college-doc-icon-wrap ${doc.icon === 'word' ? 'word-bg' : 'pdf-bg'}`}>
                {doc.icon === 'word'
                  ? <FaFileWord className="college-doc-icon word-color" />
                  : <FaFilePdf className="college-doc-icon pdf-color" />
                }
              </div>

              {/* Details */}
              <div className="college-doc-info">
                <h3 className="college-doc-title">{doc.title}</h3>
                <p className="college-doc-subtitle">{doc.subtitle}</p>
              </div>

              {/* Actions */}
              <div className="college-doc-actions">
                <button
                  className="college-btn college-btn-view"
                  onClick={() => setActiveDoc(doc)}
                >
                  <FaEye className="college-btn-icon" /> View
                </button>
                <a
                  href={doc.url}
                  download
                  className="college-btn college-btn-download"
                >
                  <FaDownload className="college-btn-icon" /> Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default College;

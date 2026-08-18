import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaFileWord, FaDownload, FaSpinner, FaExclamationTriangle, FaTrophy } from 'react-icons/fa';
import { renderAsync } from 'docx-preview';
import './PlusOnePlusTwo.css';

function PlusOnePlusTwo() {
  const documentUrl = "/downloads/material for +1,+2 2025-2026..docx";
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const viewerRef = useRef(null);   // outer scrollable container
  const containerRef = useRef(null); // docx-preview render target

  // Scale the rendered docx to fit the viewer width on any screen
  const applyScale = useCallback(() => {
    const viewer = viewerRef.current;
    const docxWrap = containerRef.current?.querySelector('.docx-wrapper');
    if (!viewer || !docxWrap) return;
    const docSection = docxWrap.querySelector('section.docx');
    const docWidth = docSection ? docSection.offsetWidth : docxWrap.scrollWidth;
    const viewerWidth = viewer.clientWidth - 40; // subtract padding
    const scale = viewerWidth < docWidth ? viewerWidth / docWidth : 1;
    docxWrap.style.transform = `scale(${scale})`;
    docxWrap.style.transformOrigin = 'top center';
    docxWrap.style.marginBottom = `${-(docxWrap.offsetHeight * (1 - scale))}px`;
  }, []);

  useEffect(() => {
    const fetchDocx = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(documentUrl);
        if (!response.ok) throw new Error('Failed to fetch the document.');
        const blob = await response.blob();

        if (containerRef.current) {
          await renderAsync(blob, containerRef.current, null, {
            className: "docx-viewer",
            inWrapper: true,
            ignoreWidth: false,
            ignoreHeight: false,
            ignoreFonts: false,
            breakPages: true,
            ignoreLastRenderedPageBreak: true,
            experimental: true,
            trimXmlDeclaration: true,
            debug: false,
          });
          // Apply scale after render
          setTimeout(applyScale, 100);
        }
        setIsLoading(false);
      } catch (err) {
        console.error("Error loading docx:", err);
        setError(true);
        setIsLoading(false);
      }
    };

    fetchDocx();

    // Re-scale on window resize
    window.addEventListener('resize', applyScale);
    return () => window.removeEventListener('resize', applyScale);
  }, [documentUrl, applyScale]);

  return (
    <div className="plus-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="plus-content"
      >
        <h2 className="plus-heading">+1 & +2 Competition</h2>
        <p className="plus-paragraph">
          Welcome to the +1 & +2 programs section. Below you will find the full study material for the academic year 2025-2026 in original document format.
        </p>

        {/* Action Bar */}
        <div className="plus-action-bar">
          <div className="plus-doc-info">
            <FaFileWord className="plus-doc-icon-small" />
            <span className="plus-doc-title-small">Water Resources – Study Material</span>
          </div>
          <a href={documentUrl} download className="plus-btn plus-btn-download">
            <FaDownload className="btn-icon-spacing" /> Download
          </a>
        </div>

        {/* Document Viewer Area */}
        <div className="document-viewer-container" ref={viewerRef}>
          {isLoading && (
            <div className="viewer-loading">
              <FaSpinner className="spinner-icon" />
              <p>Loading full document view...</p>
            </div>
          )}
          {error && !isLoading && (
            <div className="viewer-error">
              <FaExclamationTriangle className="error-icon" />
              <p>Sorry, we couldn't load the document viewer.</p>
              <p>Please use the download button above to view the file.</p>
            </div>
          )}

          <div
            ref={containerRef}
            className="docx-preview-wrapper"
            style={{ display: isLoading || error ? 'none' : 'block' }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default PlusOnePlusTwo;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDownload, FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa';
import './Reports.css';

const programmesAndReports = [
  {
    slNo: 1,
    name: 'Water Quality and sanitation awareness competition for students of Jyothi Engineering College 2024-25',
    date: '14.2.2025',
    file: '/downloads/water quality awareness competetion.pdf',
  },
  {
    slNo: 2,
    name: 'Interactive workshop for officials of St. Joseph Engineering College , Pala 2025-26',
    date: '1.8.25',
    file: '/downloads/Interactive workshop St Joseph Eng College Palai (1).pdf',
  },
  {
    slNo: 3,
    name: 'NSS-CWRE, Study on water quality and sanitation of Panchayath 2025-26',
    date: '8/25',
    file: '/downloads/Water Quality Study for Panjal Panchayath (1).pdf',
  },
  {
    slNo: 4,
    name: 'Quiz for clean Kerala – All Kerala Water quality and sanitation awareness competition for +1, +2 students 2025-26',
    date: '1.11.2025',
    file: '/downloads/+1 - +2 Work.pdf',
  },
  {
    slNo: 5,
    name: 'Interactive workshop for officials of Providence Engineering College , 2025-26',
    date: '26.11.2025',
    file: '/downloads/Interactive work shop for providence Engneering  college , Chengannur.pdf',
  },
  {
    slNo: 6,
    name: 'One day interactive workshop for the officials of Unnat Bharath Abhiyan-Under Kerala Agricultural university – 2 batches2025-26',
    date: '9.1.26 and 16.1.26',
    file: '/downloads/UBA training for officals of UBA.pdf',
  },
  {
    slNo: 7,
    name: 'All Kerala water quality and sanitation awareness competition for college students 2025-26',
    date: '9.2.26',
    file: '/downloads/All kerala water quality and sanitation awareness 2025-26 - Copy.pdf',
  },
  {
    slNo: 8,
    name: 'Annual performance Report of CWRE-UBA Association illustrating all the activities during 2025-26',
    date: '2025- 2026',
    file: '/downloads/CWRE_Annual Report.pdf',
  },
  {
    slNo: 9,
    name: '10 day Internship on water quality and sanitation for the students of Markaz college , Athavanad ,Malappuram 2026-27',
    date: '7 /4/26 to 20.4.26',
    file: '/downloads/Intership for B.Sc. Microbiology studensts of Markaz College.pdf',
  },
  {
    slNo: 10,
    name: 'One day interactive workshop for the health inspectors of Palakkad and Malappuram districts- Kerala health services Department 2026-27',
    date: '29.5.2026',
    file: '/downloads/workshop.pdf',
  },
  {
    slNo: 11,
    name: 'Water Quality and Sanitation Awareness Seminar and Water Testing Camp at St. Thomas Church, Thrissur 2026-27',
    date: '7.6.2026',
    file: '/downloads/oruthulli karuthal report.pdf',
  },
  {
    slNo: 12,
    name: 'Training to faculty from St. Thomas College, Thrissur on Water Quality and Sanitation 2026-27',
    date: '2026-2027',
    file: '/downloads/Training to st .Thomas college.pdf',
  },
];

function Reports() {
  const [selectedReport, setSelectedReport] = useState(null);

  return (
    <div className="reports-page-container">
      <div className="reports-page-inner">

        {/* Heading */}
        <h1 className="reports-doc-title">Programmes and Reports</h1>

        {/* Intro Paragraph */}
        <p className="reports-doc-intro">
          CWRE- UBA association take up various programmes for the purpose of awareness creation among student community on water quality and sanitation . We also take up programmes beneficial to the community to provide safe water and better sanitation , we are giving assistance to other institutions to establish water institute . We prepare report for each and such reports are provided here
        </p>

        {/* Exact 3-Column Table */}
        <div className="reports-table-box">
          <table className="reports-grid-table">
            <thead>
              <tr>
                <th className="col-th-sl">Sl no</th>
                <th className="col-th-name">Name of Programme</th>
                <th className="col-th-date">Date</th>
              </tr>
            </thead>
            <tbody>
              {programmesAndReports.map((item) => (
                <tr key={item.slNo} className="reports-grid-row">
                  <td className="col-td-sl">{item.slNo}</td>
                  <td className="col-td-name">
                    <button
                      type="button"
                      className="reports-programme-link"
                      onClick={() => setSelectedReport(item)}
                    >
                      {item.name}
                    </button>
                  </td>
                  <td className="col-td-date">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PDF Modal Viewer */}
        <AnimatePresence>
          {selectedReport && (
            <motion.div
              className="reports-pdf-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedReport(null)}
            >
              <motion.div
                className="reports-pdf-modal-window"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="reports-modal-header-bar">
                  <div className="reports-modal-title-wrap">
                    <span className="reports-modal-sl">Sl no {selectedReport.slNo}</span>
                    <h3 className="reports-modal-heading">{selectedReport.name}</h3>
                    <span className="reports-modal-date-text">Date: {selectedReport.date}</span>
                  </div>
                  <button
                    type="button"
                    className="reports-modal-close-button"
                    onClick={() => setSelectedReport(null)}
                    aria-label="Close"
                  >
                    <FaTimes />
                  </button>
                </div>

                {/* PDF Viewer Frame */}
                <div className="reports-modal-pdf-container">
                  <iframe
                    src={`${selectedReport.file}#toolbar=1`}
                    title={selectedReport.name}
                    className="reports-modal-iframe"
                  />
                </div>

                {/* Modal Footer */}
                <div className="reports-modal-footer-bar">
                  <div className="reports-footer-info">
                    <FaFilePdf className="pdf-icon" />
                    <span>CWRE Programme Report PDF</span>
                  </div>
                  <div className="reports-footer-actions">
                    <a
                      href={selectedReport.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="reports-btn-action"
                    >
                      <FaExternalLinkAlt /> Open in New Window
                    </a>
                    <a
                      href={selectedReport.file}
                      download
                      className="reports-btn-action reports-btn-download"
                    >
                      <FaDownload /> Download PDF
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

export default Reports;

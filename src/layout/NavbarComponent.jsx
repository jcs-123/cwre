import React, { useState } from 'react';
import './NavbarComponent.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaBars } from 'react-icons/fa';
import logo from '../assets/jecc-logo.png';
import { Link, NavLink } from 'react-router-dom';

const NavbarComponent = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <div className="cwre-header-wrapper">
            {/* Top Header Section */}
            <div className="cwre-top-header">
                <Container fluid="lg">
                    <Row className="align-items-center justify-content-between g-2 py-2 py-md-3">
                        {/* Logo and Titles */}
                        <Col xs={10} sm={9} md={7} lg={7} className="d-flex align-items-center">
                            <Link to="/" className="d-flex align-items-center text-decoration-none header-brand-link">
                                <img
                                    src={logo}
                                    alt="JECC Logo"
                                    className="cwre-logo"
                                />
                                <div className="cwre-titles">
                                    <h3 className="cwre-title">Centre for Water Research &amp; Education(CWRE)</h3>
                                    <h4 className="cwre-subtitle">Jyothi Engineering College</h4>
                                </div>
                            </Link>
                        </Col>

                        {/* Mobile Toggle */}
                        <Col xs={2} sm={3} className="d-md-none text-end d-flex align-items-center justify-content-end">
                            <button 
                                className="menu-toggle" 
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label="Toggle navigation menu"
                            >
                                <FaBars />
                            </button>
                        </Col>

                        {/* Contact Info (Hidden on small mobile) */}
                        <Col md={5} lg={5} className="d-none d-md-flex flex-column justify-content-center align-items-end contact-info-col">
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <a href="mailto:cwre@jecc.ac.in">cwre@jecc.ac.in</a>
                            </div>
                            <div className="contact-item mt-1">
                                <FaPhone className="contact-icon" />
                                <span>04884 - 274198</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Full-width Horizontal Announcement Ticker Strip */}
            <div className="cwre-ticker-strip">
                <div className="ticker-track">
                    <Link to="/plus-one-plus-two" className="ticker-item-link">
                        Clean Kerala Quiz 2.0 : A Statewide Water Quality &amp; Sanitation Challenge For Higher Secondary Students (+1, +2 of Kerala Syllabus , CBSE, ICSE)
                    </Link>
                    <span className="ticker-pipe">|</span>
                    <Link to="/plus-one-plus-two" className="ticker-item-link">
                        Clean Kerala Quiz 2.0 : A Statewide Water Quality &amp; Sanitation Challenge For Higher Secondary Students (+1, +2 of Kerala Syllabus , CBSE, ICSE)
                    </Link>
                    <span className="ticker-pipe">|</span>
                    <Link to="/plus-one-plus-two" className="ticker-item-link">
                        Clean Kerala Quiz 2.0 : A Statewide Water Quality &amp; Sanitation Challenge For Higher Secondary Students (+1, +2 of Kerala Syllabus , CBSE, ICSE)
                    </Link>
                    <span className="ticker-pipe">|</span>
                </div>
            </div>

            {/* Navigation Menu Section */}
            <div className="cwre-nav-bar">
                <Container fluid="lg">
                    <Row className="g-0">
                        <Col>
                            <ul className={`cwre-menu ${menuOpen ? 'open' : ''}`}>
                                <li><NavLink to="/" end onClick={handleLinkClick} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                                <li><NavLink to="/plus-one-plus-two" onClick={handleLinkClick} className={({ isActive }) => isActive ? "active" : ""}>+1 & +2 Competition</NavLink></li>
                                <li><NavLink to="/college" onClick={handleLinkClick} className={({ isActive }) => isActive ? "active" : ""}>College Competition</NavLink></li>
                                <li><NavLink to="/publications" onClick={handleLinkClick} className={({ isActive }) => isActive ? "active" : ""}>Publications</NavLink></li>
                                <li><NavLink to="/programmes-and-reports" onClick={handleLinkClick} className={({ isActive }) => isActive ? "active" : ""}>Programmes &amp; Reports</NavLink></li>
                                <li><NavLink to="/services" onClick={handleLinkClick} className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink></li>
                                <li><NavLink to="/resources" onClick={handleLinkClick} className={({ isActive }) => isActive ? "active" : ""}>Resources</NavLink></li>
                                <li><NavLink to="/feedback" onClick={handleLinkClick} className={({ isActive }) => isActive ? "active" : ""}>Feedback</NavLink></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default NavbarComponent;

import React, { useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaFax,
    FaEnvelope,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaChevronRight,
    FaWater,
    FaArrowUp,
    FaTint,
} from 'react-icons/fa';
import './Footer.css';

/* ─── Floating Bubble Particles (CSS-driven) ─── */
const FloatingBubbles = () => {
    const bubbles = useMemo(() =>
        Array.from({ length: 18 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            size: 3 + Math.random() * 8,
            delay: Math.random() * 12,
            duration: 10 + Math.random() * 15,
            opacity: 0.08 + Math.random() * 0.15,
        })),
        []);

    return (
        <div className="ft-bubbles-container" aria-hidden="true">
            {bubbles.map((b) => (
                <span
                    key={b.id}
                    className="ft-bubble"
                    style={{
                        left: b.left,
                        width: `${b.size}px`,
                        height: `${b.size}px`,
                        animationDelay: `${b.delay}s`,
                        animationDuration: `${b.duration}s`,
                        opacity: b.opacity,
                    }}
                />
            ))}
        </div>
    );
};

/* ─── Animated Counter ─── */
const AnimatedNumber = ({ target, suffix = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 35);
        return () => clearInterval(timer);
    }, [isInView, target]);

    return <span ref={ref}>{count}{suffix}</span>;
};

/* ─── Data ─── */
const quickLinks = [
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Resources', to: '/resources' },
    { label: 'Accreditation', to: '/accrediation' },
    { label: 'Feedback', to: '/feedback' },
];

const exploreLinks = [
    { label: 'Publications', to: '/publications' },
    { label: 'Programmes & Reports', to: '/programmes-and-reports' },
    { label: 'Competition', to: '/competition' },
    { label: 'Workshop', to: '/workshop' },
    { label: '+1, +2 Programme', to: '/plus-one-plus-two' },
];

const socialLinks = [
    { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
    { icon: <FaYoutube />, href: '#', label: 'YouTube' },
];

const stats = [
    { number: 15, suffix: '+', label: 'Years of Research' },
    { number: 200, suffix: '+', label: 'Water Tests Done' },
    { number: 50, suffix: '+', label: 'Publications' },
    { number: 10, suffix: 'K+', label: 'Students Reached' },
];

/* ─── Framer Motion Variants ─── */
const containerVariant = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <>
            {/* ─── Layered Wave Divider ─── */}
            <div className="ft-wave-section">
                <svg viewBox="0 0 1440 180" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="ft-wave ft-wave-1"
                        d="M0,120 C240,40 480,160 720,80 C960,0 1200,120 1440,60 L1440,180 L0,180 Z" />
                    <path className="ft-wave ft-wave-2"
                        d="M0,140 C180,60 360,160 540,100 C720,40 900,140 1080,80 C1260,20 1380,100 1440,70 L1440,180 L0,180 Z" />
                    <path className="ft-wave ft-wave-3"
                        d="M0,100 C360,160 720,60 1080,130 C1260,160 1380,90 1440,110 L1440,180 L0,180 Z" />
                    <path className="ft-wave ft-wave-4"
                        d="M0,150 C300,100 600,170 900,120 C1100,90 1300,140 1440,100 L1440,180 L0,180 Z" />
                </svg>
            </div>

            <footer className="ft-root">
                {/* Floating Bubbles */}
                <FloatingBubbles />

                {/* Glowing Orbs */}
                <div className="ft-glow ft-glow--1" aria-hidden="true" />
                <div className="ft-glow ft-glow--2" aria-hidden="true" />
                <div className="ft-glow ft-glow--3" aria-hidden="true" />

                {/* ─── Stats Ribbon ─── */}
                <motion.div
                    className="ft-stats-ribbon"
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    {stats.map((stat, i) => (
                        <motion.div className="ft-stat-item" key={i} variants={scaleIn}>
                            <div className="ft-stat-number">
                                <AnimatedNumber target={stat.number} suffix={stat.suffix} />
                            </div>
                            <div className="ft-stat-label">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ─── Main Grid ─── */}
                <motion.div
                    className="ft-main-grid"
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Brand Column */}
                    <motion.div className="ft-col ft-col--brand" variants={fadeInUp}>
                        <div className="ft-brand-logo">
                            <span className="ft-brand-icon-wrap">
                                <FaWater className="ft-brand-icon" />
                                <span className="ft-brand-icon-ring" />
                            </span>
                            <div>
                                <h3 className="ft-brand-name">CWRE</h3>
                                <span className="ft-brand-tagline">Water Research & Education</span>
                            </div>
                        </div>
                        <p className="ft-brand-desc">
                            Centre for Water Research & Education at Jyothi Engineering College —
                            pioneering water quality science through cutting-edge research,
                            education, and community engagement since 2009.
                        </p>
                        <div className="ft-social-group">
                            {socialLinks.map((s, i) => (
                                <motion.a
                                    key={i}
                                    href={s.href}
                                    className="ft-social-link"
                                    aria-label={s.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -4, scale: 1.15 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {s.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div className="ft-col" variants={fadeInUp}>
                        <h4 className="ft-heading">
                            <FaTint className="ft-heading-icon" />
                            Quick Links
                        </h4>
                        <motion.ul
                            className="ft-links"
                            variants={containerVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {quickLinks.map((lnk, i) => (
                                <motion.li key={i} variants={slideInLeft}>
                                    <Link to={lnk.to} className="ft-link">
                                        <span className="ft-link-dot" />
                                        <span className="ft-link-text">{lnk.label}</span>
                                        <FaChevronRight className="ft-link-arrow" />
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Explore */}
                    <motion.div className="ft-col" variants={fadeInUp}>
                        <h4 className="ft-heading">
                            <FaTint className="ft-heading-icon" />
                            Explore
                        </h4>
                        <motion.ul
                            className="ft-links"
                            variants={containerVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {exploreLinks.map((lnk, i) => (
                                <motion.li key={i} variants={slideInLeft}>
                                    <Link to={lnk.to} className="ft-link">
                                        <span className="ft-link-dot" />
                                        <span className="ft-link-text">{lnk.label}</span>
                                        <FaChevronRight className="ft-link-arrow" />
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div className="ft-col ft-col--contact" variants={fadeInUp}>
                        <h4 className="ft-heading">
                            <FaTint className="ft-heading-icon" />
                            Get In Touch
                        </h4>
                        <ul className="ft-contact-list">
                            <motion.li whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
                                <span className="ft-contact-icon-wrap">
                                    <FaMapMarkerAlt />
                                </span>
                                <span className="ft-contact-text">
                                    Jyothi Engineering College, Jyothi Hills,<br />
                                    Cheruthuruthy, Thrissur&nbsp;-&nbsp;678531
                                </span>
                            </motion.li>
                            <motion.li whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
                                <span className="ft-contact-icon-wrap">
                                    <FaPhoneAlt />
                                </span>
                                <span className="ft-contact-text">04884 - 274198, 274423</span>
                            </motion.li>
                            <motion.li whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
                                <span className="ft-contact-icon-wrap">
                                    <FaFax />
                                </span>
                                <span className="ft-contact-text">04884 - 274777</span>
                            </motion.li>
                            <motion.li whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
                                <span className="ft-contact-icon-wrap">
                                    <FaEnvelope />
                                </span>
                                <a href="mailto:cwre@jecc.ac.in" className="ft-contact-text ft-contact-email-link">
                                    cwre@jecc.ac.in
                                </a>
                            </motion.li>
                        </ul>
                    </motion.div>
                </motion.div>

                {/* ─── Bottom Bar ─── */}
                <div className="ft-bottom">
                    <div className="ft-bottom__inner">
                        <p className="ft-copyright">
                            &copy; {new Date().getFullYear()} Centre for Water Research &amp; Education — Jyothi Engineering College. All rights reserved.
                        </p>
                        <motion.button
                            className="ft-top-btn"
                            onClick={scrollToTop}
                            aria-label="Back to top"
                            whileHover={{ y: -6, boxShadow: '0 12px 35px rgba(59,130,246,0.5)' }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaArrowUp />
                            <span className="ft-top-btn-ripple" />
                        </motion.button>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;

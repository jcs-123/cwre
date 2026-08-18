import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

// Arrow list item component with animation (kept for later use if needed)
const ArrowItem = ({ text }) => (
    <motion.div 
        className="d-flex align-items-start mb-2"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
    >
        <span>{text}</span>
    </motion.div>
);

const Workshop = () => {
    return (
        <Container className="py-5">
          

            {/* WORKSHOP PDF SECTION */}
            <Row>
                <Col>
                    <motion.h2
                        className="fw-bold text-success mb-3"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        One Day Workshop on Water Quality – PDF
                    </motion.h2>

                    <motion.div
                        style={{
                            height: "800px",
                            border: "2px solid #28a745",
                            borderRadius: "10px",
                            overflow: "hidden",
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <iframe
                            src="/downloads/workshop.pdf"   // 👈 rename your uploaded file to workshop.pdf and place it in public/downloads/
                            title="Workshop PDF"
                            width="100%"
                            height="100%"
                            style={{ border: "none" }}
                        ></iframe>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default Workshop;

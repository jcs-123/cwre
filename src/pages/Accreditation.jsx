import React from 'react';
import { motion } from 'framer-motion';

function Accreditation() {
  return (
    <div style={styles.container}>
      <motion.h2
        style={styles.heading}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Accreditation
      </motion.h2>

      <motion.p
        style={styles.paragraph}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
      >
        Laboratory of the Centre is accredited by the Kerala state pollution control board as a
        commercial laboratory vide order number <strong>PCB/LAB/C12/2014</strong> dated{' '}
        <strong>13/10/2015 of Member Secretary</strong>. As such the Centre is competent to analyze
        water samples and issue certificate regarding the quality of water and also suggest remedial
        measures.
      </motion.p>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px 500px 20px',
    fontFamily: 'Segoe UI, sans-serif',
    boxSizing: 'border-box',
  },
  heading: {
    color: '#0080c0',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  paragraph: {
    maxWidth: '900px',
    fontSize: '16px',
    lineHeight: '1.8',
    margin: '0 auto',
    padding: '0 10px',
    textAlign: 'justify',
  },
};

export default Accreditation;

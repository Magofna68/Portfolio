import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BouncingIcon = () => {
  const iconRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasViewed, setHasViewed] = useState(false);

  useEffect(() => {
    if (!hasViewed) {
      const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0, // Trigger when the component is fully in view
      };

      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setHasViewed(true);
        }
      }, options);

      observer.observe(iconRef.current);

      return () => {
        observer.unobserve(iconRef.current);
        observer.disconnect();
      };
    }
  }, [hasViewed]);

  const bounceTransition = {
    y: {
      duration: 0.4,
      // repeatType: 'mirror',
      // repeat: 4,
      yoyo: 2,
      ease: 'easeOut',
    },
  };

  const bounceStyling = {
    cursor: 'pointer',
    backgroundColor: 'white',
    borderRadius: '50%',
    overflow: 'visible',
    border: 'solid 2px gray',
  };
  
  return (
    <div
    style={{
      // alignItems: 'baseline',
      zIndex: 3,
        width: 'fit-content',
        height: 'fit-content',
        display: 'flex',
        overflow: 'visible',
        justifyContent: 'flex-end',
      }}
    >
      <motion.span
        ref={iconRef}
        style={bounceStyling}
        transition={bounceTransition}
        animate={{ y: isVisible ? ['20%', '-20%'] : '0%' }}
      >
        <ExpandMoreIcon fontSize="medium" />
      </motion.span>
    </div>
  );
};

export default BouncingIcon;
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./IntroAnimation.module.css";

const IntroAnimation = ({ onSkip }: { onSkip: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onSkip();
    }, 5000); // Animation duration

    return () => clearTimeout(timer);
  }, [onSkip]);

  if (!isVisible) return null;

  return (
    <motion.div
      className={styles.intro}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className={styles.animationContent}>
        <h1>Welcome to My Portfolio</h1>
        <button className={styles.ourButton} onClick={() => { setIsVisible(false); onSkip(); }}>Skip</button>
      </div>
    </motion.div>
  );
};

export default IntroAnimation;
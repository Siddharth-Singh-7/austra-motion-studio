
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUpVariants } from '@/hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: 'fade-up' | 'fade-in' | 'scale' | 'slide-left' | 'slide-right';
  delay?: number;
  className?: string;
  once?: boolean;
}

const variants = {
  'fade-up': {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      }
    }
  },
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.5
      } 
    }
  },
  'scale': {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.5
      } 
    }
  },
  'slide-left': {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.5
      } 
    }
  },
  'slide-right': {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.5
      } 
    }
  }
};

const ScrollReveal = ({
  children,
  variant = 'fade-up',
  delay = 0,
  className = '',
  once = true
}: ScrollRevealProps) => {
  const { ref, controls } = useScrollAnimation(0.1);

  const selectedVariant = variants[variant];
  
  // Apply delay to the visible state of the selected variant
  const variantWithDelay = {
    ...selectedVariant,
    visible: {
      ...selectedVariant.visible,
      transition: {
        ...selectedVariant.visible.transition,
        delay
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variantWithDelay}
      viewport={{ once }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

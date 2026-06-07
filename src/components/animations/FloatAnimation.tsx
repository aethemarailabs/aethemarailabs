'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function FloatAnimation({ 
  children, 
  delay = 0,
  duration = 4,
  yOffset = 15,
  className = ''
}: { 
  children: ReactNode; 
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -yOffset, 0] }}
      transition={{ 
        duration, 
        delay, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

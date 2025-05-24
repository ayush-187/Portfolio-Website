import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, level, color = "primary" }) => {
  const variants = {
    initial: { width: 0 },
    animate: { 
      width: `${level}%`,
      transition: { 
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill}</span>
        <span className="text-indigo-400 font-medium">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-indigo-400 rounded-full"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={variants}
        />
      </div>
    </div>
  );
};

export default SkillBar; 
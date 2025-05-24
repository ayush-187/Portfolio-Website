import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900"
        animate={{
          background: [
            'linear-gradient(to bottom right, rgb(17, 24, 39), rgb(31, 41, 55), rgb(49, 46, 129))',
            'linear-gradient(to bottom right, rgb(31, 41, 55), rgb(49, 46, 129), rgb(17, 24, 39))',
            'linear-gradient(to bottom right, rgb(49, 46, 129), rgb(17, 24, 39), rgb(31, 41, 55))',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(99,102,241,0.15),transparent)]" />
    </div>
  );
};

export default AnimatedBackground; 
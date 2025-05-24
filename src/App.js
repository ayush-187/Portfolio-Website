import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App bg-gray-900">
      <AnimatedBackground />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <About />
        <Contact />
      </motion.main>
    </div>
  );
}

export default App;

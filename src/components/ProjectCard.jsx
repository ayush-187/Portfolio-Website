import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, tech = [], links = {}, image }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Project Image */}
      {image && (
        <div className="relative h-48 overflow-hidden mb-4">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent z-10" />
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>

      {/* Tech Stack */}
      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-indigo-500 text-white rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="flex gap-4">
        {links.github && (
          <motion.a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <FaGithub size={20} />
          </motion.a>
        )}
        {links.live && (
          <motion.a
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <FaExternalLinkAlt size={20} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard; 
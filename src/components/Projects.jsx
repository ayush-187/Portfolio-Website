import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => (
  <motion.div 
    className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-2xl"
    whileHover={{ scale: 1.05 }}
  >
    <h3 className="text-xl font-semibold text-white mb-4">{project.title}</h3>
    <p className="text-gray-400 mb-4">{project.description}</p>
    <div className="mb-4">
      <h4 className="text-indigo-400 mb-2">Featured Skills:</h4>
      <div className="flex flex-wrap gap-2">
        {project.featuredSkills.map((skill, skillIndex) => (
          <span 
            key={skillIndex} 
            className="bg-indigo-500 bg-opacity-20 text-indigo-300 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech, techIndex) => (
        <span 
          key={techIndex} 
          className="bg-indigo-400 bg-opacity-20 text-indigo-400 px-3 py-1 rounded-full text-sm"
        >
          {tech}
        </span>
      ))}
    </div>
    {project.github && (
      <a 
        href={project.github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center mt-4 text-indigo-400 hover:text-indigo-300"
      >
        <FaGithub className="mr-2" />
        View on GitHub
      </a>
    )}
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Airbnb Host Optimization",
      description: "Segmented 10K+ Airbnb hosts into 6 clusters; built models (85%+ accuracy) to predict revenue and Superhost status.",
      tech: ["Python", "Scikit-learn", "Clustering", "Predictive Modeling"],
      featuredSkills: ["Data Preprocessing", "Feature Engineering", "Model Optimization", "Statistical Analysis"],
      github: "https://github.com/ayush-187/Airbnb-Superhost-Prediction"
    },
    {
      title: "Bankruptcy Prediction",
      description: "Built ML models on 64 financial predictors to predict firm bankruptcy with high accuracy, aiding risk management decisions.",
      tech: ["SAS Enterprise Miner", "Machine Learning", "Financial Analysis", "Risk Management"],
      featuredSkills: ["Model Ensemble", "Feature Selection", "Risk Assessment", "Performance Optimization"],
      github: "https://github.com/ayush-187/Bankruptcy-Prediction"
    },
    {
      title: "NLP with Disaster Tweets",
      description: "Developed a transformer-based model to classify tweets as disaster-related or not, achieving superior performance through fine-tuned DistilBERT.",
      tech: ["Python", "DistilBERT", "NLP", "Deep Learning"],
      featuredSkills: ["Text Preprocessing", "Transfer Learning", "Model Fine-tuning", "Performance Analysis"],
      github: "https://github.com/ayush-187/NLP-with-Disaster-Tweets"
    },
    {
      title: "Latea Marketing",
      description: "Conducted A/B testing for marketing strategies at Latea Bubble Tea & Coffee, analyzing consumer behavior and campaign effectiveness.",
      tech: ["Instagram Ads", "A/B Testing", "Analytics", "Marketing"],
      featuredSkills: ["Consumer Behavior Analysis", "Digital Marketing", "Data Analysis", "Campaign Optimization"],
      github: "https://github.com/ayush-187/MGMT-52850-Latea"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects; 
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaPython, FaDatabase } from 'react-icons/fa';
import { SiTensorflow, SiScikitlearn, SiTableau, SiPowerbi, SiPandas, SiNumpy, SiPytorch, SiJupyter, SiApachespark, SiGit } from 'react-icons/si';
import Projects from './Projects';
import profilePic from '../assets/profile.jpg';

const SkillCard = ({ icon: Icon, name, level, category }) => (
  <motion.div 
    className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-indigo-500/50 transition-all"
    whileHover={{ scale: 1.02, backgroundColor: "rgba(79, 70, 229, 0.1)" }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <div className="flex items-start gap-4">
      <div className="p-3 bg-indigo-500/10 rounded-lg">
        <Icon className="text-indigo-400 text-2xl" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-white font-medium">{name}</h3>
          <span className="text-sm text-indigo-400">{level}</span>
        </div>
        <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: level === 'Advanced' ? '90%' : level === 'Intermediate' ? '75%' : '60%' }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
        <p className="text-gray-400 text-sm mt-2">{category}</p>
      </div>
    </div>
  </motion.div>
);

const About = () => {
  const skills = {
    technical: [
      { 
        icon: FaPython, 
        name: 'Python', 
        level: 'Advanced',
        category: 'Programming Language'
      },
      { 
        icon: SiTensorflow, 
        name: 'TensorFlow', 
        level: 'Advanced',
        category: 'Deep Learning'
      },
      { 
        icon: SiScikitlearn, 
        name: 'Scikit-learn', 
        level: 'Advanced',
        category: 'Machine Learning'
      },
      { 
        icon: FaDatabase, 
        name: 'SQL', 
        level: 'Advanced',
        category: 'Database Management'
      },
      { 
        icon: SiTableau, 
        name: 'Tableau', 
        level: 'Advanced',
        category: 'Data Visualization'
      },
      { 
        icon: SiPowerbi, 
        name: 'Power BI', 
        level: 'Intermediate',
        category: 'Business Intelligence'
      },
      {
        icon: SiPandas,
        name: 'Pandas',
        level: 'Advanced',
        category: 'Data Analysis'
      },
      {
        icon: SiNumpy,
        name: 'NumPy',
        level: 'Advanced',
        category: 'Scientific Computing'
      },
      {
        icon: SiPytorch,
        name: 'PyTorch',
        level: 'Intermediate',
        category: 'Deep Learning'
      },
      {
        icon: SiJupyter,
        name: 'Jupyter',
        level: 'Advanced',
        category: 'Development Environment'
      },
      {
        icon: SiApachespark,
        name: 'Apache Spark',
        level: 'Intermediate',
        category: 'Big Data Processing'
      },
      {
        icon: SiGit,
        name: 'Git',
        level: 'Advanced',
        category: 'Version Control'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-20 pb-32 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-6xl font-bold text-white mb-6 tracking-tight text-center">
              AYUSH GUPTA
            </h1>
            <p className="text-2xl text-indigo-400 mb-8 text-center">
              Data Science & Analytics Professional
            </p>
          </div>

          {/* Profile and About Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2 
              }}
              className="w-64 h-64 relative rounded-2xl overflow-hidden ring-4 ring-indigo-500/50 shadow-xl shadow-indigo-500/20"
            >
              <img
                src={profilePic}
                alt="Ayush Gupta"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex-1 text-lg text-gray-300 leading-relaxed"
            >
              <p className="mb-6">
                A passionate Data Science professional with a Master's from Purdue University, 
                specializing in machine learning, NLP, and analytics. Experienced in developing 
                innovative solutions through internships at Intellicall AI, BharatPe, and CORIZO, 
                with a proven track record of driving business impact through data-driven insights.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.a 
              href="mailto:gupt1248@purdue.edu"
              className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaEnvelope /> gupt1248@purdue.edu
            </motion.a>
            <motion.a 
              href="tel:312-284-9122"
              className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaPhone /> 312-284-9122
            </motion.a>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <FaMapMarkerAlt /> W, Lafayette, IN 47906
            </motion.div>
            <motion.a 
              href="https://linkedin.com/in/ayush-gupta-a693a71bb/"
              target="_blank"
              className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaLinkedin /> LinkedIn
            </motion.a>
            <motion.a 
              href="https://github.com/ayush-187"
              target="_blank"
              className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaGithub /> GitHub
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Technical Expertise
            </motion.h2>
            <motion.p 
              className="text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              A comprehensive set of technical skills developed through academic projects, internships, and professional experience.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.technical.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Education</h2>
          
          <div className="space-y-12">
            <motion.div 
              className="bg-gray-800 bg-opacity-50 rounded-xl p-8 shadow-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-2xl font-semibold text-white">Purdue University, Daniels School of Business</h3>
                <p className="text-indigo-400">August 2025</p>
              </div>
              <p className="text-xl text-gray-300 mb-3">Master of Science in Business Analytics and Information Management</p>
              <p className="text-indigo-400 mb-4">GPA: 3.54</p>
              <div className="text-gray-400">
                <p className="font-semibold text-indigo-400 mb-2">Relevant Coursework:</p>
                <p className="leading-relaxed">
                  Web Data Analytics • Business Analytics • Python for Analytics • Data Mining • 
                  Management of Org. Data • Artificial Intelligence • Cloud Computing 1 • Machine Learning • 
                  Pricing Strategy and Analysis • IT Project Management • Financial Engineering • Spreadsheet Modeling
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-800 bg-opacity-50 rounded-xl p-8 shadow-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-2xl font-semibold text-white">Indian Institute of Technology (IIT)</h3>
                <p className="text-indigo-400">May 2024</p>
              </div>
              <p className="text-xl text-gray-300 mb-4">Bachelor of Technology, Mechanical Engineering</p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-indigo-400 mr-3">•</span>
                  <p className="text-gray-400">Capstone- Predictive model for Bone Structure Analysis applying AI, lowering prediction errors by 20%.</p>
                </div>
                <div className="flex items-start">
                  <span className="text-indigo-400 mr-3">•</span>
                  <p className="text-gray-400">Capstone- Damage Sensing in Composites using AI with an aim of reducing errors by 15%.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800 bg-opacity-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Professional Experience</h2>
          
          <div className="space-y-12">
            {/* Intellicall AI */}
            <motion.div 
              className="bg-gray-800 bg-opacity-50 rounded-xl p-8 shadow-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-2xl font-semibold text-white">Intellicall Ai Private Limited</h3>
                <p className="text-indigo-400">August 2023 – November 2023</p>
              </div>
              <p className="text-xl text-gray-300 italic mb-6">Data Science Intern</p>
              <div className="space-y-4">
                {[
                  "Developed advanced telephonic conversational agents to enhance user interactions, resulting in a 25% increase in user satisfaction scores.",
                  "Utilized generative models for high-quality text-to-speech applications, improving naturalness and clarity by 30%.",
                  "Collaborated with team of five to integrate large language models and chatbot frameworks such as RASA and Lang-chain, achieving a 40% reduction in response time."
                ].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-indigo-400 mr-3">•</span>
                    <p className="text-gray-400">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h4 className="text-indigo-400 mb-3">Featured Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {["NLP", "LLMs", "RASA Framework", "Text-to-Speech"].map((skill, index) => (
                    <span key={index} className="bg-indigo-500 bg-opacity-20 text-indigo-300 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* BharatPe */}
            <motion.div 
              className="bg-gray-800 bg-opacity-50 rounded-xl p-8 shadow-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-2xl font-semibold text-white">BharatPe</h3>
                <p className="text-indigo-400">June 2023 – July 2023</p>
              </div>
              <p className="text-xl text-gray-300 italic mb-6">Data Science Intern</p>
              <div className="space-y-4">
                {[
                  "Communicated across sectors for approval to conducted user journey recordings for new and existing users, yielding valuable insights led to a 15% increase in customer retention.",
                  "Collaborated with manager to coordinate and optimize program of Mix-Panel funnels for digital analytics, enhancing data-driven decision-making and increasing conversion rates by 20%.",
                  "Cooperated in implementing the Transaction Monitoring System (TMS) for Anti-Money Laundering (AML), employing data analytics to detect and address merchant anomalies, decreasing false positives by 25%."
                ].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-indigo-400 mr-3">•</span>
                    <p className="text-gray-400">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h4 className="text-indigo-400 mb-3">Featured Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Digital Analytics", "User Journey Analysis", "Mix-Panel", "AML Analytics"].map((skill, index) => (
                    <span key={index} className="bg-indigo-500 bg-opacity-20 text-indigo-300 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CORIZO */}
            <motion.div 
              className="bg-gray-800 bg-opacity-50 rounded-xl p-8 shadow-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-2xl font-semibold text-white">CORIZO</h3>
                <p className="text-indigo-400">June 2022 – July 2022</p>
              </div>
              <p className="text-xl text-gray-300 italic mb-6">Data Science Intern (Remote)</p>
              <div className="space-y-4">
                {[
                  "Executed strategy to create a fake news detection system, leveraging advanced techniques in natural language processing, increasing detection accuracy by 35%.",
                  "Applied machine learning to augment accuracy and effectiveness of fake news detection system, resulting in a 40% reduction in false negatives."
                ].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-indigo-400 mr-3">•</span>
                    <p className="text-gray-400">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h4 className="text-indigo-400 mb-3">Featured Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {["NLP", "Text Classification", "Machine Learning", "Model Evaluation"].map((skill, index) => (
                    <span key={index} className="bg-indigo-500 bg-opacity-20 text-indigo-300 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <Projects />

      {/* Achievements & Certifications Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800 bg-opacity-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Achievements & Certifications</h2>
          
          <div className="space-y-12">
            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-semibold text-indigo-400 mb-6">Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Awarded Player of the Tournament in 55th Inter IIT Sports Meet 2022.",
                  "Poster Presentation at the INFORMS Analytics Conference 2025.",
                  "Participated in Crossroads Classic Analytics Challenge (CCAC) 2025.",
                  "Achieved AIR 6750 in JEE ADV 2020, ranking among top 0.5% of over 1.2 million candidates nationwide."
                ].map((achievement, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start">
                      <span className="text-indigo-400 mr-3 text-2xl">•</span>
                      <p className="text-gray-400">{achievement}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-indigo-400 mb-6">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Microsoft AI Fundamentals Certified",
                  "Microsoft Azure Fundamentals Certified",
                  "Tableau Desktop Specialist Certified",
                ].map((certification, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start">
                      <span className="text-indigo-400 mr-3">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <p className="text-gray-400">{certification}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About; 
// src/components/ProjectsPage/ProjectsPage.jsx

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from './projectsData';
import ProjectCard from './ProjectCard';
import ProjectsBackground from '../AnimatedBackground/ProjectsBackground';
import Dock from '../Animations/Dock/Dock';
import TargetCursor from '../Animations/TargetCursor/TargetCursor';
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';

// Modern Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 100,
    rotateX: 45,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 80,
      damping: 20
    },
  },
};

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: -50,
    scale: 0.5
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 100,
      damping: 15
    },
  },
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const ProjectsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();
  
  const items = [
    { icon: <VscHome size={18} color="white" />, label: 'Home', onClick: () => navigate('/') },
    { icon: <VscArchive size={18} color="white"/>, label: 'Projects', onClick: () => navigate('/projects') },
    { icon: <VscAccount size={18} color="white" />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} color="white" />, label: 'Settings', onClick: () => alert('Settings!') },
  ];

  return (
    <>
      <ProjectsBackground />

      <section ref={ref} id="projects" className="relative py-20 px-5 sm:px-10 lg:px-20 bg-gradient-to-br from-[#baa794]/10 via-[#8b7355]/5 to-[#6d5a42]/10 backdrop-blur-sm">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Floating decorative elements */}
          <motion.div 
            className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-20"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div 
            className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl opacity-20"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "2s" }}
          />
          
          {/* Modern Page Title */}
          <motion.div className="text-center mb-20" variants={titleVariants}>
            <motion.h2
              className="text-6xl sm:text-7xl font-black bg-gradient-to-r from-[#baa794] to-[#8b7355] bg-clip-text text-transparent mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              My Projects
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.p
              className="text-[#6d5a42] text-xl max-w-3xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Crafting digital experiences with cutting-edge technologies and innovative design
            </motion.p>
          </motion.div>

          {/* Project Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
            style={{ perspective: "1000px" }}
          >
            {projectsData.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      
      {/* <Dock 
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      /> */}
      <TargetCursor />
    </>
  );
};

export default ProjectsPage;
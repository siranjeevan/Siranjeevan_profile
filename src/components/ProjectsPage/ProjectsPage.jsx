// src/components/ProjectsPage/ProjectsPage.jsx

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import ProjectsBackground from '../AnimatedBackground/ProjectsBackground';
import TargetCursor from '../Animations/TargetCursor/TargetCursor';

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
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    const fetchProjects = async (retryCount = 0) => {
      try {
        setError(null);
        const response = await fetch('https://sheetdb.io/api/v1/hz7g37nmzo8it', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!isMounted) return;
        
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error('No data received');
        }
        
        const formattedData = data.map((item, index) => {
          const cleanText = (text) => {
            if (!text) return '';
            return text.replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').trim();
          };
          
          const techString = cleanText(item['Tech stack'] || '');
          const techArray = techString.split(',').map(tech => tech.trim().replace(/^"|"$/g, '')).filter(tech => tech);
          
          return {
            id: index + 1,
            title: cleanText(item['Project Name']),
            description: cleanText(item['Description']),
            image: cleanText(item['ImageLink']) || `https://picsum.photos/400/300?random=${index}`,
            tech: techArray,
            liveLink: cleanText(item['Live Demo '] || item['Live Demo']),
            githubLink: cleanText(item['Github Link '] || item['Github Link'])
          };
        });
        
        if (isMounted) {
          setProjectsData(formattedData);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        if (isMounted) {
          if (retryCount < 2) {
            setTimeout(() => fetchProjects(retryCount + 1), 1000);
          } else {
            setError(error.message);
            setLoading(false);
          }
        }
      }
    };

    fetchProjects();
    
    return () => {
      isMounted = false;
    };
  }, []);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    window.location.reload();
  };

  return (
    <>
      <ProjectsBackground />

      <section ref={ref} id="projects" className="relative py-20 px-5 sm:px-10 lg:px-20 bg-gradient-to-br from-[#baa794]/10 via-[#8b7355]/5 to-[#6d5a42]/10 backdrop-blur-sm min-h-screen">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
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

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
            style={{ perspective: "1000px" }}
          >
            {loading ? (
              <div className="col-span-full text-center text-[#6d5a42] text-xl py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6d5a42] mx-auto mb-4"></div>
                Loading projects...
              </div>
            ) : error ? (
              <div className="col-span-full text-center text-[#6d5a42] text-xl py-20">
                <p className="mb-4">Failed to load projects: {error}</p>
                <button 
                  onClick={handleRetry}
                  className="px-6 py-3 bg-[#baa794] text-white rounded-lg hover:bg-[#8b7355] transition-colors"
                >
                  Retry
                </button>
              </div>
            ) : projectsData.length === 0 ? (
              <div className="col-span-full text-center text-[#6d5a42] text-xl py-20">
                <p className="mb-4">No projects found</p>
                <button 
                  onClick={handleRetry}
                  className="px-6 py-3 bg-[#baa794] text-white rounded-lg hover:bg-[#8b7355] transition-colors"
                >
                  Refresh
                </button>
              </div>
            ) : (
              projectsData.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCard project={project} />
                </motion.div>
              ))
            )}
          </motion.div>
        </motion.div>
      </section>
      
      <TargetCursor />
    </>
  );
};

export default ProjectsPage;
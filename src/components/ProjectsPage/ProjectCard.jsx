// src/components/ProjectsPage/ProjectCard.jsx

import { motion } from 'framer-motion';
import { useTouch } from '../../hooks/useTouch';

const ProjectCard = ({ project }) => {
  const isTouchDevice = useTouch();
  
  if (!project) return null;
  
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-md border border-[#baa794]/30 shadow-2xl cursor-pointer"
      whileHover={!isTouchDevice ? {
        y: -12,
        rotateY: 5,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      } : {}}
      whileTap={{ scale: 0.98 }}
      animate={isTouchDevice ? {
        y: [0, -5, 0],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      } : {}}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 transition-opacity duration-500 ${
        isTouchDevice ? 'opacity-30' : 'opacity-0 group-hover:opacity-100'
      }`} />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
        whileHover={!isTouchDevice ? { scale: 1.05 } : {}}
        transition={{ duration: 0.4 }}
        animate={isTouchDevice ? {
          scale: [1, 1.02, 1],
          transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        } : {}}
      >
        <img
          src={project.image}
          alt={project.title}
          className="max-w-full max-h-full object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </motion.div>

      <div className="p-6 space-y-4">
        <motion.h3 
          className={`text-xl font-bold transition-all duration-300 ${
            isTouchDevice 
              ? 'text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text'
              : 'text-[#6d5a42] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text'
          }`}
          whileHover={!isTouchDevice ? { scale: 1.05 } : {}}
        >
          {project.title}
        </motion.h3>
        
        <p className="text-gray-700 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {(project.tech || []).map((tech, techIndex) => (
            <motion.span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-[#baa794]/20 text-[#6d5a42] rounded-full border border-[#baa794]/30 backdrop-blur-sm"
              whileHover={!isTouchDevice ? { scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" } : {}}
              initial={{ opacity: 0, y: 20 }}
              animate={isTouchDevice ? {
                opacity: 1, y: 0,
                scale: [1, 1.05, 1],
                transition: { 
                  opacity: { delay: techIndex * 0.1 },
                  y: { delay: techIndex * 0.1 },
                  scale: { duration: 2, repeat: Infinity, delay: techIndex * 0.2, ease: "easeInOut" }
                }
              } : { opacity: 1, y: 0 }}
              transition={{ delay: techIndex * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-4 pt-2">
          {project.liveLink ? (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r text-white text-sm font-medium rounded-lg transition-all duration-200 ${
                isTouchDevice 
                  ? 'from-purple-600 to-blue-600 shadow-lg'
                  : 'from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600'
              }`}
              whileHover={!isTouchDevice ? { scale: 1.05, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)" } : {}}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <a href={project.liveLink}>Live Demo</a>
              Live Demo
            </motion.a>
          ) : (
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-300 text-gray-500 text-sm font-medium rounded-lg cursor-not-allowed">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              No Demo
            </div>
          )}
          
          {project.githubLink ? (
            <motion.a
              href={project.githubLink}
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 text-[#6d5a42] text-sm font-medium rounded-lg border border-[#baa794]/30 transition-all duration-200 ${
                isTouchDevice ? 'bg-white/70' : 'bg-white/50 hover:bg-white/70'
              }`}
              whileHover={!isTouchDevice ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <a href={project.githubLink}>GitHub</a>
              GitHub
            </motion.a>
          ) : (
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-400 text-sm font-medium rounded-lg cursor-not-allowed">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              No Repo
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
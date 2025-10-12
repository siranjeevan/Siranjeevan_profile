// src/components/AboutPage/AboutPage.jsx

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { skillsData } from './skillsData';
import AboutBackground from '../AnimatedBackground/AboutBackground';
import Dock from '../Animations/Dock/Dock';
import TargetCursor from '../Animations/TargetCursor/TargetCursor';
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';
import Jeevith from "../../assets/Jeevith3.jpg"

const AboutPage = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const storyRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isSkillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });

  const items = [
    { icon: <VscHome size={18} color="white" />, label: 'Home', onClick: () => navigate('/') },
    { icon: <VscArchive size={18} color="white"/>, label: 'Projects', onClick: () => navigate('/projects') },
    { icon: <VscAccount size={18} color="white" />, label: 'About', onClick: () => navigate('/About') },
    { icon: <VscSettingsGear size={18} color="white" />, label: 'Mentor', onClick: () => navigate('/Mentor') },
  ];

  return (
    <>
      <AboutBackground />
      
      <div className="relative min-h-screen bg-white/50">
        {/* Hero Section */}
        <motion.section 
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center px-5 sm:px-10 lg:px-20"
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.h1 
                className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-[#baa794] via-[#8b7355] to-[#6d5a42] bg-clip-text text-transparent">
                  Creative
                </span>
                <br />
                <span className="text-gray-900">Developer</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-700 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                I craft digital experiences that blend beautiful design with powerful functionality. 
                Passionate about creating solutions that make a difference.
              </motion.p>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button className="px-8 py-4 bg-gradient-to-r from-[#baa794] to-[#8b7355] text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  View My Work
                </button>
                <button className="px-8 py-4 border-2 border-[#baa794]/30 text-[#baa794] font-semibold rounded-full hover:border-[#baa794] hover:text-[#8b7355] transition-all duration-300">
                  Get In Touch
                </button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100, rotate: -10 }}
              animate={isHeroInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#baa794] to-[#8b7355] rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <img
                  src={Jeevith}
                  alt="Profile"
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          ref={skillsRef}
          className="py-32 px-5 sm:px-10 lg:px-20 relative overflow-hidden"
        >
          {/* Floating background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-xl animate-float-bubble"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-2xl animate-pulse-glow" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full blur-lg animate-wave-ripple" style={{animationDelay: '4s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <motion.div 
              className="text-center mb-24"
              initial={{ opacity: 0, y: 50 }}
              animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-7xl font-black mb-8"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isSkillsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7] bg-clip-text text-transparent">
                  My Arsenal
                </span>
              </motion.h2>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] mx-auto mb-6 rounded-full"
                initial={{ width: 0 }}
                animate={isSkillsInView ? { width: 96 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Cutting-edge technologies powering my creative solutions
              </p>
            </motion.div>
            
            {/* Modern card grid with 3D effects */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  animate={isSkillsInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -15,
                    rotateY: 10,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative"
                  style={{ perspective: '1000px' }}
                >
                  <div className="relative h-48 transform-gpu transition-all duration-500 group-hover:shadow-2xl">
                    {/* Glowing background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-pink-400/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    {/* Main card */}
                    <div className="relative h-full bg-gradient-to-br from-white via-gray-50 to-orange-50/50 rounded-3xl border border-white/60 backdrop-blur-sm overflow-hidden">
                      {/* Animated gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      {/* Content */}
                      <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                        <motion.div
                          className="text-5xl mb-4 filter drop-shadow-lg"
                          whileHover={{
                            scale: 1.2,
                            rotate: [0, -10, 10, 0],
                            transition: { duration: 0.5 }
                          }}
                        >
                          {skill.icon}
                        </motion.div>
                        
                        <h3 className="text-lg font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-3">
                          {skill.name}
                        </h3>
                        
                        {/* Skill level indicator */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-400"
                              initial={{ scale: 0 }}
                              animate={isSkillsInView ? { scale: 1 } : {}}
                              transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                            />
                          ))}
                        </div>
                        
                        {/* Hover effect text */}
                        <motion.div 
                          className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                          initial={{ y: 10 }}
                          whileHover={{ y: 0 }}
                        >
                          <span className="text-xs text-gray-600 font-medium bg-white/80 px-3 py-1 rounded-full">
                            Expert Level
                          </span>
                        </motion.div>
                      </div>
                      
                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-3xl border-2 border-orange-400/0 group-hover:border-orange-400/50 transition-all duration-300"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Bottom stats */}
            <motion.div 
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                {[
                  { number: '10+', label: 'Personal Projects Built' },
                  { number: '1+', label: 'Years Experience' },
                  { number: '15+', label: 'Technologies' },
                  { number: '100%', label: 'Passion' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isSkillsInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  >
                    <div className="text-3xl font-black bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Journey Section */}
        <motion.section 
          ref={storyRef}
          className="py-32 px-5 sm:px-10 lg:px-20 relative overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-pink-50/30 to-purple-50/40"></div>
          
          <div className="max-w-7xl mx-auto relative">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7] bg-clip-text text-transparent">
                Code Journey
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] mx-auto rounded-full"></div>
            </motion.div>
            
            {/* Compact Modern Card Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { year: '2024 ', icon: '🌱', title: 'Foundation Era', description: 'Started with web fundamentals and built interactive experiences', skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'], color: 'from-emerald-400 to-teal-500', achievements: ['First Portfolio', '10+ Static Sites', 'CSS Animations'], progress: 85 },
                {
                  year: '2024', icon: '💻', title: 'System Programming Exploration',
                  description: 'Started learning low-level programming and mastering C language fundamentals',
                  skills: ['C', 'Pointers'],
                  color: 'from-green-400 to-emerald-500',
                  achievements: ['C Language Basics', 'Problem Solving with C', 'Understanding Memory and Pointers'],
                  progress: 75
                },
                {
                  year: '2024',
                  icon: '📱',
                  title: 'iOS Development Journey',
                  description: 'Dived into Swift and built apps for iOS with modern UI and data persistence',
                  skills: ['Swift', 'SwiftUI', 'Xcode', 'Firebase', 'SwiftData'],
                  color: 'from-orange-400 to-pink-500',
                  achievements: ['iOS App Development', 'SwiftUI Components', 'Local Data Persistence'],
                  progress: 85
                },
                {
                  year: '2025',
                  icon: '🧠',
                  title: 'Advanced Programming with C++',
                  description: 'Diving deep into object-oriented and high-performance programming with C++',
                  skills: ['C++', 'OOP', 'STL', 'Data Structures', 'Algorithms'],
                  color: 'from-indigo-400 to-blue-600',
                  achievements: ['OOP Mastery', 'Algorithm Optimization', 'Competitive Programming'],
                  progress: 80
                },
                {
                  year: '2025',
                  icon: '🧩',
                  title: 'Data Structures & Algorithms',
                  description: 'Mastering core computer science concepts for efficient problem-solving and optimization',
                  skills: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 'Graphs', 'Sorting & Searching'],
                  color: 'from-teal-400 to-emerald-600',
                  achievements: ['Algorithmic Thinking', 'Code Optimization', 'Competitive Problem Solving'],
                  progress: 90
                },
                {
                  year: '2025',
                  icon: '⚛️',
                  title: 'Frontend Evolution with React & Tailwind CSS',
                  description: 'Building fast, responsive, and elegant UIs with React components and Tailwind styling',
                  skills: ['React.js', 'Tailwind CSS', 'Vite', 'Hooks', 'Context API'],
                  color: 'from-sky-400 to-blue-600',
                  achievements: ['Responsive UI Design', 'Reusable Components', 'Modern Frontend Architecture'],
                  progress: 95
                },
                {
                  year: '2025',
                  icon: '🛠️',
                  title: 'Real-World React Projects',
                  description: 'Applying React skills to build full-featured, production-ready applications',
                  skills: ['React.js', 'Tailwind CSS', 'React Router', 'Axios', 'State Management', 'Git'],
                  color: 'from-indigo-400 to-purple-500',
                  achievements: ['Portfolio Website', 'E-commerce App', 'Dashboard & Admin Panel', 'API Integration'],
                  progress: 100
                }
              ].map((phase, index) => (
                <motion.div
                  key={phase.year}
                  initial={{ opacity: 0, y: 100, rotateX: -30 }}
                  animate={isStoryInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ duration: 1, delay: index * 0.15, type: "spring", bounce: 0.4 }}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.03,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative"
                  style={{ perspective: '1000px' }}
                >
                  {/* Multi-layer Glow Effects */}
                  <div className={`absolute -inset-4 bg-gradient-to-r ${phase.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-700`}></div>
                  <div className={`absolute -inset-2 bg-gradient-to-r ${phase.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500`}></div>
                  
                  {/* Main Card with Glass Morphism */}
                  <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl overflow-visible transform-gpu transition-all duration-500 group-hover:shadow-3xl">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-5 rounded-3xl overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 animate-gradient-xy"></div>
                    </div>
                    
                    {/* Floating Year Badge */}
                    <motion.div 
                      className={`absolute -top-3 -right-3 w-14 h-10 bg-gradient-to-r ${phase.color} rounded-xl flex items-center justify-center text-white font-black text-xs shadow-xl transform rotate-12 z-30`}
                      whileHover={{ 
                        rotate: 0, 
                        scale: 1.1
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {phase.year}
                    </motion.div>
                    
                    {/* Animated Decorative Elements */}
                    <motion.div 
                      className="absolute top-4 left-4 w-6 h-6 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ 
                        duration: 6, 
                        repeat: Infinity, 
                        ease: "linear"
                      }}
                    ></motion.div>
                    <motion.div 
                      className="absolute bottom-4 right-4 w-4 h-4 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full"
                      animate={{ 
                        y: [0, -5, 0],
                        opacity: [0.2, 0.5, 0.2]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut"
                      }}
                    ></motion.div>
                    
                    {/* Content Container */}
                    <div className="relative z-10 p-6 pt-8">
                      {/* Icon & Title Section */}
                      <div className="text-center mb-6">
                        <motion.div 
                          className="text-4xl mb-3 filter drop-shadow-lg"
                          whileHover={{ 
                            rotate: 360,
                            scale: 1.2
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          {phase.icon}
                        </motion.div>
                        
                        <motion.h3 
                          className={`text-xl font-black bg-gradient-to-r ${phase.color} bg-clip-text text-transparent mb-2`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                        >
                          {phase.title}
                        </motion.h3>
                        
                        <motion.p 
                          className="text-gray-600 text-sm leading-relaxed"
                          initial={{ opacity: 0 }}
                          animate={isStoryInView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                        >
                          {phase.description}
                        </motion.p>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-semibold text-gray-600">Progress</span>
                          <span className={`text-xs font-bold bg-gradient-to-r ${phase.color} bg-clip-text text-transparent`}>{phase.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <motion.div 
                            className={`h-full bg-gradient-to-r ${phase.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={isStoryInView ? { width: `${phase.progress}%` } : {}}
                            transition={{ duration: 1, delay: index * 0.1 + 0.6, ease: "easeOut" }}
                          ></motion.div>
                        </div>
                      </div>
                      
                      {/* Skills with Stagger Animation */}
                      <div className="mb-4">
                        <h4 className="text-gray-700 font-semibold mb-2 text-xs uppercase tracking-wider flex items-center gap-1">
                          <span className={`w-2 h-2 bg-gradient-to-r ${phase.color} rounded-full`}></span>
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {phase.skills.slice(0, 3).map((skill, skillIndex) => (
                            <motion.span
                              key={skill}
                              className={`px-2 py-1 bg-gradient-to-r ${phase.color} rounded-full text-white text-xs font-medium shadow-sm cursor-pointer`}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={isStoryInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ 
                                duration: 0.4, 
                                delay: index * 0.1 + skillIndex * 0.05 + 0.7,
                                type: "spring"
                              }}
                              whileHover={{ scale: 1.1, y: -2 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                          {phase.skills.length > 3 && (
                            <span className="px-2 py-1 bg-gray-200 rounded-full text-gray-600 text-xs font-medium">
                              +{phase.skills.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Achievements with Slide Animation */}
                      <div>
                        <h4 className="text-gray-700 font-semibold mb-2 text-xs uppercase tracking-wider flex items-center gap-1">
                          <span className={`w-2 h-2 bg-gradient-to-r ${phase.color} rounded-full animate-pulse`}></span>
                          Highlights
                        </h4>
                        <div className="space-y-1">
                          {phase.achievements.slice(0, 2).map((achievement, achIndex) => (
                            <motion.div
                              key={achievement}
                              className="flex items-center gap-2 text-gray-600 group/item"
                              initial={{ opacity: 0, x: -20 }}
                              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ 
                                duration: 0.4, 
                                delay: index * 0.1 + achIndex * 0.1 + 0.9
                              }}
                            >
                              <div className={`w-1.5 h-1.5 bg-gradient-to-r ${phase.color} rounded-full`}></div>
                              <span className="text-xs font-medium">
                                {achievement}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Animated Border Effect */}
                    <motion.div 
                      className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${phase.color} opacity-0 group-hover:opacity-60`}
                      style={{
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'xor'
                      }}
                      animate={{
                        background: [
                          `linear-gradient(0deg, var(--tw-gradient-stops))`,
                          `linear-gradient(360deg, var(--tw-gradient-stops))`
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Bottom summary */}
            <motion.div 
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-4">
                  The Journey Continues
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  From humble beginnings with HTML to exploring AI and cloud technologies, 
                  every step has been a building block towards creating meaningful digital experiences.
                </p>
                
                {/* Floating icons */}
                <div className="flex justify-center gap-4 mt-6">
                  {['🚀', '✨', '🌱', '🏆'].map((icon, index) => (
                    <motion.div
                      key={icon}
                      className="text-3xl"
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
                      style={{ animationDelay: `${1.8 + index * 0.1}s` }}
                    >
                      {icon}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
      
      <Dock 
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
      <TargetCursor />
    </>
  );
};

export default AboutPage;
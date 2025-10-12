// src/components/MentorPage/MentorCard.jsx

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useTouch } from '../../hooks/useTouch';

const MentorCard = ({ mentor }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);
  const isTouchDevice = useTouch();

  useEffect(() => {
    if (!isTouchDevice) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setTimeout(() => setIsFlipped(true), 500);
        } else {
          setIsInView(false);
          setIsFlipped(false);
        }
      },
      { threshold: 0.6 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [isTouchDevice]);

  const handleClick = () => {
    if (isTouchDevice) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative w-80 h-96 cursor-pointer"
      style={{ perspective: '1000px' }}
      onHoverStart={!isTouchDevice ? () => setIsHovered(true) : undefined}
      onHoverEnd={!isTouchDevice ? () => setIsHovered(false) : undefined}
      onClick={handleClick}
      whileHover={!isTouchDevice ? {
        scale: 1.05,
        transition: { duration: 0.3 },
      } : {}}
      animate={isTouchDevice && isInView ? {
        scale: [1, 1.02, 1],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      } : {}}
      whileTap={{ scale: 0.98 }}
    >
      {/* The card that flips */}
      <motion.div
        className="absolute inset-0 w-full h-full transition-transform duration-700 [transform-style:preserve-3d]"
        animate={{ rotateY: (isTouchDevice ? isFlipped : isHovered) ? 180 : 0 }}
      >
        {/* Touch indicator for mobile */}
        {isTouchDevice && !isFlipped && (
          <motion.div
            className="absolute top-4 right-4 z-20 bg-white/90 rounded-full p-2 shadow-lg"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </motion.div>
        )}
        {/* FRONT OF THE CARD */}
        <div className="absolute inset-0 w-full h-full rounded-3xl shadow-2xl overflow-hidden [backface-visibility:hidden] bg-gradient-to-br from-purple-100 via-white to-green-100">
          {/* Animated background particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <div
                key={`front-sparkle-${i}`}
                className="absolute animate-sparkle"
                style={{
                  left: `${Math.random() * 90 + 5}%`,
                  top: `${Math.random() * 90 + 5}%`,
                  width: '4px',
                  height: '4px',
                  backgroundColor: i % 2 === 0 ? '#8b5cf6' : '#10b981',
                  clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                  animationDelay: `${i * 0.7}s`
                }}
              />
            ))}
          </div>
          
          <img src={mentor.image} alt={mentor.name} className="w-full h-2/3 object-cover" />
          <div className="p-4 h-1/3 flex flex-col justify-center relative z-10">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">{mentor.name}</h3>
            <p className="text-sm text-gray-700">{mentor.role}</p>
          </div>
        </div>

        {/* BACK OF THE CARD */}
        <div className="absolute inset-0 w-full h-full rounded-3xl shadow-2xl p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-green-100 via-white to-purple-100">
          {/* Back button for touch devices */}
          {isTouchDevice && isFlipped && (
            <motion.button
              className="absolute top-4 right-4 z-20 bg-white/90 rounded-full p-2 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          )}
          {/* Animated background particles for back */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div
                key={`back-bubble-${i}`}
                className="absolute animate-float-bubble rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  width: `${Math.random() * 10 + 6}px`,
                  height: `${Math.random() * 10 + 6}px`,
                  backgroundColor: i % 2 === 0 ? '#8b5cf6' : '#10b981',
                  animationDelay: `${i * 1.2}s`
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent mb-2">{mentor.name}</h3>
            <p className="text-gray-700 mb-4 text-sm italic">"{mentor.bio}"</p>
            <div className="flex flex-wrap gap-2">
              {mentor.expertise.map((skill, index) => (
                <span
                  key={skill}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors duration-200 ${
                    index % 2 === 0 
                      ? 'text-purple-700 bg-purple-100/80 border-purple-200/50 hover:bg-purple-200/80'
                      : 'text-green-700 bg-green-100/80 border-green-200/50 hover:bg-green-200/80'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MentorCard;
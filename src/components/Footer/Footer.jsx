import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp , FaInstagram } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94]
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/siranjeevan", label: "GitHub", color: "#333333" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/siranjeevan-c-b0540b307/", label: "LinkedIn", color: "#0077B5" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/heartless_jeevith/", label: "Instagram", color: "#1DA1F2" },
    { icon: <FaEnvelope />, href: "mailto:smartjeevith2k@gmail.com", label: "Email", color: "#EA4335" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={ref} style={{
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 25%, #f0f0f0 50%, #f8f8f8 75%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '400px'
    }}>
      {/* Moving Background Animations */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(100, 100, 100, 0.1), transparent)',
          borderRadius: '50%',
          filter: 'blur(30px)',
          pointerEvents: 'none'
        }}
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -100, 150, 0],
          scale: [1, 1.5, 0.8, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(150, 150, 150, 0.08), transparent)',
          borderRadius: '50%',
          filter: 'blur(25px)',
          pointerEvents: 'none'
        }}
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 120, -80, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '100px',
          height: '100px',
          background: 'rgba(200, 200, 200, 0.2)',
          borderRadius: '50%',
          filter: 'blur(20px)',
          pointerEvents: 'none'
        }}
        animate={{
          x: [0, 120, -60, 0],
          y: [0, -100, 80, 0],
          opacity: [0.3, 0.7, 0.2, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 20px 40px',
          position: 'relative',
          zIndex: 1
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Main Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
          marginBottom: '60px'
        }}>
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              style={{
                fontSize: '3.5rem',
                fontWeight: '800',
                background: 'linear-gradient(45deg, #333333, #555555, #777777)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '20px',
                letterSpacing: '-3px',
                textShadow: '0 0 30px rgba(0, 0, 0, 0.2)'
              }}
              whileHover={{ 
                scale: 1.05,
                textShadow: '0 0 50px rgba(0, 0, 0, 0.3)'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                backgroundPosition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              Jeevith
            </motion.h2>
            <p style={{
              color: '#666666',
              fontSize: '1.2rem',
              lineHeight: '1.6',
              marginBottom: '30px',
              opacity: 0.9
            }}>
              Crafting digital experiences with passion and precision. Let's build something amazing together.
            </p>
            <motion.a
              href="mailto:jeevith@example.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '15px 30px',
                background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.05), rgba(100, 100, 100, 0.05))',
                border: '2px solid #333333',
                borderRadius: '50px',
                color: '#333333',
                textDecoration: 'none',
                fontWeight: '600',
                backdropFilter: 'blur(15px)',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)'
              }}
              whileHover={{
                background: 'linear-gradient(45deg, #333333, #555555)',
                color: '#ffffff',
                scale: 1.05,
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2), 0 0 30px rgba(100, 100, 100, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope style={{ marginRight: '10px' }} />
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 style={{
              color: '#333333',
              fontSize: '1.8rem',
              fontWeight: '700',
              marginBottom: '30px'
            }}>
              Connect With Me
            </h3>
            <div style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '70px',
                    height: '70px',
                    background: 'rgba(0, 0, 0, 0.05)',
                    borderRadius: '25px',
                    color: '#666666',
                    fontSize: '1.8rem',
                    textDecoration: 'none',
                    backdropFilter: 'blur(15px)',
                    border: '2px solid rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)'
                  }}
                  whileHover={{
                    background: social.color,
                    color: '#ffffff',
                    scale: 1.2,
                    rotate: 360,
                    boxShadow: `0 0 30px ${social.color}, 0 0 60px ${social.color}40`
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '40px',
            borderTop: '1px solid rgba(0, 0, 0, 0.1)',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <p style={{
            color: 'rgba(100, 100, 100, 0.8)',
            fontSize: '1rem'
          }}>
            © {new Date().getFullYear()} Jeevith. Crafted with ❤️ using React
          </p>
          
          <motion.button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px',
              background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.05), rgba(100, 100, 100, 0.05))',
              border: '2px solid #333333',
              borderRadius: '50%',
              color: '#333333',
              cursor: 'pointer',
              backdropFilter: 'blur(15px)',
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)'
            }}
            whileHover={{
              background: 'linear-gradient(45deg, #333333, #555555)',
              color: '#ffffff',
              scale: 1.2,
              boxShadow: '0 0 40px rgba(0, 0, 0, 0.3), 0 0 80px rgba(100, 100, 100, 0.2)'
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  );
};

// Add CSS keyframes for background animation
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;
if (!document.head.querySelector('style[data-footer-animations]')) {
  styleSheet.setAttribute('data-footer-animations', 'true');
  document.head.appendChild(styleSheet);
}

export default Footer;
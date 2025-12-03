import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorTrail, setCursorTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const trailIdRef = useRef(0);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = (window.scrollY / scrollableHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let animationFrame: number;
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Add to trail with throttling
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      
      animationFrame = requestAnimationFrame(() => {
        setCursorTrail((prev) => {
          const newPoint = { x: e.clientX, y: e.clientY, id: trailIdRef.current++ };
          const updated = [...prev, newPoint];
          // Keep only last 6 points
          return updated.slice(-6);
        });
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Check for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.onclick) {
        setIsHovering(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-netflix-black text-netflix-white cursor-none">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
      />

      {/* Floating Particles Background */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          style={{
            left: `${(i * 3.33) % 100}%`,
            top: `${(i * 7) % 100}%`,
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            background: i % 3 === 0 ? '#E50914' : '#FFFFFF',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Global Custom Cursor with Data Visualization Theme */}
      <div className="fixed pointer-events-none z-[9999]" style={{ left: cursorPosition.x, top: cursorPosition.y }}>
        {/* Trailing particles */}
        {cursorTrail.map((point, index) => {
          const size = (index + 1) * 2.5;
          const opacity = (index + 1) / Math.max(cursorTrail.length, 1) * 0.5;
          return (
            <motion.div
              key={point.id}
              className="absolute rounded-full bg-netflix-red"
              style={{
                width: size,
                height: size,
                left: -size / 2,
                top: -size / 2,
                opacity,
                boxShadow: `0 0 ${size * 2}px rgba(229, 9, 20, 0.5)`,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          );
        })}
        
        {/* Main cursor - Data point with glow */}
        <motion.div
          className="absolute"
          animate={{
            x: -12,
            y: -12,
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute rounded-full border-2 border-netflix-red"
            style={{
              width: 24,
              height: 24,
              left: -12,
              top: -12,
              boxShadow: '0 0 20px rgba(229, 9, 20, 0.8), 0 0 40px rgba(229, 9, 20, 0.4)',
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 3, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          
          {/* Center dot */}
          <div
            className="absolute rounded-full bg-netflix-red"
            style={{
              width: 8,
              height: 8,
              left: -4,
              top: -4,
              boxShadow: '0 0 15px rgba(229, 9, 20, 1), 0 0 30px rgba(229, 9, 20, 0.6)',
            }}
          />
          
          {/* Data connection lines */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute bg-netflix-red"
              style={{
                width: 1,
                height: 15,
                left: -0.5,
                top: -15 - i * 5,
                opacity: 0.4,
                transformOrigin: 'bottom center',
              }}
              animate={{
                height: [15, 20, 15],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar activeSection={activeSection} />
          
          <main>
            <section id="home">
              <Hero />
            </section>
            
            <section id="about">
              <About />
            </section>
            
            <section id="experience">
              <Experience />
            </section>
            
            <section id="skills">
              <Skills />
            </section>
            
            <section id="projects">
              <Projects />
            </section>
            
            <section id="contact">
              <Contact />
            </section>
          </main>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App; 
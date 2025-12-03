import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import TypingAnimation from './TypingAnimation';

// 3D Data Visualization Component with mouse interaction
const DataVisualization: React.FC<{ mousePosition: { x: number; y: number } }> = ({ mousePosition }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 + mousePosition.y * 0.3;
      meshRef.current.rotation.y += 0.01 + mousePosition.x * 0.2;
    }
    if (groupRef.current) {
      // Parallax effect based on mouse position
      groupRef.current.rotation.y += 0.005 + mousePosition.x * 0.1;
      groupRef.current.rotation.x = mousePosition.y * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main data sphere */}
      <Sphere ref={meshRef} args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#E50914"
          wireframe
          transparent
          opacity={0.3}
        />
      </Sphere>

      {/* Orbiting data points */}
      {Array.from({ length: 50 }).map((_, i) => (
        <Sphere
          key={i}
          args={[0.02, 8, 8]}
          position={[
            Math.cos(i * 0.5) * 2,
            Math.sin(i * 0.3) * 2,
            Math.sin(i * 0.7) * 2,
          ]}
        >
          <meshStandardMaterial
            color={i % 3 === 0 ? "#E50914" : "#FFFFFF"}
            emissive={i % 3 === 0 ? "#E50914" : "#FFFFFF"}
            emissiveIntensity={0.2}
          />
        </Sphere>
      ))}

      {/* Connecting lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <line key={`line-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[
                new Float32Array([
                  Math.cos(i * 0.8) * 1.5,
                  Math.sin(i * 0.6) * 1.5,
                  Math.sin(i * 0.4) * 1.5,
                  Math.cos(i * 1.2) * 1.5,
                  Math.sin(i * 1.0) * 1.5,
                  Math.sin(i * 0.8) * 1.5,
                ]),
                3
              ]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#E50914" opacity={0.3} transparent />
        </line>
      ))}
    </group>
  );
};

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        // Normalize to -1 to 1 range
        const normalizedX = (x - 0.5) * 2;
        const normalizedY = (y - 0.5) * 2;
        
        setMousePosition({ x: normalizedX, y: normalizedY });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient with parallax */}
      <motion.div 
        className="absolute inset-0 netflix-gradient"
        animate={{
          backgroundPosition: `${50 + mousePosition.x * 5}% ${50 + mousePosition.y * 5}%`,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      
      {/* 3D Canvas with parallax */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <DataVisualization mousePosition={mousePosition} />
        </Canvas>
      </motion.div>

      {/* Content with subtle parallax */}
      <motion.div 
        ref={contentRef}
        className="relative z-10 text-center container-custom px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: 1, 
          x: mousePosition.x * 10,
          y: 50 + mousePosition.y * 10,
        }}
        transition={{ 
          opacity: { duration: 0.8, delay: 0.2 },
          x: { type: "spring", stiffness: 100, damping: 30 },
          y: { type: "spring", stiffness: 100, damping: 30 },
        }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-7xl md:text-9xl lg:text-[12rem] font-bold mb-6"
          >
            <span className="gradient-text">PRADEEP GATTI</span>
          </motion.h1>

          {/* Subtitle with Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl text-netflix-gray mb-8 min-h-[3rem]"
          >
            <TypingAnimation 
              text="Data Analyst | Transforming Data into Actionable Insights" 
              speed={30}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-netflix-light-gray mb-12 max-w-2xl mx-auto"
          >
            Analytical and results-driven professional with 5 years of experience 
            in data wrangling, statistical analysis, and dynamic visualization.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="netflix-button text-lg px-10 py-4"
            >
              View My Work
            </motion.button>
            <a
              href="/PRADEEP_GATTI_ResumeDataAnalyst.pdf"
              download
              className="netflix-button-outline text-lg px-10 py-4 flex items-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-netflix-red rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-netflix-red rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 
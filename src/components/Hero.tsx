import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// 3D Data Visualization Component
const DataVisualization: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y += 0.01;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
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
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 netflix-gradient" />
      
      {/* 3D Canvas */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <DataVisualization />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-netflix-white">PRADEEP GATTI</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-netflix-gray mb-8"
          >
            Data Analyst | Transforming Data into Actionable Insights
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-netflix-light-gray mb-12 max-w-2xl mx-auto"
          >
            Analytical and results-driven professional with 4.5+ years of experience 
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
              href="/ResumeDataAnalyst.pdf"
              download
              className="netflix-button-outline text-lg px-10 py-4 flex items-center"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
      </div>
    </section>
  );
};

export default Hero; 
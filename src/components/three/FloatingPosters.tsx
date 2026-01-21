import { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { getPostersFor3D } from '@/config/posters';

interface PosterMeshProps {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  scale?: number;
}

function PosterMesh({ position, rotation, color, scale = 1 }: PosterMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = rotation[1] + Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} rotation={rotation}>
        <boxGeometry args={[2 * scale, 2.8 * scale, 0.05]} />
        <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
      </mesh>
    </Float>
  );
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(300 * 3);
    const colors = new Float32Array(300 * 3);
    
    for (let i = 0; i < 300; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      colors[i * 3] = 0.9 + Math.random() * 0.1;
      colors[i * 3 + 1] = 0.2 + Math.random() * 0.3;
      colors[i * 3 + 2] = 0.5 + Math.random() * 0.5;
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function GlowRing() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.1;
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
    }
  });

  return (
    <mesh ref={ringRef} position={[0, 0, -5]}>
      <torusGeometry args={[8, 0.03, 16, 100]} />
      <meshBasicMaterial color="#ff4d9d" transparent opacity={0.6} />
    </mesh>
  );
}

export default function FloatingPosters() {
  const posterColors = ['#ff4d9d', '#c44dff', '#ff6b9d', '#9d4dff', '#ff8fc4'];

  const posterConfigs = [
    { position: [-4, 0.5, 0] as [number, number, number], rotation: [0, 0.3, 0] as [number, number, number], scale: 1.1 },
    { position: [-1.5, -0.3, 1] as [number, number, number], rotation: [0, 0.1, 0] as [number, number, number], scale: 0.9 },
    { position: [1.5, 0.2, 0.5] as [number, number, number], rotation: [0, -0.15, 0] as [number, number, number], scale: 1 },
    { position: [4, -0.1, -0.5] as [number, number, number], rotation: [0, -0.25, 0] as [number, number, number], scale: 1.05 },
    { position: [0, 0.8, -1.5] as [number, number, number], rotation: [0, 0, 0] as [number, number, number], scale: 0.85 },
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ff4d9d" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#9d4dff" />
      <spotLight
        position={[0, 10, 5]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        color="#ff4d9d"
      />
      
      <Particles />
      <GlowRing />
      
      {posterConfigs.map((config, index) => (
        <PosterMesh
          key={index}
          position={config.position}
          rotation={config.rotation}
          color={posterColors[index % posterColors.length]}
          scale={config.scale}
        />
      ))}

      {/* Simple floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#0a0a15" metalness={0.8} roughness={0.2} />
      </mesh>
    </>
  );
}
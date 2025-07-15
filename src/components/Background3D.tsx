
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const FloatingGeometry = ({ position, geometry, color }: { position: [number, number, number], geometry: THREE.BufferGeometry, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position} geometry={geometry}>
      <meshPhongMaterial color={color} transparent opacity={0.7} />
    </mesh>
  );
};

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={particlesRef} geometry={particlesGeometry}>
      <pointsMaterial size={0.1} color="#ff007c" transparent opacity={0.6} />
    </points>
  );
};

const Background3D = () => {
  const geometries = useMemo(() => ({
    box: new THREE.BoxGeometry(1, 1, 1),
    sphere: new THREE.SphereGeometry(0.5, 32, 32),
    torus: new THREE.TorusGeometry(0.6, 0.2, 16, 100),
    cone: new THREE.ConeGeometry(0.5, 1, 32),
    octahedron: new THREE.OctahedronGeometry(0.5),
  }), []);

  const shapes = useMemo(() => [
    { position: [-15, 5, -10] as [number, number, number], geometry: geometries.box, color: '#ff007c' },
    { position: [15, -3, -15] as [number, number, number], geometry: geometries.sphere, color: '#00cfff' },
    { position: [-10, -8, -8] as [number, number, number], geometry: geometries.torus, color: '#ff007c' },
    { position: [12, 8, -12] as [number, number, number], geometry: geometries.cone, color: '#00cfff' },
    { position: [0, 10, -20] as [number, number, number], geometry: geometries.octahedron, color: '#ff007c' },
    { position: [-8, 0, -18] as [number, number, number], geometry: geometries.sphere, color: '#00cfff' },
    { position: [8, -5, -6] as [number, number, number], geometry: geometries.box, color: '#ff007c' },
  ], [geometries]);

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[20, 20, 20]} intensity={0.8} color="#ff007c" />
        <pointLight position={[-20, -20, 20]} intensity={0.8} color="#00cfff" />
        <directionalLight position={[0, 10, 5]} intensity={0.5} color="#ffffff" />
        
        <ParticleField />
        
        {shapes.map((shape, index) => (
          <FloatingGeometry
            key={index}
            position={shape.position}
            geometry={shape.geometry}
            color={shape.color}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default Background3D;

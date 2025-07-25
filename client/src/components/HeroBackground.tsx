
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const WireframeSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Create wireframe geometry
  const geometry = useMemo(() => {
    const sphere = new THREE.SphereGeometry(2, 32, 32);
    const wireframe = new THREE.WireframeGeometry(sphere);
    return { sphere, wireframe };
  }, []);

  // Animate rotation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
    if (linesRef.current) {
      linesRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });

  return (
    <group>
      {/* Main wireframe sphere */}
      <lineSegments ref={linesRef} geometry={geometry.wireframe}>
        <lineBasicMaterial 
          color="#ff007c" 
          transparent 
          opacity={0.6}
          linewidth={2}
        />
      </lineSegments>
      
      {/* Inner glowing sphere */}
      <mesh ref={meshRef} geometry={geometry.sphere} scale={0.8}>
        <meshBasicMaterial 
          color="#00cfff" 
          transparent 
          opacity={0.1}
          wireframe
        />
      </mesh>

      {/* Particles */}
      <points>
        <sphereGeometry args={[3, 100]} />
        <pointsMaterial 
          color="#ff007c" 
          size={0.02} 
          transparent 
          opacity={0.8}
        />
      </points>
    </group>
  );
};

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#ff007c" />
        <pointLight position={[-10, -10, 10]} intensity={0.5} color="#00cfff" />
        <WireframeSphere />
      </Canvas>
    </div>
  );
};

export default HeroBackground;

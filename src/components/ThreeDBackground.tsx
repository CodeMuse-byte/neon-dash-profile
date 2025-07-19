
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useTheme } from '../contexts/ThemeContext';

// Earth Lines Sphere Component
const EarthLinesSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const sphere = new THREE.SphereGeometry(2, 32, 32);
    const wireframe = new THREE.WireframeGeometry(sphere);
    return { sphere, wireframe };
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
    if (linesRef.current) {
      linesRef.current.rotation.x = state.clock.elapsedTime * 0.08;
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    }
  });

  return (
    <group>
      <lineSegments ref={linesRef} geometry={geometry.wireframe}>
        <lineBasicMaterial color="hsl(var(--primary))" transparent opacity={0.6} />
      </lineSegments>
      <mesh ref={meshRef} geometry={geometry.sphere} scale={0.8}>
        <meshBasicMaterial color="hsl(var(--secondary))" transparent opacity={0.1} wireframe />
      </mesh>
    </group>
  );
};

// Abstract Ball Component
const AbstractBall = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(2, 1), []);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime) * 0.1);
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshPhongMaterial 
        color="hsl(var(--primary))" 
        transparent 
        opacity={0.7}
        shininess={100}
      />
    </mesh>
  );
};

// Water Waves Component
const WaterWaves = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color('hsl(var(--primary))') },
        color2: { value: new THREE.Color('hsl(var(--secondary))') },
      },
      vertexShader: `
        uniform float time;
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          vUv = uv;
          vPosition = position;
          
          vec3 pos = position;
          pos.z += sin(pos.x * 4.0 + time) * 0.1;
          pos.z += sin(pos.y * 4.0 + time * 0.8) * 0.1;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          float wave = sin(vPosition.x * 2.0 + time) * sin(vPosition.y * 2.0 + time * 0.8);
          vec3 color = mix(color1, color2, wave * 0.5 + 0.5);
          gl_FragColor = vec4(color, 0.3);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });
  }, []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime * 0.5;
    }
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} scale={[2, 2, 2]}>
      <sphereGeometry args={[1, 64, 64]} />
      <primitive object={shaderMaterial} ref={materialRef} />
    </mesh>
  );
};

// Liquids Wavy Component
const LiquidsWavy = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[2, 0.8, 16, 100]} />
      <meshPhongMaterial 
        color="hsl(var(--secondary))" 
        transparent 
        opacity={0.6}
        shininess={100}
      />
    </mesh>
  );
};

// Solid Color Component
const SolidColor = () => {
  return (
    <mesh>
      <planeGeometry args={[50, 50]} />
      <meshBasicMaterial color="hsl(var(--primary))" transparent opacity={0.1} />
    </mesh>
  );
};

// Simple Strings Component
const SimpleStrings = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const lines = useMemo(() => {
    const lineGeometries = [];
    for (let i = 0; i < 20; i++) {
      const points = [];
      for (let j = 0; j < 10; j++) {
        points.push(new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        ));
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      lineGeometries.push(geometry);
    }
    return lineGeometries;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {lines.map((geometry, index) => (
        <line key={index} geometry={geometry}>
          <lineBasicMaterial color="hsl(var(--primary))" transparent opacity={0.4} />
        </line>
      ))}
    </group>
  );
};

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      
      colors[i * 3] = 0.2;
      colors[i * 3 + 1] = 0.4;
      colors[i * 3 + 2] = 0.8;
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.01;
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
      <pointsMaterial size={0.02} vertexColors transparent opacity={0.6} />
    </points>
  );
};

const ThreeDBackground = () => {
  const { backgroundType } = useTheme();

  if (backgroundType === 'solid-color') {
    return (
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-primary/5 to-secondary/5" />
    );
  }

  const getBackgroundComponent = () => {
    switch (backgroundType) {
      case 'earth-lines':
        return <EarthLinesSphere />;
      case 'abstract-ball':
        return <AbstractBall />;
      case 'water-waves':
        return <WaterWaves />;
      case 'liquids-wavy':
        return <LiquidsWavy />;
      case 'simple-strings':
        return <SimpleStrings />;
      default:
        return <EarthLinesSphere />;
    }
  };

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.4} color="hsl(var(--primary))" />
        <pointLight position={[-10, -10, 10]} intensity={0.4} color="hsl(var(--secondary))" />
        {getBackgroundComponent()}
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default ThreeDBackground;

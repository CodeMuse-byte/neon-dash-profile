
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useTheme } from '../contexts/ThemeContext';

// Helper function to convert HSL string to THREE.Color
const hslToThreeColor = (hslString: string): THREE.Color => {
  const [h, s, l] = hslString.split(' ').map((val, index) => {
    if (index === 0) return parseInt(val) / 360; // Hue: 0-1
    return parseInt(val.replace('%', '')) / 100; // Saturation and Lightness: 0-1
  });
  return new THREE.Color().setHSL(h, s, l);
};

// Earth Lines Sphere Component
const EarthLinesSphere = () => {
  const { primaryHSL, secondaryHSL } = useTheme();
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
        <lineBasicMaterial color={hslToThreeColor(primaryHSL)} transparent opacity={0.6} />
      </lineSegments>
      <mesh ref={meshRef} geometry={geometry.sphere} scale={0.8}>
        <meshBasicMaterial color={hslToThreeColor(secondaryHSL)} transparent opacity={0.1} wireframe />
      </mesh>
    </group>
  );
};

// Abstract Ball Component
const AbstractBall = () => {
  const { primaryHSL } = useTheme();
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
        color={hslToThreeColor(primaryHSL)} 
        transparent 
        opacity={0.7}
        shininess={100}
      />
    </mesh>
  );
};

// Water Waves Component
const WaterWaves = () => {
  const { primaryHSL, secondaryHSL } = useTheme();
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: hslToThreeColor(primaryHSL) },
        color2: { value: hslToThreeColor(secondaryHSL) },
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
  }, [primaryHSL, secondaryHSL]);

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
  const { secondaryHSL } = useTheme();
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const material2Ref = useRef<THREE.ShaderMaterial>(null);
  const material3Ref = useRef<THREE.ShaderMaterial>(null);

  // Advanced liquid shader material
  const liquidShaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: hslToThreeColor(primaryHSL) },
        color2: { value: hslToThreeColor(secondaryHSL) },
        opacity: { value: 0.8 },
        distortion: { value: 0.3 },
        speed: { value: 1.0 },
      },
      vertexShader: `
        uniform float time;
        uniform float distortion;
        uniform float speed;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        // Noise function for organic movement
        vec3 mod289(vec3 x) {
          return x - floor(x * (1.0 / 289.0)) * 289.0;
        }
        
        vec4 mod289(vec4 x) {
          return x - floor(x * (1.0 / 289.0)) * 289.0;
        }
        
        vec4 permute(vec4 x) {
          return mod289(((x*34.0)+1.0)*x);
        }
        
        vec4 taylorInvSqrt(vec4 r) {
          return 1.79284291400159 - 0.85373472095314 * r;
        }
        
        float snoise(vec3 v) {
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
          
          vec3 i = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);
          
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);
          
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;
          
          i = mod289(i);
          vec4 p = permute(permute(permute(
                   i.z + vec4(0.0, i1.z, i2.z, 1.0))
                 + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                 + i.x + vec4(0.0, i1.x, i2.x, 1.0));
          
          float n_ = 0.142857142857;
          vec3 ns = n_ * D.wyz - D.xzx;
          
          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
          
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_);
          
          vec4 x = x_ *ns.x + ns.yyyy;
          vec4 y = y_ *ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
          
          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);
          
          vec4 s0 = floor(b0) * 2.0 + 1.0;
          vec4 s1 = floor(b1) * 2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
          
          vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
          
          vec3 p0 = vec3(a0.xy, h.x);
          vec3 p1 = vec3(a0.zw, h.y);
          vec3 p2 = vec3(a1.xy, h.z);
          vec3 p3 = vec3(a1.zw, h.w);
          
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
          p0 *= norm.x;
          p1 *= norm.y;
          p2 *= norm.z;
          p3 *= norm.w;
          
          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
        }
        
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          
          vec3 pos = position;
          float t = time * speed * 0.5;
          
          // Create flowing liquid distortion
          float noise1 = snoise(pos * 0.8 + vec3(t * 0.3, t * 0.2, t * 0.1));
          float noise2 = snoise(pos * 1.2 + vec3(t * 0.2, t * 0.4, t * 0.3));
          float noise3 = snoise(pos * 2.0 + vec3(t * 0.1, t * 0.3, t * 0.5));
          
          // Combine noise for organic movement
          vec3 displacement = normal * (noise1 * 0.3 + noise2 * 0.2 + noise3 * 0.1) * distortion;
          pos += displacement;
          
          vPosition = pos;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform float opacity;
        uniform float speed;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          vec3 viewDirection = normalize(cameraPosition - vPosition);
          float fresnel = pow(1.0 - dot(vNormal, viewDirection), 2.0);
          
          // Create flowing color patterns
          float t = time * speed * 0.3;
          float colorMix = sin(vPosition.x * 2.0 + t) * sin(vPosition.y * 1.5 + t * 0.8) * 0.5 + 0.5;
          
          // Glossy liquid color
          vec3 baseColor = mix(color1, color2, colorMix);
          
          // Add metallic reflection
          vec3 reflection = baseColor + fresnel * 0.8;
          
          // Create depth and glossiness
          float depth = 1.0 - fresnel;
          vec3 finalColor = mix(reflection, baseColor * 0.3, depth * 0.7);
          
          gl_FragColor = vec4(finalColor, opacity * (0.6 + fresnel * 0.4));
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });
  }, [primaryHSL, secondaryHSL]);

  // Secondary liquid material for layering
  const liquidShaderMaterial2 = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: hslToThreeColor(secondaryHSL) },
        color2: { value: hslToThreeColor(primaryHSL) },
        opacity: { value: 0.4 },
        distortion: { value: 0.2 },
        speed: { value: 0.7 },
      },
      vertexShader: liquidShaderMaterial.vertexShader,
      fragmentShader: liquidShaderMaterial.fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
    });
  }, [primaryHSL, secondaryHSL, liquidShaderMaterial]);

  // Tertiary liquid material for more depth
  const liquidShaderMaterial3 = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0.1, 0.1, 0.2) },
        color2: { value: hslToThreeColor(primaryHSL).multiplyScalar(0.3) },
        opacity: { value: 0.6 },
        distortion: { value: 0.4 },
        speed: { value: 1.3 },
      },
      vertexShader: liquidShaderMaterial.vertexShader,
      fragmentShader: liquidShaderMaterial.fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
    });
  }, [primaryHSL, liquidShaderMaterial]);
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Update shader uniforms
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = time;
    }
    if (material2Ref.current) {
      material2Ref.current.uniforms.time.value = time;
    }
    if (material3Ref.current) {
      material3Ref.current.uniforms.time.value = time;
    }
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.05;
      groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main liquid blob */}
      <mesh scale={[2.5, 1.8, 2.5]} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 64, 64]} />
        <primitive object={liquidShaderMaterial} ref={materialRef} />
      </mesh>
      
      {/* Secondary flowing layer */}
      <mesh scale={[2.8, 1.5, 2.8]} position={[0.5, 0.3, -0.2]} rotation={[0.2, 0.5, 0.1]}>
        <sphereGeometry args={[1, 48, 48]} />
        <primitive object={liquidShaderMaterial2} ref={material2Ref} />
      </mesh>
      
      {/* Tertiary depth layer */}
      <mesh scale={[3.2, 1.2, 3.2]} position={[-0.3, -0.2, 0.4]} rotation={[-0.1, -0.3, 0.2]}>
        <sphereGeometry args={[1, 32, 32]} />
        <primitive object={liquidShaderMaterial3} ref={material3Ref} />
      </mesh>
      
      {/* Additional flowing elements */}
      <mesh scale={[1.5, 2.5, 1.5]} position={[1.2, 0, -1]} rotation={[0.3, 0.8, 0]}>
        <capsuleGeometry args={[0.5, 1.5, 4, 8]} />
        <primitive object={liquidShaderMaterial2} />
      </mesh>
      
      <mesh scale={[1.8, 1.8, 1.8]} position={[-1.5, 0.5, 0.8]} rotation={[-0.2, -0.6, 0.4]}>
        <octahedronGeometry args={[1, 2]} />
        <primitive object={liquidShaderMaterial} />
      </mesh>
    </group>
  );
};

// Solid Color Component
const SolidColor = () => {
  const { primaryHSL } = useTheme();
  
  return (
    <mesh>
      <planeGeometry args={[50, 50]} />
      <meshBasicMaterial color={hslToThreeColor(primaryHSL)} transparent opacity={0.1} />
    </mesh>
  );
};

// Simple Strings Component
const SimpleStrings = () => {
  const { primaryHSL } = useTheme();
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
        <lineSegments key={index} geometry={geometry}>
          <lineBasicMaterial color={hslToThreeColor(primaryHSL)} transparent opacity={0.4} />
        </lineSegments>
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
        <pointLight position={[10, 10, 10]} intensity={0.4} color={hslToThreeColor(useTheme().primaryHSL)} />
        <pointLight position={[-10, -10, 10]} intensity={0.4} color={hslToThreeColor(useTheme().secondaryHSL)} />
        {getBackgroundComponent()}
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default ThreeDBackground;

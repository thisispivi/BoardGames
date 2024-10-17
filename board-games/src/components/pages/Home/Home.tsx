import { Canvas, extend } from "@react-three/fiber";
import {
  PerspectiveCamera,
  OrbitControls,
  AccumulativeShadows,
  RandomizedLight,
  Dodecahedron,
  Environment,
} from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";
import "./Home.scss";

extend({
  PerspectiveCamera,
  OrbitControls,
  AccumulativeShadows,
  RandomizedLight,
  Dodecahedron,
});
const Cube: React.FC = () => {
  const sideUrl =
    "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/7-Italy/l1.webp";
  const topUrl =
    "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/7-Italy/t.webp";
  const bottomUrl =
    "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/7-Italy/b.webp";

  // Cache texture loader and geometry outside the component
  const loader = useMemo(() => new THREE.TextureLoader(), []);
  const geometry = useMemo(() => new THREE.BoxGeometry(1, 0.2, 1), []);

  // Get maximum anisotropy once
  const maxAnisotropy = useMemo(
    () => new THREE.WebGLRenderer().capabilities.getMaxAnisotropy(),
    []
  );

  // Use the same material for all side faces to avoid redundant loading
  const cubeMaterials = useMemo(() => {
    const loadTexture = (url: string) => {
      const texture = loader.load(url);
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.anisotropy = maxAnisotropy; // Enable anisotropic filtering
      return texture;
    };
    const sideMaterial = new THREE.MeshStandardMaterial({
      map: loadTexture(sideUrl),
      metalness: 1,
      roughness: 1,
      fog: false,
    });

    return [
      sideMaterial, // Front
      sideMaterial, // Back
      new THREE.MeshStandardMaterial({
        map: loadTexture(topUrl),
        metalness: 1,
        roughness: 1,
        fog: false,
      }), // Top
      new THREE.MeshStandardMaterial({
        map: loadTexture(bottomUrl),
        metalness: 1,
        roughness: 1,
        fog: false,
      }), // Bottom
      sideMaterial, // Left
      sideMaterial, // Right
    ];
  }, [loader, maxAnisotropy]);

  return <mesh geometry={geometry} material={cubeMaterials} />;
};

export default function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <div className="canvas-container">
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="card" key={i}>
            <Canvas
              camera={{ position: [2, 14, 10], fov: 5 }}
              shadows
              style={{ background: "#121212" }}
            >
              <spotLight angle={0.15} penumbra={1} position={[10, 10, 10]} />
              <group position={[0, 0, 0]}>
                <Cube />
              </group>
              <Environment environmentIntensity={0.4} preset="warehouse" />
              <OrbitControls makeDefault />
            </Canvas>
          </div>
        ))}
      </div>
    </div>
  );
}

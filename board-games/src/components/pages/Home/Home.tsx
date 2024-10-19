import { Canvas, extend } from "@react-three/fiber";
import {
  PerspectiveCamera,
  OrbitControls,
  AccumulativeShadows,
  RandomizedLight,
  Dodecahedron,
  Environment,
  useGLTF,
} from "@react-three/drei";
import "./Home.scss";
import { games } from "../../../data";
import { GameBox } from "../../atoms";

extend({
  PerspectiveCamera,
  OrbitControls,
  AccumulativeShadows,
  RandomizedLight,
  Dodecahedron,
});

const Bookshelf = () => {
  const bookshelf = useGLTF("/models/bookshelf/scene.gltf");
  return <primitive object={bookshelf.scene} />;
};

export default function Home() {
  return (
    <div className="home">
      <Canvas
        camera={{ position: [2, 14, 10], fov: 5 }}
        shadows
        style={{ background: "#121212" }}
      >
        <group>
          <Bookshelf />
        </group>
        <spotLight angle={0.15} penumbra={1} position={[10, 10, 10]} />
        {games.map((game) => (
          <GameBox game={game} key={game.name} />
        ))}
        <Environment environmentIntensity={0.4} preset="warehouse" />
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}

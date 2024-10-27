import { Canvas, extend } from "@react-three/fiber";
import { Sky, Bvh } from "@react-three/drei";
import "./Home.scss";
import { Scene } from "../../organisms";
import { EffectComposer, Selection, N8AO } from "@react-three/postprocessing";
import { GameBox } from "../../atoms";
import { games } from "../../../data";
import { useEffect, useMemo } from "react";
import { WindowSize } from "../../../core/typings/window";
import { Positions } from "../../../core/typings/position";

extend({ Sky, Bvh, EffectComposer, Selection, N8AO });

export default function Home() {
  const { windowSize, position } = useMemo(() => {
    const windowSize =
      window.innerWidth > 1024
        ? WindowSize.Large
        : window.innerWidth > 450
          ? WindowSize.Medium
          : WindowSize.Small;
    const allScenePositions: Positions = [
      [0, -3.4, -10],
      [0, -3, -6],
      [0, -2.4, -2],
    ];
    return { position: allScenePositions[windowSize], windowSize };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      window.location.reload();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="home">
      <Canvas
        camera={{ position: [0, 1, 6], fov: 25, near: 1, far: 50 }}
        dpr={[1, 1.5]}
        flat
        gl={{ antialias: false }}
      >
        <ambientLight intensity={1.5 * Math.PI} />
        <Sky />
        <Bvh firstHitOnly>
          <Selection>
            <Effects />
            <GameBox game={games[0]} windowSize={windowSize} />
            <Scene position={position} rotation={[0, Math.PI / 2, 0]} />
          </Selection>
        </Bvh>
      </Canvas>
    </div>
  );
}

function Effects() {
  return (
    <EffectComposer
      autoClear={false}
      enableNormalPass={false}
      multisampling={4}
      stencilBuffer
    >
      <N8AO
        aoRadius={0.5}
        aoSamples={10}
        denoiseSamples={10}
        distanceFalloff={3}
        intensity={1}
      />
    </EffectComposer>
  );
}

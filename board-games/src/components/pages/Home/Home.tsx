import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Sky, Bvh } from "@react-three/drei";
import "./Home.scss";
import { Scene } from "../../organisms";
import {
  EffectComposer,
  Selection,
  Outline,
  N8AO,
  TiltShift2,
  ToneMapping,
} from "@react-three/postprocessing";
import { easing } from "maath";
import { GameBox } from "../../atoms";
import { games } from "../../../data";

extend({
  useGLTF,
  Sky,
  Bvh,
  EffectComposer,
  Selection,
  Outline,
  N8AO,
  TiltShift2,
  ToneMapping,
});

export default function Home() {
  return (
    <div className="home">
      <Canvas
        camera={{ position: [0, 1, 6], fov: 25, near: 1, far: 20 }}
        dpr={[1, 1.5]}
        flat
        gl={{ antialias: false }}
      >
        <ambientLight intensity={1.5 * Math.PI} />
        <Sky />
        <Bvh firstHitOnly>
          <Selection>
            <Effects />
            <GameBox game={games[0]} />
            <Scene position={[0, -1, -1.85]} rotation={[0, Math.PI / 2, 0]} />
          </Selection>
        </Bvh>
      </Canvas>
    </div>
  );
}

function Effects() {
  const { size } = useThree();
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        state.pointer.x,
        1 + state.pointer.y / 2,
        8 + Math.atan(state.pointer.x * 2),
      ],
      0.3,
      delta,
    );
    state.camera.lookAt(state.camera.position.x * 0.9, 0, -4);
  });
  return (
    <EffectComposer
      autoClear={false}
      enableNormalPass={false}
      multisampling={4}
      stencilBuffer
    >
      <N8AO
        aoRadius={0.4}
        aoSamples={5}
        distanceFalloff={0.75}
        halfRes
        intensity={1}
      />
      <Outline
        blur
        edgeStrength={10}
        hiddenEdgeColor={0x000000}
        visibleEdgeColor={0xffffff}
        width={size.width * 1.25}
      />
      <ToneMapping />
    </EffectComposer>
  );
}

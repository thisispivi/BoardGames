// import { useEnvironment } from "@react-three/drei";
// import { useState } from "react";
// import { debounce } from "lodash";
// import { ThreeEvent } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface SceneProps {
  rotation: [number, number, number];
  position: [number, number, number];
}

export default function Scene(props: SceneProps) {
  // const obj = useLoader(OBJLoader, "/Test2.obj");
  // return <primitive object={obj} />;
  const { nodes, materials } = useGLTF("/Test.glb");
  // const env = useEnvironment({ preset: "city" });
  // const [hovered, hover] = useState<string | null>(null);
  // const debouncedHover = debounce(hover, 30);
  // const over = (name: string) => (e: ThreeEvent<PointerEvent>) => (
  //   e.stopPropagation(), debouncedHover(name)
  // );

  // console.log({ nodes, materials, env });

  //   throw new Error("Scene.tsx is not implemented");

  return (
    <group {...props}>
      <mesh
        geometry={(nodes["3DGeom-1"] as THREE.Mesh).geometry}
        material={materials["wall"]}
      />
      <mesh
        geometry={(nodes["3DGeom-2"] as THREE.Mesh).geometry}
        material={materials["shelf"]}
      />
      <mesh
        geometry={(nodes["3DGeom-3"] as THREE.Mesh).geometry}
        material={materials["floor"]}
      />
    </group>
  );
}

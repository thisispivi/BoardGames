import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface SceneProps {
  rotation: [number, number, number];
  position: [number, number, number];
}

export default function Scene(props: SceneProps) {
  const { nodes, materials } = useGLTF("/models/room.glb");

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

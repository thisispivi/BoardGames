import { useMemo, useState } from "react";
import * as THREE from "three";
import { Game } from "../../../core";
import { Environment } from "@react-three/drei";

interface GameBoxProps {
  game: Game;
}

function GameBox({ game }: GameBoxProps) {
  const [hovered, setHovered] = useState(false);

  const loader = useMemo(() => new THREE.TextureLoader(), []);
  const geometry = useMemo(() => new THREE.BoxGeometry(...game.size), [game]);

  const maxAnisotropy = useMemo(
    () => new THREE.WebGLRenderer().capabilities.getMaxAnisotropy(),
    []
  );

  const cubeMaterials = useMemo(() => {
    const loadTexture = (url: string) => {
      const texture = loader.load(url);
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.anisotropy = maxAnisotropy;
      return texture;
    };
    return game.getTextureUrlsAsArray().map(
      (url) =>
        new THREE.MeshStandardMaterial({
          metalness: 1,
          roughness: 1,
          fog: false,
          map: loadTexture(url),
        })
    );
  }, [game, loader, maxAnisotropy]);

  const outlineGeometry = useMemo(() => {
    const scaleFactor = 1.04;
    const outlineGeo = new THREE.BoxGeometry(
      game.size[0] * scaleFactor,
      game.size[1] * scaleFactor,
      game.size[2] * scaleFactor
    );
    return outlineGeo;
  }, [game]);

  const outlineMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: hovered ? 0xffffff : 0x000000,
        side: THREE.BackSide,
      }),
    [hovered]
  );

  return (
    <group position={game.position}>
      <mesh
        geometry={geometry}
        material={cubeMaterials}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
      />
      {hovered ? (
        <mesh geometry={outlineGeometry} material={outlineMaterial} />
      ) : null}
      <Environment environmentIntensity={0.4} preset="warehouse" />
    </group>
  );
}

export default GameBox;

import { useMemo, useState } from "react";
import * as THREE from "three";
import { Game } from "../../../core";
import { WindowSize } from "../../../core/typings/window";

interface GameBoxProps {
  game: Game;
  windowSize: WindowSize;
}
function GameBox({ game, windowSize }: GameBoxProps) {
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
          metalness: 0.6,
          roughness: 1,
          emissive: new THREE.Color(0x222222),
          emissiveIntensity: 0.5,
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
    <group position={game.position[windowSize]} rotation={[0, 0, Math.PI / 2]}>
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
    </group>
  );
}

export default GameBox;

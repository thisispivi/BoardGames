import { useMemo } from "react";
import * as THREE from "three";
import { Game } from "../../../core";

interface GameBoxProps {
  game: Game;
}

function GameBox({ game }: GameBoxProps) {
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

  return (
    <group position={game.position}>
      <mesh geometry={geometry} material={cubeMaterials} />
    </group>
  );
}

export default GameBox;

import { Positions } from "../typings/position";
import { Size } from "../typings/size";

interface GameData {
  id: string;
  name: string;
  size: Size;
  textures: {
    side: string | [string, string, string, string];
    top: string;
    bottom: string;
  };
  position: Positions;
  rating?: number;
  acquireDate?: Date;
}

export class Game {
  id: string;
  name: string;
  size: Size;
  textures: {
    top: string;
    bottom: string;
    north: string;
    south: string;
    east: string;
    west: string;
  };
  position: Positions;
  rating?: number;
  acquireDate?: Date;

  constructor(data: GameData, divider = 25) {
    this.id = data.id;
    this.name = data.name;
    this.size = data.size.map((value) => value / divider) as Size;
    this.textures = {
      top: data.textures.top,
      bottom: data.textures.bottom,
      north: Array.isArray(data.textures.side)
        ? data.textures.side[0]
        : data.textures.side,
      south: Array.isArray(data.textures.side)
        ? data.textures.side[1]
        : data.textures.side,
      east: Array.isArray(data.textures.side)
        ? data.textures.side[2]
        : data.textures.side,
      west: Array.isArray(data.textures.side)
        ? data.textures.side[3]
        : data.textures.side,
    };
    this.position = data.position;
    this.rating = data.rating;
    this.acquireDate = data.acquireDate;
  }

  getTextureUrlsAsArray() {
    return [
      this.textures.north,
      this.textures.south,
      this.textures.top,
      this.textures.bottom,
      this.textures.east,
      this.textures.west,
    ];
  }
}

interface GameData {
  name: string;
  size: [number, number, number];
  textures: {
    side: string | [string, string, string, string];
    top: string;
    bottom: string;
  };
  position: [number, number, number];
  rating?: number;
  acquireDate?: Date;
}

export class Game {
  name: string;
  size: [number, number, number];
  textures: {
    top: string;
    bottom: string;
    north: string;
    south: string;
    east: string;
    west: string;
  };
  position: [number, number, number];
  rating?: number;
  acquireDate?: Date;

  constructor(data: GameData) {
    this.name = data.name;
    this.size = data.size;
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

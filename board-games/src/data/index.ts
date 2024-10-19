import { Game } from "../core";

const games: Game[] = [
  new Game({
    name: "Ticket to Ride - Italy",
    size: [0.25, 0.05, 0.25],
    textures: {
      side: "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/7-Italy/l.webp",
      top: "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/7-Italy/t.webp",
      bottom:
        "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/7-Italy/b.webp",
    },
    position: [-0.4, 0.53, 0.04],
  }),
];

export { games };

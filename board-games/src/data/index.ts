import { Game } from "../core";

const games: Game[] = [
  new Game({
    id: "ticket-to-ride-5-uk",
    name: "Ticket to Ride 5 United Kingdom & Pennsylvania",
    size: [30, 3.6, 30],
    textures: {
      side: "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/5-UK/l.jpg",
      top: "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/5-UK/t.jpg",
      bottom:
        "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/5-UK/b.jpg",
    },
    position: [
      [-1.76, -1.97, -17.9],
      [-1.76, -1.58, -13.9],
      [-1.76, -0.94, -9.7],
    ],
  }),
];

export { games };

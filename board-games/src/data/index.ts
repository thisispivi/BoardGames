import { Game } from "../core";

const games: Game[] = [
  // new Game({
  //   id: "ticket-to-ride-2-in-ch",
  //   name: "Ticket to Ride 2 India & Switzerland",
  //   size: [30, 3.6, 30],
  //   textures: {
  //     side: "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRide2/l.jpg",
  //     top: "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRide2/t.jpg",
  //     bottom:
  //       "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRide2/b.jpg",
  //   },
  //   position: [
  //     [-1.76, -1.98, -18],
  //     [-1.76, -1.59, -14],
  //     [-1.76, -0.95, -9.8],
  //   ],
  //   rotation: [0, 0, Math.PI / 2],
  // }),
  // new Game({
  //   id: "ticket-to-ride-5-uk-pa",
  //   name: "Ticket to Ride 5 United Kingdom & Pennsylvania",
  //   size: [30, 3.6, 30],
  //   textures: {
  //     side: "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRide5/l.jpg",
  //     top: "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRide5/t.jpg",
  //     bottom:
  //       "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRide5/b.jpg",
  //   },
  //   position: [
  //     [-1.6, -1.98, -18],
  //     [-1.6, -1.59, -14],
  //     [-1.6, -0.95, -9.8],
  //   ],
  //   rotation: [0, 0, Math.PI / 2],
  // }),
  new Game({
    id: "ticket-to-ride-6-fr-al",
    name: "Ticket to Ride 6 France & Old West",
    size: [30, 5.6, 30],
    textures: {
      side: "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRide6/l.jpg",
      top: "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRide6/t.jpg",
      bottom:
        "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRide6/b.jpg",
    },
    position: [
      [-1.4, -1.98, -18],
      [-1.4, -1.59, -14],
      [-1.4, -0.95, -9.8],
    ],
    rotation: [0, 0, Math.PI / 2],
  }),
  new Game({
    id: "ticket-to-ride-7-it-jp",
    name: "Ticket to Ride 7 Italy & Japan",
    size: [30, 5.6, 30],
    textures: {
      side: "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRide7/l.jpg",
      top: "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRide7/t.jpg",
      bottom:
        "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRide7/b.jpg",
    },
    position: [
      [-1.16, -1.98, -18],
      [-1.16, -1.59, -14],
      [-1.16, -0.95, -9.8],
    ],
    rotation: [0, 0, Math.PI / 2],
  }),
  new Game({
    id: "ticket-to-ride-europe",
    name: "Ticket to Ride Europe",
    size: [30, 7, 30],
    textures: {
      side: "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRideEurope/l.jpg",
      top: "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRideEurope/t.jpg",
      bottom:
        "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRideEurope/b.jpg",
    },
    position: [
      [-0.425, -2.44, -18],
      [-0.425, -2.04, -14],
      [-0.425, -1.43, -9.85],
    ],
  }),
  new Game({
    id: "ticket-to-ride-1912",
    name: "Ticket to Ride 1912",
    size: [9.5, 3, 18.2],
    textures: {
      side: [
        "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRide1912/n.jpg",
        "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRide1912/n.jpg",
        "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRide1912/e.jpg",
        "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRide1912/e.jpg",
      ],
      top: "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRide1912/t.jpg",
      bottom:
        "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRide1912/b.jpg",
    },
    position: [
      [-0.825, -2.24, -18],
      [-0.825, -1.84, -14],
      [-0.825, -1.23, -9.85],
    ],
  }),
  new Game({
    id: "ticket-to-ride-Amsterdam",
    name: "Ticket to Ride Amsterdam",
    size: [23.3, 4.4, 23.3],
    textures: {
      side: "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRideAmsterdam/l.jpg",
      top: "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRideAmsterdam/t.jpg",
      bottom:
        "https://pivi-travel-map.b-cdn.net/BoardGames/TicketToRide/TicketToRideAmsterdam/b.jpg",
    },
    position: [
      [-0.825, -2.24, -18],
      [-0.825, -1.84, -14],
      [-0.825, -1.23, -9.85],
    ],
  }),
  new Game({
    id: "7wonders-architects",
    name: "7 Wonders Architects",
    size: [23, 9.1, 29.5],
    textures: {
      side: [
        "https://pivi-travel-map.b-cdn.net/BoardGames/7Wonders/7WondersArchitects/n.jpg",
        "https://pivi-travel-map.b-cdn.net/BoardGames/7Wonders/7WondersArchitects/n.jpg",
        "https://pivi-travel-map.b-cdn.net/BoardGames/7Wonders/7WondersArchitects/e.jpg",
        "https://pivi-travel-map.b-cdn.net/BoardGames/7Wonders/7WondersArchitects/e.jpg",
      ],
      top: "https://pivi-travel-map.b-cdn.net/BoardGames/7Wonders/7WondersArchitects/t.jpg",
      bottom:
        "https://pivi-travel-map.b-cdn.net/BoardGames/7Wonders/7WondersArchitects/b.jpg",
    },
    position: [
      [5, 0, 0],
      [5, 0, 0],
      [5, 0, 0],
    ],
  }),
  new Game({
    id: "7wonders-architects-medals",
    name: "7 Wonders Architects Medals",
    size: [23, 3.6, 29.5],
    textures: {
      side: [
        "https://pivi-travel-map.b-cdn.net/BoardGames/7Wonders/7WondersArchitectsMedals/n.jpg",
        "https://pivi-travel-map.b-cdn.net/BoardGames/7Wonders/7WondersArchitectsMedals/n.jpg",
        "https://pivi-travel-map.b-cdn.net/BoardGames/7Wonders/7WondersArchitectsMedals/e.jpg",
        "https://pivi-travel-map.b-cdn.net/BoardGames/7Wonders/7WondersArchitectsMedals/e.jpg",
      ],
      top: "https://pivi-travel-map.b-cdn.net/BoardGames/7Wonders/7WondersArchitectsMedals/t.jpg",
      bottom:
        "https://pivi-travel-map.b-cdn.net/BoardGames/7Wonders/7WondersArchitectsMedals/b.jpg",
    },
    position: [
      [-1.16, -1.98, -18],
      [-1.16, -1.59, -14],
      [-1.16, -0.95, -9.8],
    ],
  }),
];

export { games };

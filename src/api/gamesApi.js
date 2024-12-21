// Simulated game data
const games = [
    { id: 1, title: "Cosmic Conquest", genre: "Strategy", rating: 4.5 },
    { id: 2, title: "Neon Racer", genre: "Racing", rating: 4.2 },
    { id: 3, title: "Mystic Realms", genre: "RPG", rating: 4.8 },
    { id: 4, title: "Cyber Assault", genre: "FPS", rating: 4.3 },
    { id: 5, title: "Puzzle Paradise", genre: "Puzzle", rating: 4.1 },
  ];
  
  // Simulated API function
  export const fetchGames = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(games);
      }, 1000); // Simulate network delay
    });
  };
  
  
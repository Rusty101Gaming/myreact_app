import React, { useState, useEffect } from 'react';
import FeatureCard from './FeatureCard';

const gamesData = [
  { id: 1, title: "Cosmic Conquest", genre: "Strategy", rating: 4.5 },
  { id: 2, title: "Neon Racer", genre: "Racing", rating: 4.2 },
  { id: 3, title: "Mystic Realms", genre: "RPG", rating: 4.8 },
  { id: 4, title: "Cyber Assault", genre: "FPS", rating: 4.3 },
  { id: 5, title: "Puzzle Paradise", genre: "Puzzle", rating: 4.1 },
];

const fetchGames = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return gamesData;
};

const HomePage = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const fetchedGames = await fetchGames();
        setGames(fetchedGames);
      } catch (error) {
        console.error("Error fetching games:", error);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  return (
    <>
      <section id="home" className="hero flex flex-col justify-center items-center text-center p-4" style={{
        backgroundImage: "url('4.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
      }}>
        <h1 className="mb-4" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '3rem', color: 'var(--primary-color)' }}>Welcome to GameZone</h1>
        <p className="text-xl mb-8">The ultimate gaming experience awaits you</p>
        <button className="cta-button bg-[var(--primary-color)] text-white border-none py-2 px-8 text-base font-bold rounded cursor-pointer transition-colors duration-300 hover:bg-[var(--secondary-color)]">
          Get Started
        </button>
      </section>

      <section id="features" className="features py-16 px-8" style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)' }}>
        <h2 className="text-center mb-12" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '2.5rem', color: 'var(--primary-color)' }}>Our Features</h2>
        <div className="feature-grid grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          <FeatureCard
            imageUrl="1.jpg"
            title="Multiplayer Madness"
            description="Connect with gamers worldwide"
          />
          <FeatureCard
            imageUrl="2.jpg"
            title="Stunning Graphics"
            description="Immerse yourself in high-definition worlds"
          />
          <FeatureCard
            imageUrl="3.jpg"
            title="Cross-Platform Play"
            description="Game on any device, anywhere"
          />
        </div>
      </section>

      <section id="games" className="games py-16 px-8" style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)' }}>
        <h2 className="text-center mb-12" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '2.5rem', color: 'var(--primary-color)' }}>Featured Games</h2>
        {loading ? (
          <p className="text-center">Loading games...</p>
        ) : (
          <ul className="game-list grid gap-8 list-none p-0" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {games.map((game) => (
              <li key={game.id} className="game-item bg-[rgba(30,41,59,0.7)] rounded-lg p-6 text-center transition-transform duration-300 hover:-translate-y-1">
                <h3 className="mb-2" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.2rem', color: 'var(--secondary-color)' }}>{game.title}</h3>
                <p className="my-2">Genre: {game.genre}</p>
                <p className="my-2">Rating: {game.rating}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section id="cta" className="cta py-16 px-8 text-center" style={{ backgroundColor: 'var(--secondary-color)' }}>
        <h2 className="mb-4" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '2.5rem' }}>Ready to Join the Adventure?</h2>
        <p className="text-xl mb-8">Sign up now and get 1 month free access to all premium games!</p>
        <button className="cta-button bg-[var(--primary-color)] text-white border-none py-2 px-8 text-base font-bold rounded cursor-pointer transition-colors duration-300 hover:bg-[var(--secondary-color)]">
          Sign Up Now
        </button>
      </section>
    </>
  );
};

export default HomePage;


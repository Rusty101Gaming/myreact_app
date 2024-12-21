import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-opacity-80" style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', padding: '1rem 2rem' }}>
      <nav className="flex justify-between items-center">
        <div className="logo" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-color)' }}>
          GameZone
        </div>
        <ul className="nav-links flex list-none">
          <li className="ml-8"><Link to="/" className="text-[var(--text-color)] no-underline font-medium hover:text-[var(--primary-color)] transition-colors duration-300">Home</Link></li>
          <li className="ml-8"><a href="/#features" className="text-[var(--text-color)] no-underline font-medium hover:text-[var(--primary-color)] transition-colors duration-300">Features</a></li>
          <li className="ml-8"><Link to="/join" className="text-[var(--text-color)] no-underline font-medium hover:text-[var(--primary-color)] transition-colors duration-300">Join Now</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


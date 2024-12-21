import React from 'react';

const JoinNowForm = () => {
  return (
    <div className="join-now-container min-h-screen flex flex-col justify-center items-center p-8" style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)' }}>
      <h1 className="join-now-title mb-8 text-center" style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: '3rem',
        color: 'var(--primary-color)',
        textShadow: '0 0 10px rgba(126, 34, 206, 0.5)'
      }}>Join the GameZone Universe</h1>
      <form className="join-now-form bg-[rgba(30,41,59,0.7)] p-8 rounded-lg w-full max-w-md" style={{ boxShadow: '0 0 20px rgba(126, 34, 206, 0.3)' }}>
        <div className="form-group mb-6">
          <label htmlFor="username" className="block mb-2 font-bold">Gamer Tag</label>
          <input type="text" id="username" placeholder="Enter your gamer tag" className="w-full p-2 border border-[var(--secondary-color)] bg-[rgba(15,23,42,0.8)] text-[var(--text-color)] rounded" />
        </div>
        <div className="form-group mb-6">
          <label htmlFor="email" className="block mb-2 font-bold">Email</label>
          <input type="email" id="email" placeholder="Enter your email" className="w-full p-2 border border-[var(--secondary-color)] bg-[rgba(15,23,42,0.8)] text-[var(--text-color)] rounded" />
        </div>
        <div className="form-group mb-6">
          <label htmlFor="password" className="block mb-2 font-bold">Password</label>
          <input type="password" id="password" placeholder="Create a password" className="w-full p-2 border border-[var(--secondary-color)] bg-[rgba(15,23,42,0.8)] text-[var(--text-color)] rounded" />
        </div>
        <div className="form-group mb-6">
          <label htmlFor="favorite-genre" className="block mb-2 font-bold">Favorite Game Genre</label>
          <select id="favorite-genre" className="w-full p-2 border border-[var(--secondary-color)] bg-[rgba(15,23,42,0.8)] text-[var(--text-color)] rounded">
            <option value="">Select your favorite genre</option>
            <option value="action">Action</option>
            <option value="rpg">RPG</option>
            <option value="strategy">Strategy</option>
            <option value="sports">Sports</option>
            <option value="fps">FPS</option>
          </select>
        </div>
        <button type="submit" className="submit-button w-full bg-[var(--primary-color)] text-white border-none py-3 px-4 text-base font-bold rounded cursor-pointer transition-all duration-300 hover:bg-[var(--secondary-color)] hover:-translate-y-0.5 active:translate-y-0" style={{ animation: 'pulse 2s infinite' }}>
          Embark on Your Journey
        </button>
      </form>
    </div>
  );
};

export default JoinNowForm;


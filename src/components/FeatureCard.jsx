import React from 'react';

const FeatureCard = ({ imageUrl, title, description }) => {
  return (
    <div className="feature-card bg-[rgba(30,41,59,0.7)] rounded-lg p-8 text-center transition-transform duration-300 hover:-translate-y-2.5 flex flex-col">
      <div className="feature-image w-full h-50 bg-cover bg-center rounded-lg mb-4" style={{backgroundImage: `url('${imageUrl}')`}}></div>
      <h3 className="mb-4" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.5rem', color: 'var(--secondary-color)' }}>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import JoinNowForm from './components/JoinNowForm';

const App = () => {
  console.log('App component rendered');
  return (
    <Router>
      <div className="app min-h-screen flex flex-col" style={{
        '--primary-color': '#7e22ce',
        '--secondary-color': '#2563eb',
        '--background-color': '#0f172a',
        '--text-color': '#e2e8f0',
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: 'var(--background-color)',
        color: 'var(--text-color)'
      }}>
        <Header />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/join" element={<JoinNowForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './index.css';

export default function App() {
  return (
    <div className="app-container">
      <Home navbar={<Navbar />} />
    </div>
  );
}


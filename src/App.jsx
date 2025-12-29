import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ChampionDetail from './pages/ChampionDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/champion/:id" element={<ChampionDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

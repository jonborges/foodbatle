import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FoodBattle from './pages/Disputa';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disputa/:category" element={<FoodBattle />} />
      </Routes>
    </Router>
  );
}

export default App;

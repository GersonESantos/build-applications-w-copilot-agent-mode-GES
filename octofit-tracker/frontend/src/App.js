import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ActivityPage from './pages/ActivityPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activities" element={<ActivityPage />} />
      </Routes>
    </Router>
  );
}

export default App;

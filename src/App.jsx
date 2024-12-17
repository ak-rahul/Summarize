import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes from react-router-dom
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import '../src/tailwind.css';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <Router>
      <Routes> {/* Replaces Switch */}
        <Route path="/" element={<LandingPage />} /> {/* Use element prop */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;

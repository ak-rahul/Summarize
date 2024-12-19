import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes from react-router-dom
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from "../src/pages/Dashboard";
import Profile from "../src/components/Profile";
import '../src/App.css';

const App = () => {
  return (
    <Router>
      <Routes> {/* Replaces Switch */}
        <Route path="/" element={<LandingPage />} /> {/* Use element prop */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Nested Route for Profile */}
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

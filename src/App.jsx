import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes from react-router-dom
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard'; // Import Dashboard
import Profile from './components/Profile';
import Summarizer from './components/Summarizer'; // Import Summarizer component
import '../src/App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Dashboard route, and default child component is Summarizer */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Default child */}
          <Route index element={<Summarizer />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

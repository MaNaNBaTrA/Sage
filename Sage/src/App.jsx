import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"; 
import { onAuthStateChangedHandler } from "./firebase"; 
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

// Main App Component
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for auth state changes
    onAuthStateChangedHandler((user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmail,
  loginWithGoogle,
  onAuthStateChangedHandler,
} from "../firebase";  // Adjust path if necessary

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Listen to authentication state changes
    const unsubscribe = onAuthStateChangedHandler((user) => {
      console.log("Auth state changed. User: ", user);
      if (user) {
        console.log("User authenticated:", user);
        navigate("/home"); // Navigate to home if user is authenticated
      } else {
        console.log("No user authenticated.");
      }
    });

    // Cleanup on component unmount
    return () => unsubscribe();
  }, [navigate]);

  // Handle login with email and password
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmail(email, password);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      console.log("Opening Google popup for authentication...");
      await loginWithGoogle();
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleEmailLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;

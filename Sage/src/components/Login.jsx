import React, { useState, useEffect } from "react";
import IMG from "../assets/Img/Work.jpg";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmail,
  loginWithGoogle,
  onAuthStateChangedHandler,
} from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const unsubscribe = onAuthStateChangedHandler((user) => {
      console.log("Auth state changed. User: ", user);
      if (user) {
        console.log("User authenticated:", user);
        navigate("/home");
      } else {
        console.log("No user authenticated.");
      }
    });

    return () => unsubscribe();
  }, [navigate]);


  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmail(email, password);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);

      switch (error.code) {
        case "auth/user-not-found":
          setErrorMessage("No account found with this email.");
          break;
        case "auth/wrong-password":
          setErrorMessage("Incorrect password. Please try again.");
          break;
        case "auth/invalid-email":
          setErrorMessage("The email address is not valid. Please check again.");
          break;
        case "auth/invalid-credential":
          setErrorMessage("Invalid credential. Please check your input.");
          break;
        default:
          setErrorMessage("An unknown error occurred. Please try again.");
      }
    }
  };


  const handleGoogleLogin = async () => {
    try {
      console.log("Opening Google popup for authentication...");
      await loginWithGoogle();
      navigate("/home");
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  return (
    <>
      <div className="login min-h-screen w-full flex items-center justify-center">
        <div className="container w-5/6 flex overflow-hidden justify-between rounded-xl shadow-lg">
          <div className="lsection flex w-1/2 flex-col items-center p-8 gap-4">
            <div className="flex items-center flex-col gap-4 w-3/4">
              <div className="font-bold text-6xl font-roboto">Welcome back!</div>
              <div className="text-center font-roboto text-slate-400 text-base">
                Welcome back to Sage, where your vision becomes reality with the right people, the right projects, and the right results.
              </div>
            </div>
            <form onSubmit={handleEmailLogin} className="flex flex-col mt-4 gap-2 w-9/12">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-3xl border-solid border-gray-400 border-2 p-2 font-roboto"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-3xl border-solid border-gray-400 border-2 p-2 font-roboto"
              />
              <div className="flex justify-end">
                <div className="text-xs font-roboto font-medium cursor-pointer">
                  Forgot Password?
                </div>
              </div>
              {errorMessage && (
                <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
              )}
              <button className="flex bg-black text-white rounded-3xl items-center justify-center p-2 font-roboto mt-3" type="submit">
                Log In
              </button>
            </form>
            <div className="font-roboto">or</div>
            <button onClick={handleGoogleLogin} className="border-2 border-solid border-stone-500 rounded-3xl w-9/12 p-2 text-center">
              Sign in with Google
            </button>
            <div className="font-roboto mt-8 cursor-pointer">
              Don't have an account? <a href="/signup" className="text-purple-900 cursor-pointer">Sign Up</a>
            </div>
          </div>
          <div className="rsection rounded-xl w-1/2 flex items-center justify-center">
            <div className="img">
              <img src={IMG} alt="Work" />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

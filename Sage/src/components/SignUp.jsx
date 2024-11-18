import React, { useState } from "react";
import IMG from "../assets/Work.jpg";
import { useNavigate } from "react-router-dom";
import { signUpWithEmail, loginWithGoogle } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    try {
      await signUpWithEmail(email, password);
      navigate("/home");
    } catch (error) {
      console.error("Sign-up failed:", error);

      switch (error.code) {
        case "auth/email-already-in-use":
          setErrorMessage("This email is already in use. Please try another.");
          break;
        case "auth/invalid-email":
          setErrorMessage("The email address is not valid. Please check again.");
          break;
        case "auth/weak-password":
          setErrorMessage("Password must be at least 6 characters long.");
          break;
        default:
          setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/home");
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  return (
    <>
      <div className="signup min-h-screen w-full flex items-center justify-center ">
        <div className="container w-5/6 flex overflow-hidden justify-between bg-white rounded-xl shadow-lg">
          <div className="lsection flex w-1/2 flex-col items-center p-8 gap-4">
            <div className="flex items-center flex-col gap-4 w-3/4">
              <div className="font-bold text-5xl font-roboto">Create an account</div>
              <div className="text-center font-roboto text-slate-400 text-base">
                Join Sage and start connecting with the right projects, the right people, and the right results.
              </div>
            </div>
            <form onSubmit={handleSignUp} className="flex flex-col mt-4 gap-2 w-9/12">
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
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="rounded-3xl border-solid border-gray-400 border-2 p-2 font-roboto"
              />
              {errorMessage && (
                <div className="text-red-500 text-sm mt-2">{errorMessage}</div> 
              )}
              <button className="flex bg-black text-white rounded-3xl items-center justify-center p-2 font-roboto mt-3" type="submit">
                Sign Up
              </button>
            </form>
            <div className="font-roboto">or</div>
            <button onClick={handleGoogleLogin} className="border-2 border-solid border-stone-500 rounded-3xl w-9/12 p-2 text-center">
              Sign up with Google
            </button>
            <div className="font-roboto mt-8 cursor-pointer">
              Already have an account? <a href="/" className="text-purple-900 cursor-pointer">Log In</a>
            </div>
          </div>
          <div className="rsection rounded-xl w-1/2 flex items-center justify-center">
            <div className="img mt-12">
              <img src={IMG} alt="Work" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="spinner-grow text-primary"
        style={{ width: "8rem", height: "8rem" }} 
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;

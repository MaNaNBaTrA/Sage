import React from 'react';

const Marquee = () => {
  return (
    <div className="w-full h-36 overflow-hidden flex justify-center items-center">
      <div className="relative w-full h-32 flex justify-center items-center transform rotate-3 origin-center">
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 bg-black h-1/3 flex">
          <div className="whitespace-nowrap animate-marquee-horizontal text-white text-lg px-4 py-2">
            Start Now! Start collaborating and innovate today.
          </div>
          <div className="whitespace-nowrap animate-marquee-horizontal text-white text-lg px-4 py-2">
            Start Now! Start collaborating and innovate today.
          </div>
          <div className="whitespace-nowrap animate-marquee-horizontal text-white text-lg px-4 py-2">
            Start Now! Start collaborating and innovate today.
          </div>
          <div className="whitespace-nowrap animate-marquee-horizontal text-white text-lg px-4 py-2">
            Start Now! Start collaborating and innovate today.
          </div>
          <div className="whitespace-nowrap animate-marquee-horizontal text-white text-lg px-4 py-2">
            Start Now! Start collaborating and innovate today.
          </div>
          <div className="whitespace-nowrap animate-marquee-horizontal text-white text-lg px-4 py-2">
            Start Now! Start collaborating and innovate today.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;

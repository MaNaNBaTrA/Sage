import React, { useEffect, useRef } from 'react';
import "../index.css";

const Marquee = () => {
  const quotes = [
    "Collaboration over contracts, projects over positions.",
    "Projects today, opportunities tomorrow.",
    "Your next project is just a collaboration away.",
    "Collaboration is the currency of the future.",
    "Work that fits your passion, projects that fuel your growth."
  ];

  const repeatedQuotes = Array(10).fill(quotes).flat();
  
  const marqueeRef = useRef(null);

  const handleScroll = () => {
    const marqueeWidth = marqueeRef.current.offsetWidth;
    const scrollPosition = marqueeRef.current.scrollLeft;
    if (scrollPosition >= marqueeWidth - 1) {
      marqueeRef.current.scrollLeft = 0;
    }
  };

  useEffect(() => {
    const marquee = marqueeRef.current;
    marquee.addEventListener('scroll', handleScroll);
    return () => {
      marquee.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-black w-[110vw] h-16 my-20 rotate-3 translate-x-[-5vw] flex items-center justify-center overflow-hidden mb-32">
      <div className="w-[100vw] z-10 h-14">
        <div 
          ref={marqueeRef}
          className="flex text-white text-nowrap gap-20 h-full w-max items-center justify-center text-lg font-inter animate-marquee"
        >
          {repeatedQuotes.map((quote, index) => (
            <span key={index} className="text-white whitespace-nowrap text-lg font-inter font-medium">
              {quote}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;

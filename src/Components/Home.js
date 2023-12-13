import React, { useState, useEffect } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const fullText = "I learn. I think. I create.";
  const typingSpeed = 50; // Adjust typing speed (in milliseconds)
  const nameStyle = {
    fontFamily: '',
    fontSize: '4rem',
  };
  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className='max-h-screen flex justify-center items-center flex-col' style={{ marginTop: '140px' }}>
      <p className='text-6xl font-bold'>
        Aditya Muzumdar
      </p>
      <p className='mt-2 text-base'>
        {text}
      </p>
    </div>
  );
}

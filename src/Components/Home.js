// show user: 22bce0119
import React, { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const taglines = [
    "I learn. I build. I ship.",
    "I design.I develop.I deliver.",
    "I explore. I solve. I create.",
  ];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % taglines.length;
      const fullText = taglines[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 60 : 120);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum]);

  return (
    <div className="h-screen flex justify-center items-center flex-col text-center">
      <p className="text-6xl font-bold">Nishil Gangrade</p>
      <p className="mt-2 text-lg font-mono text-gray-700">
        {text}
        <span className="animate-pulse">|</span>
      </p>
    </div>
  );
}

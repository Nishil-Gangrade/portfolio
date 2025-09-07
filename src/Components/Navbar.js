// show user: 22bce0119
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const linkClass =
    "text-base font-semibold relative group transition-colors duration-200 hover:text-gray-600";

  const underlineClass =
    "absolute left-0 -bottom-1 h-0.5 bg-gray-600 transition-all duration-300";

  return (
    <header className="pt-5 pb-10 px-4 flex justify-center">
      <nav className="flex gap-6">
        <Link to="/" className={linkClass}>
          am
          <span className={`${underlineClass} w-0 group-hover:w-full`} />
        </Link>

        <Link to="/about" className={linkClass}>
          about
          <span className={`${underlineClass} w-0 group-hover:w-full`} />
        </Link>

        <Link to="/projects" className={linkClass}>
          projects
          <span className={`${underlineClass} w-0 group-hover:w-full`} />
        </Link>

        <Link to="/writing" className={linkClass}>
          experience
          <span className={`${underlineClass} w-0 group-hover:w-full`} />
        </Link>
      </nav>
    </header>
  );
}

import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="pt-5 pb-16 px-4 flex justify-center">
            <nav className='flex gap-4'>
            <Link
                            to="/"
                            className="text-base font-semibold"
                        >
                            am
            </Link>
            <Link
                            to="/about"
                            className="text-base font-semibold"
                        >
                            about
            </Link>
            <Link
                            to="/projects"
                            className="text-base font-semibold"
                        >
                            projects
            </Link>
            <Link
                            to="/writing"
                            className=" text-base font-semibold"
                        >
                            writing
            </Link>

                        
            
            </nav>
        </header>
    );
}





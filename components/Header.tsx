"use client";
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 text-white fixed top-0 w-full z-50 shadow-lg">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo/Name */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-accent transition">Fadhil</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-blue-600 bg-opacity-90 z-40 md:hidden" onClick={toggleMenu}>
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col items-center space-y-6 mt-12">
              <li>
                <Link href="/" className="text-white text-2xl hover:text-accent transition" onClick={toggleMenu}>Home</Link>
              </li>
              <li>
                <Link href="#about" className="text-white text-2xl hover:text-accent transition" onClick={toggleMenu}>About</Link>
              </li>
              <li>
                <Link href="#projects" className="text-white text-2xl hover:text-accent transition" onClick={toggleMenu}>Projects</Link>
              </li>
              <li>
                <Link href="#contact" className="text-white text-2xl hover:text-accent transition" onClick={toggleMenu}>Contact</Link>
              </li>
            </ul>
          </div>
        )}

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link href="/" className="hover:text-accent transition">Home</Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-accent transition">About</Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-accent transition">Projects</Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-accent transition">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

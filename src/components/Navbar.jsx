import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser, SignInButton, UserButton } from '@clerk/clerk-react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Projects', 'Testimonials'];

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? 'bg-gradient-to-r from-[#1E293B] via-[#334155] to-[#475569] shadow-xl py-2'
          : 'bg-gradient-to-r from-[#1E293B]/70 via-[#334155]/60 to-[#475569]/70 backdrop-blur-md py-4'}
      `}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-20 lg:px-32">
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => navigate('/')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white group-hover:text-indigo-400 transition duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7m-9 2v6m4-6v6m-4 0h4"
            />
          </svg>
          <h1 className="text-white text-2xl md:text-3xl font-extrabold tracking-widest drop-shadow-md group-hover:text-indigo-300 transition-colors duration-300">
            Shanti
          </h1>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-12 text-white font-medium tracking-wide text-lg">
          {navLinks.map((label) => (
            <a
              key={label}
              href={`#${label}`}
              className="relative overflow-hidden before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-full before:bg-indigo-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:block">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignInButton mode="modal">
              <button className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 px-6 py-2 rounded-full text-white font-semibold hover:brightness-110 transition duration-300 shadow-md">
                Sign in
              </button>
            </SignInButton>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <img loading="lazy" src={assets.menu_icon} alt="Menu" className="w-7 h-7 invert" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden bg-[#1E293B]/95 text-white px-6 py-6 space-y-6 absolute top-full left-0 w-full z-40 transition-all duration-300
          ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}
        `}
      >
        {navLinks.map((label) => (
          <a
            key={label}
            href={`#${label}`}
            onClick={() => setMenuOpen(false)}
            className="block text-lg font-semibold hover:text-indigo-400 transition"
          >
            {label}
          </a>
        ))}

        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <SignInButton mode="modal">
            <button
              className="w-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white py-2 rounded-full font-semibold hover:brightness-110 transition duration-300 shadow-md"
              onClick={() => setMenuOpen(false)}
            >
              Sign in
            </button>
          </SignInButton>
        )}
      </div>
    </header>
  );
};

export default Navbar;

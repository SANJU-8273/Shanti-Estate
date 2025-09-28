import React from 'react';
import Navbar from './Navbar';
import img from "../assets/3d-electric-car-building.jpg";


const Header = () => {
  return (
    <div
      className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
      style={{ backgroundImage: `url(${img})` }}
      id='Header'
    >
      <Navbar />
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2
          className="text-white text-center text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-3xl mx-auto animate-fade-up"
        >
          Discover <span className="text-blue-500">Your Dream Home</span> with Us
        </h2>


        <div className='space-x-6 mt-16'>
          <a
            className='border cursor-pointer border-white px-8 py-3 rounded-xl hover:bg-white hover:text-black transition'
            href="#Projects"
          >
            Projects
          </a>
          <a
            className='bg-blue-500 px-8 py-3 rounded-xl cursor-pointer hover:bg-blue-600 transition'
            href="#Contact"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

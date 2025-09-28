import React, { useState } from 'react';
import { assets, projectsData } from '../assets/assets';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto " id='Projects' >
      <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-center">
        Projects{' '}
        <span className="underline underline-offset-4 decoration-2 font-light">
          Completed
        </span>
      </h1>

      <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
        Crafting Spaces, Building Legacies — Explore Our Signature Developments
      </p>

      {/* Navigation Buttons */}
      <div className="flex justify-center sm:justify-end items-center mb-6">
        <button
          className="p-2 sm:p-3 bg-gray-200 rounded-full mx-1 hover:bg-gray-300 transition"
          aria-label="Previous Project"
          onClick={handlePrev}
        >
          <img src={assets.left_arrow} alt="Previous" className="w-4 sm:w-5" />
        </button>
        <button
          className="p-2 sm:p-3 bg-gray-200 rounded-full mx-1 hover:bg-gray-300 transition"
          aria-label="Next Project"
          onClick={handleNext}
        >
          <img src={assets.right_arrow} alt="Next" className="w-4 sm:w-5" />
        </button>
      </div>

      {/* Project Carousel */}
      <div className="relative overflow-hidden px-40 " >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
           
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4 sm:px-12"
            >
              <div className="relative">
                <img
                  className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-md"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute left-1/2 bottom-5 transform -translate-x-1/2 w-11/12 sm:w-2/3 bg-white bg-opacity-90 px-6 py-4 rounded-md shadow-lg text-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {project.price} &bull; <span>{project.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {projectsData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

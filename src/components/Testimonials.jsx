import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full  overflow-hidden' id='Testimonials' >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center' >Customer <span className='underline underline-offset-4 decoration-1 under font-light' >Testimonials</span></h1>
      <p className='text-center text-gray-500 bg-conic-120 max-w-80 mx-auto'>Real Stories From Those Who Found w Home With Us  </p>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 lg:gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="w-[90%] sm:w-[240px] bg-white border border-gray-100 shadow-sm rounded-lg px-4 py-6 text-center hover:shadow-md transition-shadow duration-300"
          >
            <img loading="lazy"
              className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-base font-medium text-gray-800">{testimonial.name}</h2>
            <p className="text-gray-500 mb-2 text-xs">{testimonial.title}</p>

            {/* Rating Stars */}
            <div className="flex justify-center gap-[2px] text-yellow-500 mb-3">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <img loading="lazy" src={assets.star_icon} key={i} alt="star" className="w-3.5 h-3.5" />
              ))}
            </div>

            <p className="text-gray-600 text-xs leading-snug">{testimonial.text}</p>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Testimonials
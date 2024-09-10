import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TestimonialCardProps {
  image: string;
  name: string;
  position: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, name, position, quote }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="overflow-hidden bg-gray-900 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/20 border border-gray-800 font-sans"
  >
    <div className="px-8 py-12">
      <div className="relative w-24 h-24 mx-auto">
        <img className="relative object-cover w-24 h-24 mx-auto rounded-full" src={image} alt={name} />
        <div className="absolute top-0 right-0 flex items-center justify-center bg-yellow-400 rounded-full w-7 h-7">
          <svg className="w-4 h-4 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
          </svg>
        </div>
      </div>
      <blockquote className="mt-7">
        <p className="text-lg text-gray-300 font-sans">{quote}</p>
      </blockquote>
      <p className="text-base font-semibold text-yellow-400 mt-9 font-sans">{name}</p>
      <p className="mt-1 text-base text-gray-400 font-sans">{position}</p>
    </div>
  </motion.div>
);

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-white sm:py-20 lg:py-24 relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold leading-tight text-gray-600 sm:text-4xl lg:text-5xl font-sans">
            Trusted by <span className="text-dark">10k+</span> businesses for quality printing
          </h2>
          <p className="mt-4 text-xl text-gray-600 font-sans">
            From startups to Fortune 500 companies, we deliver excellence in every print.
          </p>
        </motion.div>
        
        <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 lg:max-w-full sm:mt-16 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-10">
          <TestimonialCard 
            image="/images/testimonial/sailesh.jpg"
            name="Shailesh Bhattarai"
            position="Founder, Bhattarai Enterprises"
            quote="The quality of their business card prints is outstanding. Our team's cards make a lasting impression on clients. Fast turnaround and excellent customer service too!"
          />
          <TestimonialCard 
            image="/images/testimonial/samir.jpg"
            name="Samir Majhi"
            position="CEO, Hamro Edtech pvt ltd"
            quote="Their large format prints for our trade show booth were stunning. The colors were vibrant, and the details crisp. It really helped us stand out at the event."
          />
          <TestimonialCard 
            image="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg"
            name="Srijana kafle"
            position="Product Manager, Sajha Travels"
            quote="The brochures they printed for our product launch were simply perfect. The paper quality and color reproduction exceeded our expectations. Highly recommended!"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

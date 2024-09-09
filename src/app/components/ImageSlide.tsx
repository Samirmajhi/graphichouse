import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ImageSlideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/images/contact/con1.jpeg',
    '/images/contact/con2.jpg',
    '/images/contact/con3.jpg',
    '/images/contact/con4.jpg',
    '/images/contact/con5.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <motion.div
      className="bg-gray-900 rounded-xl shadow-lg border border-yellow-200 transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col items-center space-y-4 mx-auto w-full sm:w-[1050px] mt-16"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative overflow-hidden rounded-lg shadow-2xl w-full h-[400px] flex justify-center items-center">
        <img
          src={images[currentImage]}
          alt={`Shop ${currentImage + 1}`}
          className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-80 transition-opacity duration-500 flex flex-col justify-end p-6">
          <h3 className="text-2xl font-bold text-white">Shop Image {currentImage + 1}</h3>
          {/* <p className="text-lg mt-2 text-white">Description of image {currentImage + 1}</p> */}
        </div>
      </div>
      <div className="flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentImage ? 'bg-yellow-400' : 'bg-gray-500'}`}
          ></div>
        ))}
      </div>
    </motion.div>
  );
};

export default ImageSlideshow;

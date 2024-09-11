import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface StatItemProps {
  end: number;
  label: string;
  sublabel: string;
  plusSign?: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ end, label, sublabel, plusSign = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start > end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 p-6 rounded-lg shadow-lg border border-yellow-400 hover:shadow-yellow-400/20 transition-shadow duration-300 font-sans"
    >
      <h3 className="font-bold text-6xl md:text-7xl">
        <span className="text-yellow-400">
          {count}
          {plusSign ? '+' : ''}
        </span>
      </h3>
      <p className="mt-4 text-xl font-medium text-white">{label}</p>
      <p className="text-base mt-0.5 text-gray-300">{sublabel}</p>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/images/shop/bbb.jpg',
    '/images/shop/ccc.jpg',  
    '/images/shop/ddd.jpg',
    '/images/shop/eeee.jpg',
    '/images/shop/fff.jpg', 
    '/images/shop/gg.jpg',
    '/images/shop/hh.jpg',
    '/images/shop/ii.jpg',
    '/images/shop/jj.jpg',
    '/images/shop/kk.jpg',
    '/images/shop/mm.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section className="py-16 bg-black sm:py-20 lg:py-24 relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold leading-tight text-yellow-400 sm:text-4xl lg:text-5xl">
            Numbers tell our story
          </h2>
          <p className="mt-4 text-xl leading-relaxed text-gray-300 md:mt-6">
            Every client, whether individual or corporate, is important to us.
            Whatever your printing needs are, Graphic House has them covered.
            We are one of the most trusted names in quality digital and offset
            printing in SundarHaraincha and beyond.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 mt-12 text-center lg:mt-20 sm:gap-x-8 md:grid-cols-3">
          <StatItem end={6} label="Years in business" sublabel="Creating the successful path" plusSign={true} />
          <StatItem end={1000} label="Projects delivered" sublabel="In last 6 years" plusSign={false} />
          <StatItem end={10} label="Team members" sublabel="Working for your success" plusSign={true} />
        </div>

        <motion.div 
          className="mt-16 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-lg shadow-2xl group">
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt={`Shop ${currentImage + 1}`}
              className="object-cover w-full h-[500px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300">
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Shop Image {currentImage + 1}</h3>
                <p className="text-lg mt-2">Description of image {currentImage + 1}</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  index === currentImage ? 'bg-yellow-400' : 'bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentImage(index)}
              ></motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;

'use client';
import CTASection from './components/CallToAction';
import TestimonialSection from './components/Testimonial';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import PrintingServices from './components/Service';
import StatsSection from './components/Sucees';
import HomeFirst from './components/HomeFirst';
import TeamMember2 from './components/AdminTeam';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], ['0%', '20%']); // This is fine for parallax.

  useEffect(() => {
    // Scroll event listener inside useEffect
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        controls.start('visible');  // Only start animation after scrolling 100px
      } else {
        controls.start('hidden');
      }
    };

    // Adding event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]); // Include controls in the dependency array

  // Animation Variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const parallax = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2 },
    whileHover: { y: -5, scale: 1.02 },
  };

  const slideIn = {
    initial: { x: '-100vw' },
    animate: { x: 0 },
    transition: { type: 'spring', stiffness: 50 },
  };

  const scaleUp = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden font-sans">
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-800 p-4"
        >
          <nav className="flex flex-col space-y-4">
            <Link href="#" className="text-gray-300 hover:text-orange-500 transition duration-300">
              Home
            </Link>
            <Link href="#" className="text-gray-300 hover:text-orange-500 transition duration-300">
              About
            </Link>
            <Link href="#" className="text-gray-300 hover:text-orange-500 transition duration-300">
              Services
            </Link>
            <Link href="#" className="text-gray-300 hover:text-orange-500 transition duration-300">
              Contact
            </Link>
          </nav>
        </motion.div>
      )}

      {/* Hero Section */}
      <HomeFirst/>
      
      <PrintingServices/>

      {/* Stats Section */}
      <StatsSection/>
      <TestimonialSection/>

      <TeamMember2/>

      {/* CTA Section */}
      <CTASection/>
    </div>
  );
}

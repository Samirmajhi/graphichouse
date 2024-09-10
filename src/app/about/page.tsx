'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Zap, Trophy, Users, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    { icon: <Palette className="w-8 h-8 text-yellow-400" />, title: "Creative Design", description: "Crafting visually stunning and unique designs" },
    { icon: <Zap className="w-8 h-8 text-yellow-400" />, title: "Rapid Delivery", description: "Quick turnaround without compromising quality" },
    { icon: <Trophy className="w-8 h-8 text-yellow-400" />, title: "Award-Winning", description: "Recognized excellence in graphic design" },
    { icon: <Users className="w-8 h-8 text-yellow-400" />, title: "Client-Focused", description: "Tailored solutions to meet your specific needs" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.section className="text-center mb-20" {...fadeIn}>
        

            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="text-white">About</span> <span className="text-yellow-400">Graphic House</span>
            </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We are passionate creatives dedicated to transforming ideas into captivating visual masterpieces.
          </p>
        </motion.section>

        {/* Mission and Vision */}
        <section className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div 
            className="bg-gray-900 p-8 rounded-lg shadow-lg border border-yellow-400"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Our Mission</h2>
            <p className="text-gray-300">
              To empower businesses and individuals with exceptional graphic design solutions that elevate brands, inspire audiences, and drive success in the visual world.
            </p>
          </motion.div>
          <motion.div 
            className="bg-gray-900 p-8 rounded-lg shadow-lg border border-yellow-400"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Our Vision</h2>
            <p className="text-gray-300">
              To be the leading force in graphic design innovation, setting new standards for creativity and visual communication across industries.
            </p>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="mb-20">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-yellow-400"
            {...fadeIn}
          >
            Our Expertise
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-6 rounded-lg shadow-lg border border-yellow-400 hover:border-yellow-300 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-yellow-400"
            {...fadeIn}
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Innovation", description: "Pushing boundaries and embracing new design trends" },
              { title: "Quality", description: "Delivering excellence in every pixel and detail" },
              { title: "Collaboration", description: "Working closely with clients to bring visions to life" },
              { title: "Integrity", description: "Maintaining honesty and transparency in all our work" },
              { title: "Creativity", description: "Thinking outside the box for unique visual solutions" },
              { title: "Client-Centric", description: "Putting our clients' needs at the heart of every project" }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-6 rounded-lg shadow-lg border border-yellow-400 hover:border-yellow-300 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          className="text-center bg-gray-900 p-12 rounded-lg shadow-lg border border-yellow-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">Ready to Bring Your Vision to Life?</h2>
          <p className="text-xl text-gray-300 mb-8">Let's collaborate to create visually stunning designs that make an impact.</p>
          <Link 
            href="/contact"
            className="inline-flex items-center bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition duration-300 shadow-lg"
          >
            Start Your Project <ChevronRight className="ml-2" />
          </Link>
        </motion.section>
      </main>
    </div>
  );
}

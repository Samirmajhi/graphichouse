'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, ArrowRight, Menu, X, Briefcase, Globe, Printer, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-orange-500">Logo</div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#" className="text-gray-300 hover:text-orange-500 transition duration-300">Home</Link>
          <Link href="#" className="text-gray-300 hover:text-orange-500 transition duration-300">About</Link>
          <Link href="#" className="text-gray-300 hover:text-orange-500 transition duration-300">Services</Link>
          <Link href="#" className="text-gray-300 hover:text-orange-500 transition duration-300">Contact</Link>
        </nav>
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">Get Started</button>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="text-orange-500" /> : <Menu className="text-orange-500" />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-800 p-4"
        >
          <nav className="flex flex-col space-y-4">
            <Link href="#" className="text-gray-300 hover:text-orange-500 transition duration-300">Home</Link>
            <Link href="#" className="text-gray-300 hover:text-orange-500 transition duration-300">About</Link>
            <Link href="#" className="text-gray-300 hover:text-orange-500 transition duration-300">Services</Link>
            <Link href="#" className="text-gray-300 hover:text-orange-500 transition duration-300">Contact</Link>
          </nav>
        </motion.div>
      )}

      {/* Hero Section */}
      <motion.section className="container mx-auto px-4 py-20 text-center" {...fadeIn}>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Transforming Ideas into Stunning Visuals</h1>
        <p className="text-xl text-gray-400 mb-8">Elevate your brand with our expert design services</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300"
        >
          Get Started
        </motion.button>
      </motion.section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2 className="text-3xl font-bold text-center mb-12 text-orange-500" {...fadeIn}>
          Unlock Your Design Potential with Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Printing ', icon: <Briefcase className="w-12 h-12 text-orange-500" /> },
            { name: 'Tshirt Printing', icon: <Globe className="w-12 h-12 text-orange-500" /> },
            { name: 'Banner', icon: <Printer className="w-12 h-12 text-orange-500" /> }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="text-center bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <motion.h2 className="text-3xl font-bold text-center mb-12 text-orange-500" {...fadeIn}>
            Driving Your Design Success
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { label: 'Projects Completed', value: '250+' },
              { label: 'Satisfied Clients', value: '95%' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 p-8 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-4xl font-bold mb-2 text-orange-500">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2 className="text-3xl font-bold text-center mb-12 text-orange-500" {...fadeIn}>
          Happy Clients
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&quot;</p>

              <div className="font-semibold">John Doe</div>
              <div className="text-gray-400">CEO, Company Inc.</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2 className="text-3xl font-bold text-center mb-12 text-orange-500" {...fadeIn}>
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[...Array(8)].map((_, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold">Team Member</h3>
              <p className="text-gray-400">Designer</p>
              <div className="flex justify-center space-x-2 mt-2">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 py-20 text-center">
        <motion.h2 className="text-4xl font-bold text-white mb-6" {...fadeIn}>
          Let&#39;s create something amazing together
        </motion.h2>
        <p className="text-lg text-white mb-8">We&#39;re ready to bring your ideas to life.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-orange-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
        >
          Contact Us <ArrowRight className="w-5 h-5 inline-block ml-2" />
        </motion.button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-center text-gray-400">
        <p>&copy; Graphics House Biratchowk Your Company. All rights reserved.</p>
      </footer>
    </div>
  )
}

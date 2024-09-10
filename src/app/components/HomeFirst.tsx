'use client'

import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface FeatureProps {
  icon: ReactNode;
  title: string;
  text: string;
}

function Feature({ icon, title, text }: FeatureProps) {
  return (
    <div className="text-white text-center">
      <div className="flex justify-center items-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mt-4 text-yellow-400">{title}</h3>
      <p className="text-gray-300 mt-2">{text}</p>
    </div>
  );
}

export default function EnhancedHome() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const handlePortfolioDownload = () => {
    const pdfUrl = '/brochure.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'PrintMaster_Portfolio.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-black relative min-h-screen overflow-hidden flex flex-col">
      <div className="absolute inset-0 opacity-5"></div>

      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center py-2 px-6 lg:px-12">
        <div className="flex items-center">
          <Image src="/logo.jpg" alt="PrintMaster Logo" width={40} height={40} />
          <span className="ml-2 text-yellow-400 font-semibold text-xl">PrintMaster</span>
        </div>
        <div className="hidden md:flex space-x-6">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="text-white hover:text-yellow-400 transition-colors">
              {item}
            </Link>
          ))}
        </div>
        <Link
          href="/category"
          className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-300 transition-colors"
        >
          Get Started
        </Link>
      </nav>

      <section className="relative pt-0 pb-10 px-4 sm:pt-0 sm:pb-16 lg:pb-24 lg:min-h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">

        {/* Left Column - Text Content */}
        <motion.div
          className="relative z-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
        <motion.h1
      className="text-3xl font-small sm:text-5xl lg:text-3xl xl:text-4xl leading-tight mb-6"
      variants={itemVariants}
    >
      <span className="text-yellow-400">
        Designing, Printing & Delivery Smiles
      </span>
      {' '}
      <span className="text-gray-400">
        Since 2018
      </span>
    </motion.h1>
          <motion.p
            className="text-lg text-gray-300 sm:text-xl lg:text-2xl mb-8"
            variants={itemVariants}
          >
           
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              href="/category"
              className="inline-flex items-center justify-center px-6 py-3 font-semibold text-black transition-all duration-200 bg-yellow-400 rounded-full hover:bg-yellow-300 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              Get Started
              <svg
                className="w-5 h-5 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <button
              onClick={handlePortfolioDownload}
              aria-label="Download Brochure"
              className="inline-flex items-center justify-center px-6 py-3 font-semibold text-yellow-400 transition-all duration-200 border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              Download Brochure
              <svg
                className="w-5 h-5 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-x-12"
            variants={containerVariants}
          >
            <Feature
              icon={
                <svg
                  className="w-10 h-10 text-yellow-400"
                  viewBox="0 0 31 25"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.1667 14.1667C28.8334 14.1667 31.8334 17.1667 31.8334 20.8333C31.8334 24.5 28.8334 27.5 25.1667 27.5C21.5001 27.5 18.5001 24.5 18.5001 20.8333C18.5001 17.1667 21.5001 14.1667 25.1667 14.1667ZM27.3334 19.6667H23.0001V22.8333H27.3334V19.6667ZM6.33341 14.1667C10.0001 14.1667 13.0001 17.1667 13.0001 20.8333C13.0001 24.5 10.0001 27.5 6.33341 27.5C2.66675 27.5 -0.333252 24.5 -0.333252 20.8333C-0.333252 17.1667 2.66675 14.1667 6.33341 14.1667ZM8.50008 19.6667H4.16675V22.8333H8.50008V19.6667Z"
                  />
                </svg>
              }
              title="10,000+ Satisfied"
              text="Customers and growing"
            />
            <Feature
              icon={
                <svg
                  className="w-10 h-10 text-yellow-400"
                  viewBox="0 0 23 23"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 0L14.7451 8.37827L23 9.27702L17.25 15.4217L18.9084 23L11.5 19.125L4.09161 23L5.75 15.4217L0 9.27702L8.25494 8.37827L11.5 0Z"
                  />
                </svg>
              }
              title="100% Quality"
              text="Satisfaction guaranteed"
            />
            <Feature
              icon={
                <svg
                  className="w-10 h-10 text-yellow-400"
                  viewBox="0 0 20 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C12.76 15 15 12.76 15 10C15 7.24 12.76 5 10 5ZM10 13C8.35 13 7 11.65 7 10C7 8.35 8.35 7 10 7C11.65 7 13 8.35 13 10C13 11.65 11.65 13 10 13Z"
                  />
                </svg>
              }
              title="Secure Ordering"
              text="Safe & easy online system"
            />
          </motion.div>
        </motion.div>

        {/* Right Column - Image */}
        {/* Right Column - Full-sized Image */}
        <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative lg:block w-full h-full"
      >
        <div className="relative w-full h-full max-w-[600px] mx-auto">
            <Image
              src="/girlphoto3.png"
              alt="Printing Service Illustration"
              layout="fill"
              objectFit="contain"
              objectPosition="top"
              className="rounded-lg"
            />
          </div>
      </motion.div>
      </section>
    </div>
  );
}

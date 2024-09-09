'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ArrowUpCircle } from 'lucide-react'

interface Project {
  id: number
  title: string
  category: string
  image: string
}

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false)

  const projects: Project[] = [
    { id: 1, title: "Brand Refresh", category: "Branding", image: "/placeholder.svg" },
    { id: 2, title: "E-commerce Website", category: "Web Design", image: "/placeholder.svg" },
    { id: 3, title: "Mobile App UI", category: "UI/UX", image: "/placeholder.svg" },
    { id: 4, title: "Product Packaging", category: "Print", image: "/placeholder.svg" },
    { id: 5, title: "Social Media Campaign", category: "Digital Marketing", image: "/placeholder.svg" },
    { id: 6, title: "Corporate Identity", category: "Branding", image: "/placeholder.svg" },
    { id: 7, title: "Restaurant Menu Design", category: "Print", image: "/placeholder.svg" },
    { id: 8, title: "Tech Startup Website", category: "Web Design", image: "/placeholder.svg" },
  ]

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const handleScroll = () => {
    setShowScrollToTop(window.scrollY > 300)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useState(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative">
      <main className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.section className="text-center mb-20" {...fadeIn}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our diverse range of projects showcasing our creativity and expertise.
          </p>
        </motion.section>

        {/* Portfolio Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative group cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => setSelectedProject(project)}
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                width={400} 
                height={300} 
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-lg flex items-end p-4">
                <div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-800 p-6 rounded-lg max-w-2xl w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-2 right-2 text-gray-400 hover:text-white"
                  onClick={() => setSelectedProject(null)}
                >
                  <X />
                </button>
                <Image 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  width={600} 
                  height={400} 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                <p className="text-gray-300 mb-4">{selectedProject.category}</p>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll to Top Button */}
        {showScrollToTop && (
          <button 
            className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            onClick={scrollToTop}
          >
            <ArrowUpCircle size={24} />
          </button>
        )}
      </main>
    </div>
  )
}

"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageSlideshow from '../components/ImageSlide';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const pageVariants = {
  initial: { opacity: 0, x: -100 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 100 }
};

const pageTransition = {
  type: 'tween',
  duration: 0.5
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.message && formData.service) {
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: ''
      });
      setTimeout(() => setFormSubmitted(false), 3000);
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="contact-section bg-black text-gray-300"
    >
      <section className="py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold leading-tight text-yellow-400 sm:text-5xl lg:text-6xl">Get in Touch</h2>
            <p className="max-w-xl mx-auto mt-4 text-xl leading-relaxed text-gray-300">
              Let's bring your ideas to life with our premium printing services. Contact Graphic House today!
            </p>
          </div>

          <div className="mt-16 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Contact Info Cards */}
              <motion.div 
                className="overflow-hidden bg-gray-900 rounded-2xl shadow-lg border border-yellow-400 transition-all duration-300 hover:shadow-xl hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <FaPhoneAlt className="w-12 h-12 mx-auto text-yellow-400" />
                  <h3 className="mt-4 text-xl font-semibold text-yellow-400">Call Us</h3>
                  <p className="mt-2 text-lg text-gray-300">
                    <a href="tel:021-547547" className="hover:underline">021-547547</a>
                  </p>
                  <p className="mt-1 text-lg text-gray-300">
                    <a 
                      href="https://wa.me/9842153371" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center hover:underline"
                    >
                      <FaWhatsapp className="w-5 h-5 mr-2 text-green-500" />
                      9842153371
                    </a>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="overflow-hidden bg-gray-900 rounded-2xl shadow-lg border border-yellow-400 transition-all duration-300 hover:shadow-xl hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <FaEnvelope className="w-12 h-12 mx-auto text-yellow-400" />
                  <h3 className="mt-4 text-xl font-semibold text-yellow-400">Email Us</h3>
                  <p className="mt-2 text-sm text-gray-300">
                    Service Enquiry:
                    <a href="mailto:graphichouse2075@gmail.com" className="block hover:underline">graphichouse2075@gmail.com</a>
                  </p>
                  <p className="mt-2 text-sm text-gray-300">
                    Administrative Enquiry:
                    <a href="mailto:suman@graphichouse.com.np" className="block hover:underline">suman@graphichouse.com.np</a>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="overflow-hidden bg-gray-900 rounded-2xl shadow-lg border border-yellow-400 transition-all duration-300 hover:shadow-xl hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <FaMapMarkerAlt className="w-12 h-12 mx-auto text-yellow-400" />
                  <h3 className="mt-4 text-xl font-semibold text-yellow-400">Visit Us</h3>
                  <p className="mt-2 text-lg leading-relaxed text-gray-300">
                    <a
                      href="https://goo.gl/maps/your-location-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      SundarHaraincha-12, Biratchowk, Biratnagar Line
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-16 overflow-hidden bg-gray-900 rounded-2xl shadow-lg border border-yellow-400">
              <div className="p-8 sm:p-12">
                <h3 className="text-3xl font-bold text-center text-yellow-400">Request a Quote</h3>

                <form onSubmit={handleSubmit} className="mt-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                      <label htmlFor="name" className="text-base font-medium text-gray-300">Your name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2 block w-full px-4 py-3 text-gray-300 placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="text-base font-medium text-gray-300">Your email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2 block w-full px-4 py-3 text-gray-300 placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="text-base font-medium text-gray-300">Your phone</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2 block w-full px-4 py-3 text-gray-300 placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="text-base font-medium text-gray-300">Service needed</label>
                      <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="mt-2 block w-full px-4 py-3 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="business-cards">Business Cards</option>
                        <option value="brochures">Brochures</option>
                        <option value="flyers">Flyers</option>
                        <option value="banners">Banners</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="col-span-2">
                      <label htmlFor="message" className="text-base font-medium text-gray-300">Your message</label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Enter your message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-2 block w-full px-4 py-3 text-gray-300 placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <button
                      type="submit"
                      className="px-6 py-3 text-base font-medium text-black bg-yellow-400 rounded-lg shadow hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                      {formSubmitted ? 'Sent!' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Slideshow Section */}
            <ImageSlideshow />

      {/* Google Maps iframe */}
      <section className="py-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">Our Location</h2>
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14877708.22183004!2d69.46131391617865!3d24.442006654959698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef650c02b40799%3A0x151d311d4d49be6!2sGraphic%20House!5e0!3m2!1sen!2sin!4v1725833532530!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>
     
    </motion.div>
  );
};

export default ContactSection;
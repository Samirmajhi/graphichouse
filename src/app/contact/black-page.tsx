"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPrint, FaFileAlt, FaShippingFast } from 'react-icons/fa';

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
    <div className="contact-section bg-gradient-to-b from-blue-50 to-white">
      <section className="py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold leading-tight text-blue-900 sm:text-5xl lg:text-6xl">Get in Touch</h2>
            <p className="max-w-xl mx-auto mt-4 text-xl leading-relaxed text-blue-700">
              Let's bring your ideas to life with our premium printing services. Contact Graphic House today!
            </p>
          </div>

          <div className="mt-16 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Contact Info Cards */}
              <motion.div 
                className="overflow-hidden bg-white rounded-2xl shadow-lg border border-blue-200 transition-all duration-300 hover:shadow-xl hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <FaPhoneAlt className="w-12 h-12 mx-auto text-blue-500" />
                  <h3 className="mt-4 text-xl font-semibold text-blue-900">Call Us</h3>
                  <p className="mt-2 text-lg text-blue-700">
                    <a href="tel:021-547547" className="hover:underline">021-547547</a>
                  </p>
                  <p className="mt-1 text-lg text-blue-700">
                    <a href="tel:9842153371" className="hover:underline">9842153371</a>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="overflow-hidden bg-white rounded-2xl shadow-lg border border-blue-200 transition-all duration-300 hover:shadow-xl hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <FaEnvelope className="w-12 h-12 mx-auto text-blue-500" />
                  <h3 className="mt-4 text-xl font-semibold text-blue-900">Email Us</h3>
                  <p className="mt-2 text-sm text-blue-700">
                    Service Enquiry:
                    <a href="mailto:graphichouse2075@gmail.com" className="block hover:underline">graphichouse2075@gmail.com</a>
                  </p>
                  <p className="mt-2 text-sm text-blue-700">
                    Administrative Enquiry:
                    <a href="mailto:suman@graphichouse.com.np" className="block hover:underline">suman@graphichouse.com.np</a>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="overflow-hidden bg-white rounded-2xl shadow-lg border border-blue-200 transition-all duration-300 hover:shadow-xl hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <FaMapMarkerAlt className="w-12 h-12 mx-auto text-blue-500" />
                  <h3 className="mt-4 text-xl font-semibold text-blue-900">Visit Us</h3>
                  <p className="mt-2 text-lg leading-relaxed text-blue-700">
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

            <div className="mt-16 overflow-hidden bg-white rounded-2xl shadow-lg border border-blue-200">
              <div className="p-8 sm:p-12">
                <h3 className="text-3xl font-bold text-center text-blue-900">Request a Quote</h3>

                <form onSubmit={handleSubmit} className="mt-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                      <label htmlFor="name" className="text-base font-medium text-blue-900">Your name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2 block w-full px-4 py-3 text-blue-900 placeholder-blue-500 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="text-base font-medium text-blue-900">Your email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2 block w-full px-4 py-3 text-blue-900 placeholder-blue-500 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="text-base font-medium text-blue-900">Your phone</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2 block w-full px-4 py-3 text-blue-900 placeholder-blue-500 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="text-base font-medium text-blue-900">Service needed</label>
                      <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="mt-2 block w-full px-4 py-3 text-blue-900 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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

                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="text-base font-medium text-blue-900">Your message</label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Tell us about your printing needs"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-2 block w-full px-4 py-3 text-blue-900 placeholder-blue-500 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <motion.button
                      type="submit"
                      className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaFileAlt className="w-5 h-5 mr-2" />
                      Get Quote
                    </motion.button>
                  </div>
                </form>

                {formSubmitted && (
                  <motion.div
                    className="mt-6 p-4 text-center bg-green-100 text-green-800 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p>Thank you! We've received your request and will get back to you shortly.</p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Location</h3>
        <iframe
          className="w-full h-96 rounded-2xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d457260.3737028762!2d87.1074228941473!3d26.444552163819452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef650c02b40799%3A0x151d311d4d49be6!2sGraphic%20House!5e0!3m2!1sen!2sin!4v1725694718240!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="mt-16 bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <FaPrint className="w-12 h-12 mx-auto md:mx-0 text-blue-300 mb-4" />
              <h4 className="text-xl font-semibold">Quality Printing</h4>
              <p className="mt-2">State-of-the-art technology for crisp, vibrant prints</p>
            </div>
            <div className="text-center">
              <FaShippingFast className="w-12 h-12 mx-auto text-blue-300 mb-4" />
              <h4 className="text-xl font-semibold">Fast Turnaround</h4>
              <p className="mt-2">Quick delivery without compromising on quality</p>
            </div>
            <div className="text-center md:text-right">
              <FaFileAlt className="w-12 h-12 mx-auto md:ml-auto text-blue-300 mb-4" />
              <h4 className="text-xl font-semibold">Custom Solutions</h4>
              <p className="mt-2">Tailored printing services to meet your unique needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
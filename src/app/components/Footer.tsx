import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-yellow-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-yellow-400">Graphic House</h3>
            <p className="text-gray-300">Transforming ideas into stunning visuals since 2010.</p>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-yellow-400">Contact Us</h4>
            <p className="text-gray-300 mb-2">
              <span className="font-bold text-white">Phone:</span> 021-547547 | 9842153371
            </p>
            <p className="text-gray-300 mb-2">
              <span className="font-bold text-white">Address:</span> SundarHaraincha-12, Biratchowk, Biratnagar Line
            </p>
            <p className="text-gray-300 mb-2">
              <span className="font-bold text-white">Service Enquiry:</span>
              <a href="mailto:graphichouse2075@gmail.com" className="text-yellow-400 hover:underline ml-1">
                graphichouse2075@gmail.com
              </a>
            </p>
            <p className="text-gray-300">
              <span className="font-bold text-white">Administrative Enquiry:</span>
              <a href="mailto:suman@graphichouse.com.np" className="text-yellow-400 hover:underline ml-1">
                suman@graphichouse.com.np
              </a>
            </p>
          </div>
        
          {/* Social Media Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-yellow-400">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              {[
                { icon: FaFacebookF, label: 'Facebook' },
                { icon: FaTwitter, label: 'Twitter' },
                { icon: FaInstagram, label: 'Instagram' },
                { icon: FaLinkedinIn, label: 'LinkedIn' }
              ].map((social, index) => (
                <Link key={index} href="#" className="hover:scale-110 transition duration-300">
                  <div className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-300">
                    <social.icon size={24} className="text-black" />
                    <span className="sr-only">{social.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-yellow-400 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Design House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from "next/image";
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

export default function Footer() {
  return (
    <footer className={`${raleway.className} bg-black text-white py-12 border-t border-yellow-400`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center space-y-4 mb-6">
            {/* Logo */}
            <Image 
              src="/logo2.png" 
              alt="Graphic House Logo" 
              width={64} 
              height={64} 
              className="object-contain"
            />
            
            {/* Title and Description */}
            <div className="text-center">
              <h3 className={`${raleway.className} text-3xl font-bold mb-4 text-yellow-400`}>Graphic House</h3>
              <p className={`${raleway.className} text-gray-300`}>
                Transforming ideas into stunning visuals since 2018.
              </p>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className={`${raleway.className} text-xl font-semibold mb-4 text-yellow-400`}>Contact Us</h4>
            <p className={`${raleway.className} text-gray-300 mb-2`}>
              <span className="font-bold text-white">Phone:</span> 021-547547 | 9842153371
            </p>
            <p className={`${raleway.className} text-gray-300 mb-2`}>
              <span className="font-bold text-white">Address:</span> SundarHaraincha-12, Biratchowk, Biratnagar Line
            </p>
            <p className={`${raleway.className} text-gray-300 mb-2`}>
              <span className="font-bold text-white">Service Enquiry:</span>
              <a href="mailto:graphichouse2075@gmail.com" className={`${raleway.className} text-yellow-400 hover:underline ml-1`}>
                graphichouse2075@gmail.com
              </a>
            </p>
            <p className={`${raleway.className} text-gray-300`}>
              <span className="font-bold text-white">Administrative Enquiry:</span>
              <a href="mailto:suman@graphichouse.com.np" className={`${raleway.className} text-yellow-400 hover:underline ml-1`}>
                suman@graphichouse.com.np
              </a>
            </p>
          </div>
        
          {/* Social Media Links */}
          <div>
            <h4 className={`${raleway.className} text-xl font-semibold mb-4 text-yellow-400`}>Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              {[
                { icon: FaFacebookF, label: 'Facebook', url: 'https://www.facebook.com/graphichousebiratchowk/?ref=embed_page' },
                { icon: FaTwitter, label: 'Twitter', url: '#' },
                { icon: FaInstagram, label: 'Instagram', url: '#' },
                { icon: FaLinkedinIn, label: 'LinkedIn', url: '#' }
              ].map((social, index) => (
                <Link key={index} href={social.url} passHref className="hover:scale-110 transition duration-300" target="_blank" rel="noopener noreferrer">
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
        <div className={`${raleway.className} border-t border-yellow-400 mt-8 pt-8 text-center text-gray-400`}>
          <p>&copy; 2024 Graphic House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
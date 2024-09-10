import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-white text-white py-12 border-t border-yellow-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center space-y-4 mb-6">
      {/* Logo */}
        <Image 
          src="/logo3.png" 
          alt="Graphic House Logo" 
          width={170} 
          height={170} 
          className="object-contain"
        />
        
        {/* Title and Description */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-600"></h3>
          <p className="text-gray-600">
           
          </p>
        </div>
      </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-600">CONTACT US</h4>
            <p className="text-gray-600 mb-2">
              <span className="font-bold text-gray-600">Phone:</span> 021-547547 | 9842153371
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold text-gray">Address:</span> SundarHaraincha, Biratchowk
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold text-gray">Service Enquiry:</span>
              <a href="mailto:graphichouse2075@gmail.com" className="text-gray-600 hover:underline ml-1">
                graphichouse2075@gmail.com
              </a>
            </p>
         
            
          </div>
        
          {/* Social Media Links */}
          {/* Social Media Links */}
        {/* Social Media Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-gray-600">Connect With Us</h4>
          <div className="flex space-x-4 mb-4">
            {[
              { icon: FaFacebookF, label: 'Facebook', url: 'https://www.facebook.com/graphichousebiratchowk/?ref=embed_page' },
    
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
        <div className="border-t border-yellow-400 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Graphic House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
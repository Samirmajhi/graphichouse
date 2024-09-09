"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/category" },
    { name: "Contact", href: "/contact" }
  ];

  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };
  const handleItemClick = () => {
    router.push('/contact'); // Navigates to the /contact page
  };
 
  

  return (
    <nav className={`bg-black text-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "h-14" : "h-16"}`}>
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <Link href="/" className="flex items-center" onClick={handleNavItemClick}>
          <Image
            src="/logo.jpg"
            alt="Company Logo"
            width={48}
            height={16}
            className="object-contain"
          />
        </Link>
        <div className="hidden md:flex items-center justify-center flex-grow">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-sm font-medium text-gray-400 hover:text-yellow-400 transition duration-300 mx-4"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          <Link href='/contact'>
          <button className="hidden md:block bg-yellow-400 text-black px-4 py-1.5 rounded-full hover:bg-yellow-500 transition duration-300 text-sm font-semibold">
            Get Started
            
          </button>
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-white ml-4 focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black absolute top-full left-0 right-0 shadow-lg">
          <div className="container mx-auto px-4 py-2">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="block py-2 text-sm font-medium text-gray-400 hover:text-yellow-400 transition duration-300"
                onClick={handleNavItemClick}
              >
                {item.name}
              </Link>
            ))}
             <button 
            className="w-full mt-2 bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition duration-300 text-sm font-semibold"
            onClick={handleItemClick}
          >
            Get Started
          </button>
          
          </div>
        </div>
      )}
    </nav>
  );
}

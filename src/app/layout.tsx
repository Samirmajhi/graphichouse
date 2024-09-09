import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Link from "next/link";
import Navbar from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Graphic House - Transforming Ideas into Stunning Visuals",
  description: "Expert design services to elevate your brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Navbar/>


        {/* Main Content */}
        <main>{children}</main>
        <Footer/>


        
      </body>
    </html>
  );
}


//         {/* Header */}
//         <header className="bg-gradient-to-r from-[#1A237E] to-[#3F51B5] text-white py-4 shadow-lg">
//   <div className="container mx-auto px-4 flex justify-between items-center">
//     {/* Logo on the left */}
//     <Link href="/" className="text-2xl font-bold text-orange-300 hover:text-white transition duration-300">
//       Your Logo
//     </Link>
    
//     {/* Navigation centered */}
//     <nav className="hidden md:flex space-x-6 justify-center flex-grow">
//       <Link href="/" className="text-white hover:text-orange-300 transition duration-300">
//         Home
//       </Link>
//       <Link href="/about" className="text-white hover:text-orange-300 transition duration-300">
//         About
//       </Link>
//       <Link href="/category" className="text-white hover:text-orange-300 transition duration-300">
//         Services
//       </Link>
//       <Link href="/contact" className="text-white hover:text-orange-300 transition duration-300">
//         Contact
//       </Link>
//     </nav>
//   </div>
// </header>

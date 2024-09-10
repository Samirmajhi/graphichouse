import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ServiceItem {
  image: string;
  title: string;
  description: string;
}

const serviceList: ServiceItem[] = [
  {
    image: '/images/offset.jpg',
    title: 'OFFSET',
    description: 'Graphic house has offset printing facility. Graphic House offer all services related to Offset printing. By offering  offset printing  the client can benefit from the choice of the most cost effective printing method and need based solution.',
  },
  {
    image: '/images/board.jpg',
    title: 'DIGITAL',
    description: 'We offer high-quality, customizable prints with quick turnaround times, ideal for everything from marketing materials to personal projects. We provide precise color matching and the flexibility to print in various formats and sizes.',
  },
  {
    image: '/images/flex1.jpg',
    title: 'ADVERTISING',
    description: 'For a printing press specializing in flex and hoarding board advertising, services can include creating dynamic outdoor advertisements that capture attention.',
  },
  {
    image: '/images/garment.jpg',
    title: 'GARMENT',
    description: 'We provide custom-designed and tailored uniforms for businesses, schools, and organizations. These services include everything from designing and producing uniforms to ensuring quality and comfort, with options for various industries and purposes.',
  },
];

const ServiceItem: React.FC<{ service: ServiceItem }> = ({ service }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 font-sans">
    <div className="relative">
      <Image src={service.image} alt={service.title} width={300} height={200} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <Link href="#" className="text-yellow-400 hover:text-yellow-300 flex items-center bg-black bg-opacity-75 px-4 py-2 rounded-full">
          Learn more
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
    <div className="p-6 font-sans">
      <h3 className="text-2xl font-bold mb-3 text-yellow-400">{service.title}</h3>
      <p className="text-gray-700 mb-4">{service.description}</p>
    </div>
  </div>
);

const PrintingServices: React.FC = () => {
  return (
    <section className="py-16 bg-white font-sans">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-600">Printing Services for Every Occasion</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our premium printing solutions bring your ideas to life with quality and style.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Link href="/category" className="inline-flex items-center px-8 py-4 border-2 border-yellow-400 text-lg font-bold rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-white transition-colors duration-300">
            Explore All Services
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PrintingServices;

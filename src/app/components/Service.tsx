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
    image: '/images/weeding_card.jpeg',
    title: 'Wedding Cards',
    description: 'Create memorable wedding invitations that reflect your special day with our custom design and printing services.',
  },
  {
    image: '/images/3d board.jpeg',
    title: 'Banners',
    description: 'Make a big impact with high-quality, durable banners perfect for events, promotions, and advertising.',
  },
  {
    image: '/images/visiting1.avif',
    title: 'Visiting Cards',
    description: 'Leave a lasting impression with professionally designed and printed business cards that represent your brand.',
  },
  {
    image: '/images/flex-desing.jpg',
    title: 'On-Demand Print',
    description: 'Fast and efficient printing services for your urgent needs, with quick turnaround times and high-quality results.',
  },
];

const ServiceItem: React.FC<{ service: ServiceItem }> = ({ service }) => (
  <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
    <div className="relative">
      <Image src={service.image} alt={service.title} width={300} height={200} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <Link href="#" className="text-yellow-400 hover:text-yellow-300 flex items-center bg-black bg-opacity-75 px-4 py-2 rounded-full">
          Learn more
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-3 text-yellow-400">{service.title}</h3>
      <p className="text-gray-300 mb-4">{service.description}</p>
    </div>
  </div>
);

const PrintingServices: React.FC = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-6 text-yellow-400">Printing Services for Every Occasion</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From weddings to business needs, our premium printing solutions bring your ideas to life with quality and style.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Link href="/category" className="inline-flex items-center px-8 py-4 border-2 border-yellow-400 text-lg font-bold rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors duration-300">
            Explore All Services
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PrintingServices;
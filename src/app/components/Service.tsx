import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const serviceList = [
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

const ServiceItem = ({ service }) => (
  <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-yellow-400">
    <div className="relative h-48 w-full">
      <Image
        src={service.image}
        alt={service.title}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-3 text-yellow-400">{service.title}</h3>
      <p className="text-gray-300 leading-relaxed mb-4">{service.description}</p>
      <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} passHref>
        <span className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors duration-200 flex items-center">
          Learn more
          <ArrowRight className="ml-2 w-4 h-4" />
        </span>
      </Link>
    </div>
  </div>
);

const PrintingServices = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white leading-tight">
            Printing Services <span className="text-yellow-400">for Every Occasion</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From weddings to business needs, our premium printing solutions bring your ideas to life with quality and style.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {serviceList.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/category" passHref>
            <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-black bg-yellow-400 hover:bg-yellow-300 transition duration-300 ease-in-out shadow-lg hover:shadow-xl">
              Explore All Services
              <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PrintingServices;
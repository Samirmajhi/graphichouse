import React, { useState } from 'react';
import { Code, Camera, Pen, PenTool, BookOpen, Database } from 'lucide-react';

const serviceList = [
  {
    color: 'yellow',
    icon: <Camera />,
    title: 'Photography',
    description: 'Capture moments and create stunning visuals for your brand or personal projects.',
  },
  {
    color: 'blue',
    icon: <Code />,
    title: 'Web Development',
    description: 'Build responsive and dynamic websites using the latest technologies and best practices.',
  },
  {
    color: 'green',
    icon: <Pen />,
    title: 'Content Writing',
    description: 'Craft engaging and SEO-friendly content to boost your online presence and audience engagement.',
  },
  {
    color: 'purple',
    icon: <PenTool />,
    title: 'Graphic Design',
    description: 'Create eye-catching visuals and branding materials to make your business stand out.',
  },
  {
    color: 'pink',
    icon: <BookOpen />,
    title: 'Digital Marketing',
    description: 'Develop and execute comprehensive digital marketing strategies to grow your online presence.',
  },
  {
    color: 'indigo',
    icon: <Database />,
    title: 'Data Analysis',
    description: 'Turn raw data into actionable insights to drive informed business decisions.',
  },
];

const ServiceItem = ({ service, isActive, onClick }) => (
  <div 
    className={`bg-white dark:bg-slate-800 rounded-lg p-6 h-full transition-all duration-300 cursor-pointer ${
      isActive ? 'shadow-lg scale-105' : 'hover:shadow-md hover:scale-102'
    }`}
    onClick={onClick}
  >
    <div className={`flex items-center justify-center w-16 h-16 rounded-full mb-4 text-${service.color}-500 bg-${service.color}-100 dark:bg-${service.color}-900 dark:bg-opacity-20`}>
      {service.icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
  </div>
);

const PrintingServices= () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our range of professional services designed to help your business grow and succeed in the digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <ServiceItem 
              key={index} 
              service={service} 
              isActive={activeService === index}
              onClick={() => setActiveService(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrintingServices;
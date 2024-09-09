import React, { useRef } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation for App Router
import styles from './services.css'; // Use module.css for better scope isolation

const services = [
  { title: 'Logo Design', description: 'Custom logo designs to create memorable brands.', icon: '🎨', category: 'logo-design' },
  { title: 'Print Materials', description: 'Professionally designed print materials for marketing.', icon: '🖨️', category: 'print-materials' },
  { title: 'Visiting Cards', description: 'High-quality visiting cards that leave an impression.', icon: '💼', category: 'visiting-cards' },
  { title: 'Brochure Design', description: 'Professional brochures to enhance your brand visibility.', icon: '📖', category: 'brochure-design' },
  { title: 'Web Design', description: 'Responsive websites that attract customers.', icon: '💻', category: 'web-design' },
  { title: 'Social Media Graphics', description: 'Engaging graphics for your social media presence.', icon: '📱', category: 'social-media-graphics' },
];

const ServicesSection = () => {
  const router = useRouter(); // Correctly use the App Router navigation API
  const scrollRef = useRef(null);

  const handleServiceClick = (category) => {
    router.push(`/category/${category}`); // Use router.push for navigation
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className={styles['services-section']}>
      <div className={styles['services-header']}>
        <h2>Unlock Your Design Potential with Our Services</h2>
        <p>
          From logo design to website development, we deliver stunning graphics and visuals that help your brand stand out. Browse through our wide range of services.
        </p>
      </div>

      <div className={styles['services-container']}>
        {/* Left arrow button */}
        <button className={`${styles['scroll-button']} ${styles['left']}`} onClick={() => scroll('left')} aria-label="Scroll Left">
          &#9664;
        </button>

        <div className={styles['services-grid']} ref={scrollRef}>
          {services.map((service) => (
            <div
              key={service.title}
              className={styles['service-card']}
              onClick={() => handleServiceClick(service.category)}
            >
              <div className={styles['service-icon']}>{service.icon}</div>
              <h3 className={styles['service-title']}>{service.title}</h3>
              <p className={styles['service-description']}>{service.description}</p>
              <button className={styles['service-link']} aria-label={`Learn more about ${service.title}`}>
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Right arrow button */}
        <button className={`${styles['scroll-button']} ${styles['right']}`} onClick={() => scroll('right')} aria-label="Scroll Right">
          &#9654;
        </button>
      </div>

      {/* Progress indicators */}
      <div className={styles['progress-indicators']}>
        {services.map((_, index) => (
          <span key={index} className={styles['progress-dot']}></span>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

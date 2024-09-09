import React from 'react';
import Image from 'next/image';
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    picture: "/images/admin/suman-katwal.jpg",
    fullName: "Suman Katwal",
    designation: "Director",
    bio: "With over 15 years of experience in the printing industry, Suman leads our company with vision and expertise.",
    socialLinks: [
      { name: "Facebook", icon: Facebook, href: "#" },
      { name: "LinkedIn", icon: Linkedin, href: "#" },
      { name: "Twitter", icon: Twitter, href: "#" },
      { name: "Instagram", icon: Instagram, href: "#" },
    ],
  },
  {
    picture: "/images/admin/jyoti-chapagain.jpg",
    fullName: "Jyoti Chapagain",
    designation: "Administrator",
    bio: "Jyoti ensures smooth operations and excellent customer service across all our printing services.",
    socialLinks: [
      { name: "Facebook", icon: Facebook, href: "#" },
      { name: "LinkedIn", icon: Linkedin, href: "#" },
      { name: "Twitter", icon: Twitter, href: "#" },
      { name: "Instagram", icon: Instagram, href: "#" },
    ],
  },
  {
    picture: "/images/admin/laxman-khatri.jpg",
    fullName: "Laxman Khatri",
    designation: "Marketing Manager",
    bio: "Laxman's innovative strategies help us reach new clients and showcase our premium printing solutions.",
    socialLinks: [
      { name: "Facebook", icon: Facebook, href: "#" },
      { name: "LinkedIn", icon: Linkedin, href: "#" },
      { name: "Twitter", icon: Twitter, href: "#" },
      { name: "Instagram", icon: Instagram, href: "#" },
    ],
  },
  {
    picture: "/images/admin/tanka-dulal.jpg",
    fullName: "Tanka Dulal",
    designation: "Printing Coordinator",
    bio: "Tanka's attention to detail ensures every print job meets our high standards of quality and timeliness.",
    socialLinks: [
      { name: "Facebook", icon: Facebook, href: "#" },
      { name: "LinkedIn", icon: Linkedin, href: "#" },
      { name: "Twitter", icon: Twitter, href: "#" },
      { name: "Instagram", icon: Instagram, href: "#" },
    ],
  },
];

const TeamMemberItem = ({ member }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-yellow-400/20 hover:-translate-y-2 group"
  >
    <div className="relative w-48 h-48 mx-auto mt-8 mb-4 overflow-hidden rounded-full border-4 border-yellow-400/30 group-hover:border-yellow-400 transition-all duration-300">
      <Image
        src={member.picture}
        alt={member.fullName}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="p-6 text-center">
      <h4 className="text-2xl font-bold mb-2 text-white">{member.fullName}</h4>
      <h6 className="text-lg font-medium mb-4 text-yellow-400">{member.designation}</h6>
      <p className="text-gray-300 mb-6">{member.bio}</p>
      <div className="flex justify-center space-x-4">
        {member.socialLinks.map((link, i) => (
          <a
            href={link.href}
            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
            key={i}
            aria-label={link.name}
          >
            <link.icon size={20} />
          </a>
        ))}
      </div>
    </div>
  </motion.div>
);

const TeamMember2 = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
            Meet Our <span className="text-white">Core Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our experienced professionals are dedicated to delivering exceptional printing services and ensuring your complete satisfaction.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <TeamMemberItem key={i} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMember2;
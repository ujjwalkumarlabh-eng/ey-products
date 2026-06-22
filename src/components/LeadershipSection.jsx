import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import directorImg from '../assets/leaders/Director.jpeg';
import director2Img from '../assets/leaders/Director_2.jpeg';
import partnerImg from '../assets/leaders/Partner.jpeg';
import srManagerImg from '../assets/leaders/Sr_Manager.jpeg';

const leaders = [
  {
    name: "Mr Amit V Singh",
    role: "Principal Partner",
    tenure: "20+ years",
    domain: "Digital Transformation",
    bio: "Technology consulting leader delivering large-scale programs across urban planning, telecom, and tourism sectors.",
    initials: "AVS",
    image: partnerImg,
  },
  {
    name: "Ashutosh K Rai",
    role: "Director — Technology Consulting",
    tenure: "15+ years",
    domain: "Strategic Programs",
    bio: "Leads client engagements and delivery excellence across urban planning, telecom, and tourism platforms.",
    initials: "AKR",
    image: directorImg,
  },
  {
    name: "Manu Nahar",
    role: "Director — Technology Consulting",
    tenure: "15+ years",
    domain: "Technology Solutions",
    bio: "15+ years of experience in GovTech and enterprise software, driving technology strategy and solution delivery.",
    initials: "MN",
    image: director2Img,
  },
  {
    name: "Saurav Acharya",
    role: "Senior Manager",
    tenure: "8+ years",
    domain: "Cross-functional Delivery",
    bio: "Drives successful project outcomes across urban planning, telecommunications, and tourism, leading cross-functional teams.",
    initials: "SA",
    image: srManagerImg,
  },
];

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="relative py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden bg-gray-950"
    >
      {/* Subtle radial glow */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none bg-yellow-400/10 blur-[100px]" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 text-xs font-semibold tracking-[0.2em] uppercase">
            the team
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
            Leadership <span className="text-yellow-400">& Vision</span>
          </h2>
        </div>

        {/* Leader cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3)' }}
              className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-yellow-400" />
              
              <div className="p-6">
                {/* Photo */}
                <div className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-yellow-400/30 mb-5">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & role */}
                <h3 className="text-lg font-bold text-white">{leader.name}</h3>
                <p className="text-yellow-400 text-sm font-medium mt-1">{leader.role}</p>
                
                {/* Domain tag */}
                <span className="inline-block text-xs font-mono px-2 py-1 rounded-md bg-gray-800 text-gray-400 border border-gray-700 mt-2">
                  {leader.domain}
                </span>
                
                {/* Bio */}
                <p className="text-gray-400 text-sm leading-relaxed mt-4">{leader.bio}</p>
                
                {/* Divider */}
                <div className="my-5 h-px bg-gray-800" />
                
                {/* LinkedIn CTA */}
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 transition-all"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <LucideIcons.Link className="w-4 h-4" />
                  View on LinkedIn
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

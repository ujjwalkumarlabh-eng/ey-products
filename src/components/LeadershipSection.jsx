import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import directorImg from '../assets/leaders/Director.jpeg';
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
    accent: { color: '#5B4FE8', bg: 'rgba(91,79,232,0.1)', border: 'rgba(91,79,232,0.3)' },
  },
  {
    name: "Ashutosh K Rai",
    role: "Director — Technology Consulting",
    tenure: "15+ years",
    domain: "Strategic Programs",
    bio: "Leads client engagements and delivery excellence across urban planning, telecom, and tourism platforms.",
    initials: "AKR",
    image: directorImg,
    accent: { color: '#0EA5E9', bg: 'rgba(14,165,233,0.1)', border: 'rgba(14,165,233,0.3)' },
  },
  {
    name: "Saurav Acharya",
    role: "Senior Manager",
    tenure: "8+ years",
    domain: "Cross-functional Delivery",
    bio: "Drives successful project outcomes across urban planning, telecommunications, and tourism, leading cross-functional teams.",
    initials: "SA",
    image: srManagerImg,
    accent: { color: '#10B981', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.3)' },
  },
];

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ backgroundColor: '#080B14' }}
    >
      {/* Subtle radial glow — top right */}
      <div
        className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 65%)',
          filter: 'blur(48px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ backgroundColor: '#0EA5E9' }}
              />
              <span
                className="text-[11px] font-mono tracking-[0.2em] uppercase"
                style={{ color: '#6B7A99' }}
              >
                the team
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight"
              style={{ color: '#F0F2FF' }}
            >
              Leadership{' '}
              <span
                style={{
                  WebkitTextStroke: '1.5px #facc15',
                  color: 'transparent',
                }}
              >
                & Vision
              </span>
            </h2>
          </div>

          <p
            className="max-w-xs text-sm leading-relaxed md:text-right"
            style={{ color: '#6B7A99' }}
          >
            The people who set direction, own accountability, and have shipped enterprise systems at scale.
          </p>
        </div>

        {/* ── Leader cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
              whileHover="hover"
              className="group relative rounded-2xl overflow-hidden cursor-default"
              style={{
                backgroundColor: '#0D1117',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Hover border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ border: `1px solid ${leader.accent.border}` }}
                variants={{ hover: { opacity: 1 }, rest: { opacity: 0 } }}
                initial="rest"
                transition={{ duration: 0.2 }}
              />

              {/* Top accent line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ backgroundColor: leader.accent.color, transformOrigin: 'left' }}
                variants={{ hover: { scaleX: 1, opacity: 1 }, rest: { scaleX: 0, opacity: 0 } }}
                initial="rest"
                transition={{ duration: 0.25, ease: 'easeOut' }}
              />

              <div className="p-6">

                {/* ── Photo + meta row ── */}
                <div className="flex items-start justify-between mb-5">
                  {/* Avatar with accent ring */}
                  <div
                    className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0"
                    style={{
                      border: `2px solid ${leader.accent.border}`,
                      boxShadow: `0 0 0 3px rgba(0,0,0,0.5)`,
                    }}
                  >
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Tenure chip */}
                  <span
                    className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{
                      color: leader.accent.color,
                      backgroundColor: leader.accent.bg,
                    }}
                  >
                    {leader.tenure}
                  </span>
                </div>

                {/* ── Name & role ── */}
                <h3
                  className="text-base font-bold leading-snug"
                  style={{ color: '#F0F2FF' }}
                >
                  {leader.name}
                </h3>

                <p
                  className="text-xs font-medium mt-0.5 mb-1"
                  style={{ color: leader.accent.color, opacity: 0.9 }}
                >
                  {leader.role}
                </p>

                {/* Domain tag */}
                <span
                  className="inline-block text-[10px] font-mono px-2 py-0.5 rounded-md mb-4"
                  style={{
                    color: '#7A8499',
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  {leader.domain}
                </span>

                {/* ── Bio ── */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#7A8499' }}
                >
                  {leader.bio}
                </p>

                {/* ── Divider ── */}
                <div
                  className="my-5 h-px"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                />

                {/* ── Footer: LinkedIn CTA ── */}
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: leader.accent.color }}
                  variants={{ hover: { x: 3 }, rest: { x: 0 } }}
                  transition={{ duration: 0.2 }}
                >
                  <LucideIcons.Link className="w-3.5 h-3.5" />
                  View on LinkedIn
                  <LucideIcons.ArrowUpRight className="w-3 h-3 opacity-70" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom rule ── */}
        <div
          className="mt-20 h-px w-full"
          style={{
            background: 'linear-gradient(90deg, transparent, #0EA5E9 40%, #0EA5E9 60%, transparent)',
            opacity: 0.2,
          }}
        />
      </div>
    </section>
  );
}
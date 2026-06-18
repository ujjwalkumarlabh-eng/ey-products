import { motion, useScroll, useTransform, animate, useMotionValue, useInView } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Animated counting number
function CountUp({ to, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, to, duration]);

  return <span ref={ref}>{display}{suffix}</span>;
}

const STATS = [
  { value: 6, suffix: '', label: 'Production Platforms' },
  { value: 12, suffix: '+', label: 'Gov Modules' },
  { value: 99, suffix: '%', label: 'Uptime SLA' },
  { value: 3, suffix: 'x', label: 'Faster Deployments' },
];

const TAGS = ['AI-Powered', 'Multi-Tenant', 'GovTech', 'Field Survey', 'RBAC', 'GeoDjango'];

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gray-950"
    >
      {/* Geometric grid background */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <svg width="100%" height="100%" className="opacity-[0.06]">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Yellow accent glow — top right */}
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-yellow-400/10 blur-[120px]" />
        {/* Subtle blue counter-glow — bottom left */}
        <div className="absolute -bottom-40 -left-20 w-[500px] h-[400px] rounded-full bg-sky-500/8 blur-[100px]" />
      </motion.div>
      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16 pt-28 pb-20"
      >
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">

          {/* Left — headline block */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="block w-8 h-px bg-yellow-400" />
              <span className="text-yellow-400 text-xs font-semibold tracking-[0.2em] uppercase">
                Ernst &amp; Young · Enterprise Software
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight"
            >
              Platforms built
              <br />
              <span className="relative">
                <span className="text-yellow-400">for Government</span>
                {/* Underline accent */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-2 left-0 right-0 h-[3px] bg-yellow-400/40 origin-left block rounded-full"
                />
              </span>
              <br />
              &amp; Enterprise.
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 text-gray-400 text-lg leading-relaxed max-w-xl"
            >
              Six production-ready platforms spanning AI, GovTech, citizen engagement,
              and field survey
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 mt-10"
            >
              <motion.button
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-yellow-400 text-gray-950 text-sm font-bold tracking-wide transition-colors hover:bg-yellow-300"
              >
                Explore Products
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>

              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white/80 text-sm font-medium hover:border-white/30 hover:text-white transition-all"
              >
                Request a Demo
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right — stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
                className={`relative p-6 rounded-2xl border border-white/8 bg-white/[0.04] overflow-hidden group hover:bg-white/[0.07] transition-colors duration-300 ${
                  i === 0 ? 'col-span-2' : ''
                }`}
              >
                {/* Corner accent */}
                <span className="absolute top-0 right-0 w-12 h-12 bg-yellow-400/10 rounded-bl-2xl group-hover:bg-yellow-400/20 transition-colors duration-300" />
                <p className="text-3xl md:text-4xl font-bold text-white tabular-nums">
                  <CountUp to={stat.value} suffix={stat.suffix} duration={1.8} />
                </p>
                <p className="mt-1.5 text-sm text-gray-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}

            {/* Trusted by badge */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="col-span-2 flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-yellow-400/20 bg-yellow-400/5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400" />
              </span>
              
            </motion.div> */}
          </motion.div>
        </div>

        {/* Bottom scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="block w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
          />
          <span className="text-[10px] text-white/20 tracking-[0.2em] uppercase">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import eyLogoLight from '../assets/ey-logo-footer.png';
import eyLogoDark from '../assets/Logo-Ernst-Young-dark.jpg';

const NAV_ITEMS = [
  { label: 'Products', id: 'products' },
  { label: 'Leadership', id: 'leadership' },
  { label: 'Contact', id: 'contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Track scroll for background transition
  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 40));
    return unsub;
  }, [scrollY]);

  // Track active section for nav highlight
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="flex-shrink-0 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={scrolled ? 'light' : 'dark'}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  src={scrolled ? eyLogoLight : eyLogoDark}
                  alt="EY"
                  className="h-8 md:h-9 w-auto"
                />
              </AnimatePresence>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 group"
                >
                  <span
                    className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'text-yellow-500'
                        : scrolled
                        ? 'text-gray-700 group-hover:text-gray-900'
                        : 'text-white/90 group-hover:text-white'
                    }`}
                  >
                    {item.label}
                  </span>
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-px bg-yellow-500 transition-transform duration-300 origin-left ${
                      activeSection === item.id
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-colors duration-200 shadow-sm ${
                  scrolled
                    ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
                    : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30'
                }`}
              >
                Get a Demo
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileMenuOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu — full-screen overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.2 }}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center justify-between w-full px-3 py-3.5 rounded-xl text-left text-gray-800 font-medium hover:bg-yellow-50 hover:text-yellow-700 transition-colors group"
                >
                  {item.label}
                  <ArrowUpRight
                    size={14}
                    className="text-gray-300 group-hover:text-yellow-500 transition-colors"
                  />
                </motion.button>
              ))}

              <div className="mt-3 pt-4 border-t border-gray-100">
                <motion.button
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => scrollToSection('contact')}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-sm tracking-wide transition-colors shadow-sm"
                >
                  Get a Demo
                  <ArrowUpRight size={14} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
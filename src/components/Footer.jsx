import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import eyLogo from '../assets/ey-logo-footer.png';

const SOCIAL_LINKS = [
  { icon: LucideIcons.Link, href: '#', label: 'LinkedIn' },
  { icon: LucideIcons.X, href: '#', label: 'Twitter' },
  { icon: LucideIcons.Code, href: '#', label: 'GitHub' },
];

const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer({ onProductClick }) {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden pt-20 pb-8 px-6 md:px-12 lg:px-20 bg-gray-950 border-t border-gray-800"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#fbbf24 1px, transparent 1px), linear-gradient(90deg, #fbbf24 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Bottom-left glow */}
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full pointer-events-none bg-yellow-400/10 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-8 md:p-10 mb-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-gray-900 border border-yellow-400/30"
        >
          <div>
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-yellow-400 mb-2 block">
              ready to ship?
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              See the platforms <span className="text-yellow-400">in action</span>
            </h3>
          </div>

          <a
            href="mailto:Ashutosh.Rai1@in.ey.com"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-gray-900 text-sm font-bold bg-yellow-400 hover:bg-yellow-300 transition-all"
          >
            Request a Demo
            <LucideIcons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          {/* Brand column */}
          <div className="md:col-span-4">
            <img
              src={eyLogo}
              alt="EY"
              className="h-10 object-contain mb-4"
              style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }}
            />

            <p className="text-sm leading-relaxed text-gray-400 mb-6 max-w-xs">
              Enterprise software for government, built with precision. Six platforms. One team. Zero compromises.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-gray-800 border border-gray-700 text-gray-400 hover:bg-yellow-400/10 hover:border-yellow-400/30 hover:text-yellow-400 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products column */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-mono tracking-[0.2em] uppercase text-yellow-400 mb-5">
              Platforms
            </h4>
            <ul className="space-y-2.5">
              {products.map((product) => (
                <li key={product.id}>
                  <button
                    onClick={() => onProductClick(product)}
                    className="group inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-yellow-400 transition-all"
                  >
                    {product.name}
                    <LucideIcons.ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links + Contact */}
          <div className="md:col-span-4 flex flex-col gap-8">
            {/* Quick links */}
            <div>
              <h4 className="text-[11px] font-mono tracking-[0.2em] uppercase text-yellow-400 mb-5">
                Navigate
              </h4>
              <ul className="grid grid-cols-2 gap-2">
                {QUICK_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-gray-400 hover:text-yellow-400 transition-all"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[11px] font-mono tracking-[0.2em] uppercase text-yellow-400 mb-5">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:Ashutosh.Rai1@in.ey.com"
                    className="inline-flex items-center gap-2.5 text-sm text-gray-400 hover:text-yellow-400 transition-all"
                  >
                    <LucideIcons.Mail className="w-3.5 h-3.5 flex-shrink-0 text-yellow-400" />
                    Ashutosh.Rai1@in.ey.com
                  </a>
                </li>
                <li>
                  <span className="inline-flex items-center gap-2.5 text-sm text-gray-400">
                    <LucideIcons.MapPin className="w-3.5 h-3.5 flex-shrink-0 text-yellow-400" />
                    New Delhi, India
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-gray-800">
          <p className="text-xs font-mono text-gray-500">
            © 2025 Ernst & Young LLP. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-yellow-400" />
            <span className="text-xs font-mono text-gray-500">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

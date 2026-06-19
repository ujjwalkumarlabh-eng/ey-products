import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import eyLogo from '../assets/ey-logo-footer.png';

const SOCIAL_LINKS = [
  { icon: LucideIcons.Link, href: '#', label: 'LinkedIn' },
  { icon: LucideIcons.X,  href: '#', label: 'Twitter'  },
  { icon: LucideIcons.Code,   href: '#', label: 'GitHub'   },
];

const QUICK_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Products',   href: '#products'   },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact',    href: '#contact'    },
];

export default function Footer({ onProductClick }) {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden pt-20 pb-8 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: '#06080F', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Background grid — same as ProductsSection for visual continuity */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#a8b5ff 1px, transparent 1px),
            linear-gradient(90deg, #a8b5ff 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Bottom-left glow */}
      <div
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(91,79,232,0.12) 0%, transparent 70%)',
          filter: 'blur(48px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">

        {/* ── CTA banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-8 md:p-10 mb-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          style={{
            backgroundColor: '#0D1117',
            border: '1px solid rgba(91,79,232,0.25)',
            boxShadow: '0 0 40px rgba(91,79,232,0.08)',
          }}
        >
          <div>
            <p
              className="text-[11px] font-mono tracking-[0.2em] uppercase mb-2"
              style={{ color: '#6B7A99' }}
            >
              ready to ship?
            </p>
            <h3
              className="text-2xl md:text-3xl font-extrabold tracking-tight"
              style={{ color: '#F0F2FF' }}
            >
              See the platforms{' '}
              <span style={{ WebkitTextStroke: '1.5px #facc15', color: 'transparent' }}>
                in action
              </span>
            </h3>
          </div>

          <a
            href="mailto:hello@ey.com"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-md font-bold transition-all duration-200 hover:gap-3.5 flex-shrink-0"
            style={{
              backgroundColor: '#e8bb03ff',
              color: '#fff',
            }}
          >
            Request a Demo
            <LucideIcons.ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">

          {/* Brand column — 4 cols */}
          <div className="md:col-span-4">
            {/* Logo */}
            <div className="mb-4">
              <img
                src={eyLogo}
                alt="EY"
                className="h-10 object-contain"
                style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }}
              />
            </div>

            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: '#6B7A99' }}
            >
              Enterprise software for government, built with precision. Six platforms. One team. Zero compromises.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#6B7A99',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(91,79,232,0.15)';
                    e.currentTarget.style.borderColor = 'rgba(91,79,232,0.4)';
                    e.currentTarget.style.color = '#5B4FE8';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = '#6B7A99';
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products column — 4 cols */}
          <div className="md:col-span-4">
            <h4
              className="text-[11px] font-mono tracking-[0.2em] uppercase mb-5"
              style={{ color: '#6B7A99' }}
            >
              Platforms
            </h4>
            <ul className="space-y-2.5">
              {products.map((product) => (
                <li key={product.id}>
                  <button
                    onClick={() => onProductClick(product)}
                    className="group inline-flex items-center gap-1.5 text-sm transition-colors duration-200"
                    style={{ color: '#7A8499' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#F0F2FF'}
                    onMouseLeave={e => e.currentTarget.style.color = '#7A8499'}
                  >
                    {product.name}
                    <LucideIcons.ArrowUpRight
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links + Contact — 4 cols */}
          <div className="md:col-span-4 flex flex-col gap-8">

            {/* Quick links */}
            <div>
              <h4
                className="text-[11px] font-mono tracking-[0.2em] uppercase mb-5"
                style={{ color: '#6B7A99' }}
              >
                Navigate
              </h4>
              <ul className="grid grid-cols-2 gap-2">
                {QUICK_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: '#7A8499' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#F0F2FF'}
                      onMouseLeave={e => e.currentTarget.style.color = '#7A8499'}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-[11px] font-mono tracking-[0.2em] uppercase mb-5"
                style={{ color: '#6B7A99' }}
              >
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@ey.com"
                    className="inline-flex items-center gap-2.5 text-sm transition-colors duration-200"
                    style={{ color: '#7A8499' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#F0F2FF'}
                    onMouseLeave={e => e.currentTarget.style.color = '#7A8499'}
                  >
                    <LucideIcons.Mail className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#5B4FE8' }} />
                    Tushar.Deep@in.ey.com
                  </a>
                </li>
                <li>
                  <span
                    className="inline-flex items-center gap-2.5 text-sm"
                    style={{ color: '#7A8499' }}
                  >
                    <LucideIcons.MapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#5B4FE8' }} />
                    New Delhi, India
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p
            className="text-xs font-mono"
            style={{ color: '#3D4A5C' }}
          >
            © 2025 Ernst & Young LLP. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: '#10B981' }}
            />
            <span
              className="text-xs font-mono"
              style={{ color: '#3D4A5C' }}
            >
              All systems operational
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
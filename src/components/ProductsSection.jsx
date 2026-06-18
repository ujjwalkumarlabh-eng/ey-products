import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductsSection({ onProductClick }) {
  return (
    <section
      id="products"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ backgroundColor: '#06080F' }}
    >
      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(#a8b5ff 1px, transparent 1px),
            linear-gradient(90deg, #a8b5ff 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow blob top-left */}
      <div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(91,79,232,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Accent pip */}
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ backgroundColor: '#facc15' }}
              />
              <span
                className="text-[11px] font-mono tracking-[0.2em] uppercase"
                style={{ color: '#6B7A99' }}
              >
                what we built
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight"
              style={{ color: '#F0F2FF' }}
            >
              6 Enterprise{' '}
              <span
                className="relative inline-block"
                style={{
                  WebkitTextStroke: '1.5px #facc15',
                  color: 'transparent',
                }}
              >
                Platforms
              </span>
            </h2>
          </div>

          {/* Right descriptor */}
          <p
            className="max-w-xs text-sm leading-relaxed md:text-right"
            style={{ color: '#6B7A99' }}
          >
            Production-grade systems built to scale — each solving a distinct problem in the enterprise stack.
          </p>
        </div>

        {/* ── Product grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
            >
              <ProductCard
                product={product}
                index={index}
                onClick={() => onProductClick(product)}
              />
            </motion.div>
          ))}
        </div>

        {/* ── Bottom rule ── */}
        <div
          className="mt-20 h-px w-full"
          style={{
            background: 'linear-gradient(90deg, transparent, #5B4FE8 40%, #5B4FE8 60%, transparent)',
            opacity: 0.25,
          }}
        />
      </div>
    </section>
  );
}
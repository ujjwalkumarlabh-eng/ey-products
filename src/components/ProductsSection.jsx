import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductsSection({ onProductClick }) {
  return (
    <section id="products" className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 text-xs font-semibold tracking-[0.2em] uppercase">
            what we built
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            6 Enterprise <span className="text-yellow-400">Platforms</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onClick={() => onProductClick(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

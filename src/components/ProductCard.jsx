import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export default function ProductCard({ product, index, onClick }) {
  const IconComponent = Icons[product.icon] || Icons.Box;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3)' }}
      viewport={{ once: true }}
      onClick={onClick}
      className="bg-gray-950 border border-gray-800 hover:border-yellow-400/50 rounded-2xl p-6 cursor-pointer transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        <div className="bg-yellow-400/10 rounded-xl p-3 w-fit">
          <IconComponent className="text-yellow-400 w-6 h-6" />
        </div>
        <span className="text-yellow-400/40 text-xs font-mono">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3 className="text-white font-bold text-xl mt-4">{product.name}</h3>
      <p className="text-gray-400 text-sm mt-1">{product.tagline}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {product.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="bg-gray-800 text-gray-300 text-xs rounded-full px-3 py-1">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-gray-500 text-sm mt-3 line-clamp-3">{product.description}</p>
      <div className="mt-4 flex items-center text-yellow-400 text-sm font-semibold gap-1 hover:gap-2 transition-all">
        <span>View Details</span>
        <Icons.ArrowRight className="w-4 h-4" />
      </div>
    </motion.div>
  );
}

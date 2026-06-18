import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { useState } from 'react';

export default function ProductModal({ product, onClose }) {
  const [selectedScreenshot, setSelectedScreenshot] = useState(0);
  const IconComponent = Icons[product?.icon] || Icons.Box;

  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 rounded-xl p-4">
                  <IconComponent className="text-yellow-600 w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-gray-900 text-2xl font-bold">{product.name}</h2>
                  <p className="text-gray-500 text-sm">{product.category}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full p-2 transition-colors"
              >
                <Icons.X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">{product.description}</p>

                <div>
                  <h3 className="text-gray-900 font-semibold mb-3">What it does</h3>
                  <ul className="space-y-2">
                    {product.whatItDoes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                        <Icons.CheckCircle2 className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-gray-900 font-semibold mb-3">Built for</h3>
                  <ul className="space-y-2">
                    {product.builtFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                        <Icons.Target className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-gray-900 font-semibold mb-3">Core Strengths</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.coreStrengths.map((strength, i) => (
                      <span key={i} className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full">
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-gray-200 overflow-hidden aspect-video">
                  {product.screenshots?.[selectedScreenshot] ? (
                    <img
                      src={product.screenshots[selectedScreenshot]}
                      alt={`Screenshot ${selectedScreenshot + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center gap-2">
                      <Icons.Camera className="text-gray-400 w-12 h-12" />
                      <span className="text-gray-400">Screenshot {selectedScreenshot + 1}</span>
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {product.screenshots?.map((screenshot, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedScreenshot(i)}
                      className={`rounded-lg border overflow-hidden aspect-video ${selectedScreenshot === i ? 'border-yellow-500 ring-2 ring-yellow-200' : 'border-gray-200'}`}
                    >
                      {screenshot ? (
                        <img src={screenshot} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <Icons.Camera className="text-gray-400 w-6 h-6" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

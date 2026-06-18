import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

// Per-card accent colors — each platform gets a distinct identity hue
const ACCENT_PALETTE = [
  { color: '#5B4FE8', bg: 'rgba(91,79,232,0.1)',  border: 'rgba(91,79,232,0.35)' }, // indigo
  { color: '#0EA5E9', bg: 'rgba(14,165,233,0.1)', border: 'rgba(14,165,233,0.35)' }, // sky
  { color: '#10B981', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.35)' }, // emerald
  { color: '#F59E0B', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.35)'  }, // amber
  { color: '#EC4899', bg: 'rgba(236,72,153,0.1)', border: 'rgba(236,72,153,0.35)' }, // pink
  { color: '#8B5CF6', bg: 'rgba(139,92,246,0.1)', border: 'rgba(139,92,246,0.35)' }, // violet
];

export default function ProductCard({ product, index, onClick }) {
  const IconComponent = Icons[product.icon] || Icons.Box;
  const accent = ACCENT_PALETTE[index % ACCENT_PALETTE.length];

  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
      whileHover="hover"
      className="group relative cursor-pointer rounded-2xl overflow-hidden"
      style={{
        backgroundColor: '#0D1117',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Hover border glow — animated via framer variants */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ border: `1px solid ${accent.border}` }}
        variants={{ hover: { opacity: 1 }, rest: { opacity: 0 } }}
        initial="rest"
        transition={{ duration: 0.2 }}
      />

      {/* Top accent bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ backgroundColor: accent.color }}
        variants={{ hover: { scaleX: 1, opacity: 1 }, rest: { scaleX: 0, opacity: 0 } }}
        initial="rest"
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />

      {/* Card body */}
      <div className="p-6 flex flex-col h-full">

        {/* ── Header row ── */}
        <div className="flex items-start justify-between mb-5">
          {/* Icon container */}
          <div
            className="flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0"
            style={{ backgroundColor: accent.bg }}
          >
            <IconComponent style={{ color: accent.color }} className="w-5 h-5" />
          </div>

          {/* Status pill */}
          <span
            className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full"
            style={{
              color: accent.color,
              backgroundColor: accent.bg,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: accent.color }}
            />
            Live
          </span>
        </div>

        {/* ── Title & tagline ── */}
        <h3
          className="text-base font-bold leading-snug mb-1"
          style={{ color: '#F0F2FF' }}
        >
          {product.name}
        </h3>
        <p
          className="text-xs font-medium mb-3"
          style={{ color: accent.color, opacity: 0.85 }}
        >
          {product.tagline}
        </p>

        {/* ── Description ── */}
        <p
          className="text-sm leading-relaxed line-clamp-3 flex-1"
          style={{ color: '#7A8499' }}
        >
          {product.description}
        </p>

        {/* ── Divider ── */}
        <div
          className="mt-5 mb-4 h-px"
          style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
        />

        {/* ── Tags ── */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md"
              style={{
                color: '#7A8499',
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ── CTA row ── */}
        <div className="flex items-center justify-between">
          <motion.span
            className="flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: accent.color }}
            variants={{
              hover: { x: 3 },
              rest: { x: 0 },
            }}
            transition={{ duration: 0.2 }}
          >
            View platform
            <Icons.ArrowRight className="w-3.5 h-3.5" />
          </motion.span>

          {/* External link hint icon */}
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ backgroundColor: accent.bg }}
          >
            <Icons.ExternalLink style={{ color: accent.color }} className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
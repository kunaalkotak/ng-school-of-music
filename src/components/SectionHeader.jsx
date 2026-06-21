import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, subtitle, center = true, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={center ? 'text-center' : ''}
    >
      {eyebrow && (
        <p className="section-label mb-3">{eyebrow}</p>
      )}
      <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`font-body leading-relaxed text-base sm:text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/40' : 'text-white/55'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-5 h-[2px] w-16 bg-gradient-to-r from-sky-brand to-transparent ${center ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}

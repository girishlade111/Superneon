'use client'

import { motion } from 'framer-motion'
import { Layers, Layout, Puzzle } from 'lucide-react'

const stats = [
  {
    number: '70+',
    label: 'Sections & Components',
    description:
      'A vast collection of beautifully crafted UI sections and components ready to use in your projects.',
    icon: Layers,
    gradient: 'from-purple-500 to-purple-700',
    glow: 'shadow-purple-500/20',
  },
  {
    number: '24+',
    label: 'Unique Landing Pages',
    description:
      'Professionally designed landing pages for every industry and use case you can imagine.',
    icon: Layout,
    gradient: 'from-pink-500 to-pink-700',
    glow: 'shadow-pink-500/20',
  },
  {
    number: '∞',
    label: 'Pre-made Global Components',
    description:
      'Reusable global components that you can mix and match to build any layout you need.',
    icon: Puzzle,
    gradient: 'from-purple-500 to-pink-500',
    glow: 'shadow-purple-500/20',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function WhatsIncluded() {
  return (
    <section id="overview" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What&apos;s included in{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Saltwind
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Everything you need to build stunning web applications, all in one
            comprehensive package.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`group relative bg-[#15151b] border border-white/5 rounded-2xl p-8 shadow-xl ${stat.glow} hover:border-purple-500/20 transition-all cursor-pointer`}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} mb-6 shadow-lg`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Number */}
                <div
                  className={`text-5xl sm:text-6xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-3`}
                >
                  {stat.number}
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

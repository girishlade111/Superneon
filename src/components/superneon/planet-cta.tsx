'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

// Seeded PRNG for consistent SSR/client rendering
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

function generateStars() {
  return Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.round(seededRandom(i * 1.1) * 1000) / 10,
    y: Math.round(seededRandom(i * 2.3 + 7) * 1000) / 10,
    size: Math.round((seededRandom(i * 3.7 + 13) * 2 + 1) * 10) / 10,
    delay: Math.round(seededRandom(i * 5.1 + 23) * 30) / 10,
    duration: Math.round((seededRandom(i * 7.3 + 37) * 2 + 2) * 10) / 10,
  }))
}

export function PlanetCta() {
  const stars = generateStars()

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Deep dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b] via-[#080810] to-[#0a0a0b]" />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
            <div
              key={star.id}
              suppressHydrationWarning
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
              }}
            />
          ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Planet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto mb-16"
        >
          {/* Planet glow */}
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-[60px]" />
          <div className="absolute inset-8 rounded-full bg-pink-500/10 blur-[40px]" />

          {/* Planet body */}
          <div
            className="absolute inset-10 sm:inset-12 rounded-full"
            style={{
              background:
                'radial-gradient(circle at 35% 35%, #2a2a3e 0%, #151520 40%, #0a0a12 70%, #050508 100%)',
              boxShadow:
                'inset -20px -20px 40px rgba(0,0,0,0.8), 0 0 80px rgba(168, 85, 247, 0.15), 0 0 120px rgba(236, 72, 153, 0.1)',
            }}
          />

          {/* Planet highlight */}
          <div
            className="absolute top-8 sm:top-10 left-8 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 rounded-full opacity-30"
            style={{
              background:
                'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
            }}
          />

          {/* Orbiting Ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-72 h-72 sm:w-96 sm:h-96 rounded-full border-2 border-purple-500/40"
              style={{
                transform: 'rotateX(75deg)',
                boxShadow:
                  '0 0 15px rgba(168, 85, 247, 0.3), 0 0 30px rgba(168, 85, 247, 0.15), inset 0 0 15px rgba(168, 85, 247, 0.1)',
                animation: 'orbit 20s linear infinite',
              }}
            >
              {/* Ring highlight dot */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-purple-400"
                style={{
                  boxShadow:
                    '0 0 10px rgba(168, 85, 247, 0.8), 0 0 20px rgba(168, 85, 247, 0.4)',
                }}
              />
            </div>
          </div>

          {/* Secondary ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-pink-500/20"
              style={{
                transform: 'rotateX(75deg) rotateZ(45deg)',
                boxShadow:
                  '0 0 10px rgba(236, 72, 153, 0.2), inset 0 0 10px rgba(236, 72, 153, 0.05)',
                animation: 'orbit 30s linear infinite reverse',
              }}
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Automate your life with
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            natural language
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Gain the flexibility and control to create stunning digital experiences
          that captivate your audience and drive results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="group relative bg-transparent border-2 border-purple-500/60 hover:border-purple-400 text-white hover:bg-purple-500/10 transition-all px-8 py-6 text-base shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20"
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

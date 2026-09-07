'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-pink-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            New: Saltwind v2.0 is here
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
        >
          Transform your business
          <br />
          journey with{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Saltwind
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Best in class UI library consisting of beautiful layouts with sleek
          animations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              size="lg"
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all px-8 py-6 text-base"
            >
              Explore Demo
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-white/10 bg-white/5 hover:bg-white/10 text-white px-8 py-6 text-base"
            >
              <Play className="mr-2 w-4 h-4" />
              Watch Video
            </Button>
          </motion.div>
        </motion.div>

        {/* Hero Mockup Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
            {/* Top row - 2 large mockups */}
            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="col-span-1 row-span-2 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-purple-500/10"
            >
              <div className="relative aspect-[4/3] bg-[#15151b]">
                <Image
                  src="/images/dashboard-mockup-1.png"
                  alt="Dashboard mockup"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="col-span-1 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-purple-500/10"
            >
              <div className="relative aspect-[4/3] bg-[#15151b]">
                <Image
                  src="/images/pricing-mockup.png"
                  alt="Pricing page mockup"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="col-span-1 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-purple-500/10"
            >
              <div className="relative aspect-[4/3] bg-[#15151b]">
                <Image
                  src="/images/dashboard-mockup-2.png"
                  alt="Dashboard mockup 2"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Glow effect behind mockups */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-purple-500/10 rounded-full blur-[80px]" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

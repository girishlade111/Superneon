'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface MockupCardProps {
  src: string
  alt: string
  aspect?: 'landscape' | 'portrait'
}

function MockupCard({ src, alt, aspect = 'landscape' }: MockupCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/40 hover:ring-purple-500/20 transition-all cursor-pointer"
    >
      <div
        className={`relative bg-[#15151b] ${
          aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-[16/10]'
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  )
}

function CSSMockup({
  title,
  subtitle,
  variant = 'dashboard',
}: {
  title: string
  subtitle: string
  variant?: 'dashboard' | 'pricing' | 'blog' | 'account'
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/40 hover:ring-purple-500/20 transition-all cursor-pointer"
    >
      <div className="bg-[#12121a] p-6 aspect-[16/10]">
        {/* Mini top bar */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <div className="flex-1 h-5 bg-white/5 rounded ml-2" />
        </div>
        {/* Sidebar + Content */}
        <div className="flex gap-3 h-[calc(100%-28px)]">
          {/* Sidebar */}
          <div className="w-1/4 bg-white/5 rounded-lg p-3 space-y-2">
            <div className="h-3 w-full bg-purple-500/30 rounded" />
            <div className="h-2 w-3/4 bg-white/10 rounded" />
            <div className="h-2 w-1/2 bg-white/10 rounded" />
            <div className="h-2 w-2/3 bg-white/10 rounded" />
            <div className="mt-4 space-y-2">
              <div className="h-2 w-full bg-white/5 rounded" />
              <div className="h-2 w-full bg-white/5 rounded" />
              <div className="h-2 w-3/4 bg-white/5 rounded" />
            </div>
          </div>
          {/* Main content */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-4 w-1/3 bg-white/10 rounded" />
              <div className="h-6 w-16 bg-purple-500/20 rounded-md" />
            </div>
            {variant === 'dashboard' && (
              <>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-lg p-3 space-y-2">
                    <div className="h-2 w-1/2 bg-purple-500/30 rounded" />
                    <div className="h-4 w-3/4 bg-purple-500/20 rounded" />
                  </div>
                  <div className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 rounded-lg p-3 space-y-2">
                    <div className="h-2 w-1/2 bg-pink-500/30 rounded" />
                    <div className="h-4 w-3/4 bg-pink-500/20 rounded" />
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-lg p-3 space-y-2">
                    <div className="h-2 w-1/2 bg-purple-500/30 rounded" />
                    <div className="h-4 w-3/4 bg-purple-500/20 rounded" />
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 h-20 flex items-end gap-1">
                  {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 65].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-purple-500/40 to-purple-500/10"
                        style={{ height: `${h}%` }}
                      />
                    )
                  )}
                </div>
              </>
            )}
            {variant === 'pricing' && (
              <div className="grid grid-cols-3 gap-2">
                {[
                  { border: 'border-white/10', accent: false },
                  { border: 'border-purple-500/30', accent: true },
                  { border: 'border-white/10', accent: false },
                ].map((card, i) => (
                  <div
                    key={i}
                    className={`rounded-lg border ${card.border} bg-white/5 p-2 space-y-2`}
                  >
                    <div
                      className={`h-2 w-1/2 rounded ${
                        card.accent
                          ? 'bg-purple-500/40'
                          : 'bg-white/10'
                      }`}
                    />
                    <div
                      className={`h-5 w-2/3 rounded ${
                        card.accent
                          ? 'bg-purple-500/20'
                          : 'bg-white/5'
                      }`}
                    />
                    <div className="space-y-1">
                      <div className="h-1.5 w-full bg-white/5 rounded" />
                      <div className="h-1.5 w-full bg-white/5 rounded" />
                      <div className="h-1.5 w-3/4 bg-white/5 rounded" />
                    </div>
                    <div
                      className={`h-5 w-full rounded-md ${
                        card.accent
                          ? 'bg-purple-500/30'
                          : 'bg-white/5'
                      }`}
                    />
                  </div>
                ))}
              </div>
            )}
            {variant === 'blog' && (
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-lg p-2 space-y-2"
                  >
                    <div className="h-12 bg-white/5 rounded" />
                    <div className="h-2 w-3/4 bg-white/10 rounded" />
                    <div className="h-1.5 w-full bg-white/5 rounded" />
                    <div className="h-1.5 w-2/3 bg-white/5 rounded" />
                  </div>
                ))}
              </div>
            )}
            {variant === 'account' && (
              <div className="flex items-center justify-center h-full">
                <div className="w-1/2 bg-white/5 rounded-lg p-4 space-y-3 border border-white/10">
                  <div className="h-3 w-1/2 bg-purple-500/30 rounded mx-auto" />
                  <div className="h-8 bg-white/5 rounded border border-white/10" />
                  <div className="h-8 bg-white/5 rounded border border-white/10" />
                  <div className="h-7 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-md" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0b] to-transparent p-4 pt-10">
        <p className="text-white font-medium text-sm">{title}</p>
        <p className="text-zinc-500 text-xs">{subtitle}</p>
      </div>
    </motion.div>
  )
}

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function FeatureShowcase() {
  return (
    <section id="pages" className="py-24 px-4 space-y-32">
      <div className="max-w-7xl mx-auto">
        {/* Home Pages */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Home Pages
              </h2>
              <p className="text-zinc-400 text-lg">
                Beautiful landing pages for every use case
              </p>
            </div>
            <Button
              variant="outline"
              className="border-white/10 bg-white/5 hover:bg-white/10 text-white hidden sm:flex"
            >
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MockupCard
              src="/images/landing-mockup.png"
              alt="Landing page mockup"
            />
            <MockupCard
              src="/images/dashboard-mockup-1.png"
              alt="Dashboard home mockup"
            />
            <MockupCard
              src="/images/dashboard-mockup-2.png"
              alt="Dashboard kanban mockup"
            />
          </div>
        </motion.div>

        {/* Pricing Pages */}
        <motion.div
          id="pricing"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Pricing Pages
            </h2>
            <p className="text-zinc-400 text-lg">
              Flexible pricing layouts that convert visitors into customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MockupCard
              src="/images/pricing-mockup.png"
              alt="Pricing page variant 1"
            />
            <CSSMockup
              title="Annual Pricing"
              subtitle="Subscription-based layout"
              variant="pricing"
            />
            <MockupCard
              src="/images/pricing-mockup.png"
              alt="Pricing page variant 3"
            />
          </div>
        </motion.div>

        {/* More Pages */}
        <motion.div
          id="resources"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              More Pages
            </h2>
            <p className="text-zinc-400 text-lg">
              Service, Dashboard, Feature, Blog and many more
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <CSSMockup
              title="Service Page"
              subtitle="Professional service showcase"
              variant="dashboard"
            />
            <CSSMockup
              title="Dashboard"
              subtitle="Data-driven analytics"
              variant="dashboard"
            />
            <CSSMockup
              title="Feature Page"
              subtitle="Product feature highlights"
              variant="dashboard"
            />
            <MockupCard
              src="/images/blog-mockup.png"
              alt="Blog page mockup"
            />
            <CSSMockup
              title="Blog Listing"
              subtitle="Content management layout"
              variant="blog"
            />
            <CSSMockup
              title="Team Page"
              subtitle="Meet the team layout"
              variant="blog"
            />
          </div>
        </motion.div>

        {/* Account Pages */}
        <motion.div
          id="contact"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Account Pages
            </h2>
            <p className="text-zinc-400 text-lg">
              Login, Signup, and Forgot Password pages with clean designs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CSSMockup
              title="Login"
              subtitle="Secure authentication"
              variant="account"
            />
            <MockupCard
              src="/images/account-mockup.png"
              alt="Signup page mockup"
            />
            <CSSMockup
              title="Forgot Password"
              subtitle="Password recovery flow"
              variant="account"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

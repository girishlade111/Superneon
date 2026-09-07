'use client'

import { Header } from '@/components/superneon/header'
import { Hero } from '@/components/superneon/hero'
import { WhatsIncluded } from '@/components/superneon/whats-included'
import { FeatureShowcase } from '@/components/superneon/feature-showcase'
import { PlanetCta } from '@/components/superneon/planet-cta'
import { Footer } from '@/components/superneon/footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0b]">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhatsIncluded />
        <FeatureShowcase />
        <PlanetCta />
      </main>
      <Footer />
    </div>
  )
}

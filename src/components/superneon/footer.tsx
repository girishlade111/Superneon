'use client'

import { motion } from 'framer-motion'
import { Sparkles, Github, Twitter, Dribbble, Linkedin } from 'lucide-react'

const footerSections = [
  {
    title: 'Product',
    links: ['Overview', 'Features', 'Pricing', 'Releases'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Press', 'Partners'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Newsletter', 'Events', 'Help Center'],
  },
  {
    title: 'Social',
    links: ['Twitter', 'GitHub', 'LinkedIn', 'Dribbble'],
  },
  {
    title: 'Legal',
    links: ['Terms', 'Privacy', 'Cookies', 'Licenses'],
  },
]

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Dribbble, href: '#', label: 'Dribbble' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Logo Section */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <Sparkles className="w-6 h-6 text-purple-500" />
              <span className="text-lg font-bold text-white">Superneon</span>
            </motion.div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Beautiful UI library for modern web applications.
            </p>
          </div>

          {/* Footer Link Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © 2026 Superneon. Designed by MadeByShade
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-zinc-500 hover:text-purple-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

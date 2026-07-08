'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import CustomIcon from './icons/CustomIcon'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Menutup menu mobile saat berpindah halaman
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/tentang-kami' },
    {
      name: 'Modifikasi Ambulance',
      href: '/produk-layanan',
      dropdown: [
        { name: 'Interior', href: '/produk-layanan#interior' },
        { name: 'Eksterior', href: '/produk-layanan#eksterior' },
        { name: 'Tipe Ambulance', href: '/produk-layanan#tipe' },
        { name: 'Service & Retrofit', href: '/produk-layanan#retrofit' },
      ],
    },
    { name: 'Alur Pemesanan', href: '/alur-pemesanan' },
    { name: 'Galeri & Portofolio', href: '/galeri-portofolio' },
    { name: 'Artikel', href: '/artikel-blog' },
    { name: 'FAQ', href: '/faq' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md border-accent-teal/30 py-3 shadow-md'
          : 'bg-navy border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-1.5 bg-accent-teal text-navy rounded-[4px] border border-white group-hover:scale-105 transition-transform duration-200">
              <CustomIcon name="chassis" size={24} className="stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-oswald text-xl font-bold tracking-wider text-white leading-none">
                WASILAH
              </span>
              <span className="font-fira text-[9px] text-accent-teal tracking-widest leading-none mt-1">
                AMBULANCE KAROSERI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 font-oswald text-xs whitespace-nowrap font-medium uppercase tracking-wider transition-colors duration-150 py-2 ${
                        isActive(link.href)
                          ? 'text-accent-teal border-b-2 border-accent-teal'
                          : 'text-abu-light/80 hover:text-white'
                      }`}
                    >
                      {link.name}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                    </button>

                    {activeDropdown === link.name && (
                      <div className="absolute top-full left-0 w-52 bg-navy border border-accent-teal/30 shadow-solid rounded-[4px] py-2 z-50 animate-fade-in mt-1">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 font-inter text-xs text-abu-light/80 hover:bg-accent-teal hover:text-white transition-colors duration-150"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-oswald text-xs whitespace-nowrap font-medium uppercase tracking-wider transition-colors duration-150 py-2 ${
                    isActive(link.href)
                      ? 'text-accent-teal border-b-2 border-accent-teal'
                      : 'text-abu-light/80 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* CTA & Contact */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebe57] text-white text-xs py-2 px-4 rounded-[4px] flex items-center gap-2 font-oswald font-medium tracking-wide transition-colors"
            >
              <CustomIcon name="whatsapp" size={16} />
              <span>Konsultasi Proyek</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-[4px] text-abu-light/80 hover:text-white hover:bg-navy-light border border-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-navy border-b border-accent-teal/30">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2 font-oswald text-sm font-medium uppercase tracking-wider text-accent-teal border-b border-white/5">
                      {link.name}
                    </div>
                    {link.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block pl-6 pr-3 py-2 font-inter text-xs text-abu-light/75 hover:bg-accent-teal/20 hover:text-white"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-3 py-2 font-oswald text-sm font-medium uppercase tracking-wider rounded-[4px] ${
                      isActive(link.href)
                        ? 'bg-accent-teal text-white'
                        : 'text-abu-light/80 hover:bg-navy-light hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2 px-3">
              <Link
                href="/kontak"
                className="w-full text-center block btn-mech-primary py-2.5 text-sm"
              >
                Konsultasi Proyek
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

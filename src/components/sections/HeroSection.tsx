'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import CustomIcon from '../icons/CustomIcon'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden border-b border-accent-teal/30">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/HeroImage.jpg"
          alt="Wasilah Karoseri Ambulance Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-navy/85 bg-gradient-to-r from-navy/95 to-navy/40" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 mt-16">
        <div className="max-w-3xl space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="font-fira text-xs text-accent-teal uppercase tracking-widest border border-accent-teal/30 bg-navy/50 backdrop-blur-sm px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
              <span className="text-yellow-400">⚡</span> KAROSERI AMBULANCE CUSTOM
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-oswald text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-wide uppercase leading-tight"
          >
            Jasa Custom <br />
            <span className="text-accent-teal">Karoseri Ambulance</span> <br />
            Standar Medis Nasional
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-abu-light/90 text-sm sm:text-lg font-inter leading-relaxed max-w-2xl"
          >
            Kami memodifikasi kendaraan Anda (Toyota Hiace, Suzuki APV, Mitsubishi Triton, dll) menjadi unit ambulance tangguh, higienis, kuat, dengan furniture dan peralatan terlengkap dengan harga yang kompetitif.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link href="/#video-gallery" className="btn-mech-primary flex items-center gap-2 text-sm px-8 py-4">
              <CustomIcon name="wrench" size={18} />
              <span>Lihat Portofolio</span>
            </Link>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Wasilah%20Ambulance,%20saya%20ingin%20konsultasi%20mengenai%20modifikasi%20karoseri%20ambulance."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-oswald uppercase tracking-wider text-white px-8 py-4 border border-white/20 rounded-[4px] transition-all duration-150 hover:bg-white/10 backdrop-blur-sm text-sm"
            >
              <span>Konsultasi WhatsApp</span>
            </a>
          </motion.div>

          {/* Stats/Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 pt-12 mt-12 border-t border-white/10"
          >
            <div className="flex flex-col gap-1.5">
              <span className="font-oswald text-2xl sm:text-3xl font-bold text-accent-teal">KEMENKES RI</span>
              <span className="font-inter text-xs sm:text-sm text-abu-light/70">Standar Medis</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-oswald text-2xl sm:text-3xl font-bold text-accent-teal">ISO 9001:2015</span>
              <span className="font-inter text-xs sm:text-sm text-abu-light/70">Sertifikasi Kualitas</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-oswald text-2xl sm:text-3xl font-bold text-accent-teal">1 Tahun</span>
              <span className="font-inter text-xs sm:text-sm text-abu-light/70">Garansi Penuh</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

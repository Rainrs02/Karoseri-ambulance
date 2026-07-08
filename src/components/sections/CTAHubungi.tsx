'use client'

import React from 'react'
import Link from 'next/link'
import { PhoneCall } from 'lucide-react'
import CustomIcon from '../icons/CustomIcon'

export default function CTAHubungi() {
  return (
    <section className="py-20 bg-blueprint relative overflow-hidden border-t border-accent-teal/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(7,19,38,0.9))] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Technical Icon Box */}
        <div className="mx-auto w-16 h-16 bg-navy border border-accent-teal text-accent-teal flex items-center justify-center rounded-[4px] shadow-solid-teal">
          <CustomIcon name="chassis" size={32} />
        </div>

        <div className="space-y-4">
          <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold block">
            GET A TECHNICAL ESTIMATION // KONSULTASI GRATIS
          </span>
          <h2 className="font-oswald text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-wide leading-tight">
            Siap Mengonversi Kendaraan Klien <br />Menjadi Unit Penyelamat?
          </h2>
          <div className="w-16 h-1 bg-accent-teal mx-auto" />
          <p className="text-abu-light/80 text-sm sm:text-base font-inter max-w-2xl mx-auto leading-relaxed">
            Hubungi sales engineer kami hari ini untuk mendiskusikan rancangan kabin, pemilihan alkes pendukung, penyesuaian anggaran, hingga jadwal inspeksi fisik sasis.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center pt-2">
          <Link href="/kontak" className="btn-mech-primary flex items-center gap-2 text-sm">
            <CustomIcon name="wrench" size={16} />
            <span>Mulai Estimasi Desain</span>
          </Link>
          
          <Link href="/produk-layanan" className="btn-mech-secondary flex items-center gap-2 text-sm text-navy bg-white">
            <PhoneCall className="w-4 h-4 text-navy" />
            <span className="text-navy">Hubungi Kami</span>
          </Link>
        </div>

        <div className="text-[10px] font-fira text-abu-light/40">
          TIM TEKNIS KAMI TERSEDIA UNTUK PENJADWALAN SURVEY DI JABODETABEK & SEKITARNYA
        </div>

      </div>
    </section>
  )
}

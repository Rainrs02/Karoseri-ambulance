'use client'

import React from 'react'
import { Quote } from 'lucide-react'
import { motion } from 'framer-motion'

export default function TestimoniHome() {
  const testimonials = [
    {
      quote: 'Pengerjaan interior kabin fiberglass dari Wasilah sangat rapi dan mulus. Pipa tembaga oksigen tersembunyi dengan baik, sangat mudah disterilisasi dari cairan medis. Uji KIR kendaraan Toyota Hiace kami lolos tanpa kendala.',
      name: 'dr. H. Rahmad S. Sp.An',
      role: 'Kepala Instalasi Gawat Darurat',
      inst: 'RSUD Kota Bogor',
    },
    {
      quote: 'Kami memodifikasi armada Mitsubishi Triton 4x4 untuk CSR kesehatan tambang. Hasilnya tangguh luar biasa, kelistrikan inverter stabil mensuplai peralatan inkubator portabel meskipun melibas jalan berlumpur terjal.',
      name: 'Ir. Budi Hermawan',
      role: 'Manager CSR & Community Dev',
      inst: 'PT Antam Tbk',
    },
    {
      quote: 'Sangat terbantu dengan tim Wasilah. Mereka membantu menerbitkan rekomendasi teknis SKRB sehingga kami bisa mengurus plat nomor ambulance yayasan dengan cepat. Garansi kelistrikannya benar-benar dipenuhi gratis saat sekering kami putus.',
      name: 'H. Sulaiman Al-Ghifari',
      role: 'Ketua Pengurus Harian',
      inst: 'Yayasan Husnul Khatimah',
    },
  ]

  return (
    <section className="py-20 bg-navy text-white relative">
      <div className="absolute inset-0 bg-blueprint opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold">
            TESTIMONIALS // KATA MEREKA
          </span>
          <h2 className="font-oswald text-3xl sm:text-4xl font-extrabold uppercase text-white">
            Ulasan Teknis Para Mitra Kami
          </h2>
          <div className="w-16 h-1 bg-accent-teal mx-auto" />
          <p className="text-abu-light/70 text-sm leading-relaxed font-inter">
            Kepuasan para tenaga medis dan manajer operasional adalah tolak ukur presisi rancangan kami.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-navy-card border border-white/10 p-6 rounded-[4px] flex flex-col justify-between relative group"
            >
              <div className="absolute top-4 right-4 text-accent-teal/20 group-hover:text-accent-teal/40 transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              <div className="space-y-4">
                <p className="text-xs text-abu-light/85 italic leading-relaxed font-inter">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6 space-y-1">
                <h4 className="font-oswald text-sm font-bold uppercase tracking-wider text-white">
                  {t.name}
                </h4>
                <p className="text-[10px] text-accent-teal font-fira uppercase">
                  {t.role} &mdash; {t.inst}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

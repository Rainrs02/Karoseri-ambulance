'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

export default function ArtikelTerbaru() {
  const articles = [
    {
      id: 1,
      title: 'Panduan Merawat Sistem Kelistrikan Ambulance Agar Tetap Siaga',
      category: 'Perawatan',
      date: '05 Jul 2026',
      desc: 'Sistem kelistrikan ambulance menyuplai alat kritis seperti ventilator. Pelajari cara merawat baterai tambahan dan inverter sinus murni agar tidak korsleting.',
    },
    {
      id: 2,
      title: 'Perbedaan Mendasar Ambulance Transport vs Ambulance Gawat Darurat (AGD)',
      category: 'Panduan Alkes',
      date: '28 Jun 2026',
      desc: 'Banyak yayasan salah memilih tipe karoseri. Pahami perbedaan regulasi peralatan medis di dalamnya demi efisiensi biaya modifikasi kendaraan klien.',
    },
    {
      id: 3,
      title: 'Standar Spesifikasi Karoseri Ambulance Resmi Kemenkes RI Terbaru',
      category: 'Regulasi',
      date: '15 Jun 2026',
      desc: 'Menilik aturan ketat Permenkes mengenai tata letak lemari obat, ketersediaan stopkontak, penempatan tabung oksigen ganda, dan ukuran minimal kabin.',
    },
  ]

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold">
              KNOWLEDGE HUB // ARTIKEL TERBARU
            </span>
            <h2 className="font-oswald text-3xl sm:text-4xl font-extrabold uppercase text-navy">
              Informasi Teknis & Tips Perawatan
            </h2>
            <div className="w-16 h-1 bg-accent-teal" />
            <p className="text-navy/70 text-sm leading-relaxed font-inter">
              Ikuti artikel edukasi seputar rekayasa otomotif medis, perizinan plat merah/kuning, serta tips memilih kelengkapan gurney.
            </p>
          </div>
          <Link
            href="/artikel-blog"
            className="font-oswald text-xs uppercase tracking-wider text-accent-teal hover:text-navy border border-accent-teal/30 hover:border-navy px-4 py-2.5 rounded-[4px] font-semibold transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Lihat Semua Artikel</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border-2 border-navy p-6 rounded-[4px] shadow-solid hover:shadow-solid-teal transition-all duration-150 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-fira text-navy/40">
                  <span className="bg-accent-teal/10 text-accent-teal px-2 py-0.5 rounded border border-accent-teal/20">
                    {art.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={10} />
                    <span>{art.date}</span>
                  </span>
                </div>
                
                <h3 className="font-oswald text-base font-bold text-navy uppercase tracking-wide leading-snug hover:text-accent-teal transition-colors">
                  <Link href={`/artikel-blog#art-${art.id}`}>
                    {art.title}
                  </Link>
                </h3>
                
                <p className="text-xs text-navy/75 leading-relaxed font-inter line-clamp-3">
                  {art.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-navy/5 mt-4">
                <Link
                  href={`/artikel-blog#art-${art.id}`}
                  className="font-oswald text-xs uppercase tracking-wider text-navy hover:text-accent-teal font-bold flex items-center gap-1.5 transition-colors"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

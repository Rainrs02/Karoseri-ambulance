'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function FAQSingkat() {
  const faqs = [
    {
      q: 'Apakah Wasilah menjual mobil unit ambulance?',
      a: 'Tidak. Wasilah Karoseri murni merupakan penyedia jasa modifikasi spesifik kendaraan. Klien menyediakan mobilnya sendiri (sasis kosong / mobil standar), lalu kami melakukan karoseri dan pengerjaan interior/eksterior hingga siap digunakan.',
    },
    {
      q: 'Kendaraan merk/tipe apa saja yang bisa dimodifikasi?',
      a: 'Hampir seluruh jenis minivan, van, dan double cabin dapat kami modifikasi. Kendaraan terpopuler di antaranya: Toyota Hiace (Premio/Commuter), Suzuki APV, Daihatsu Luxio, Mitsubishi Triton, Toyota Hilux, hingga Isuzu Traga.',
    },
    {
      q: 'Berapa lama waktu pengerjaan modifikasi karoseri?',
      a: 'Estimasi waktu pengerjaan standar berkisar antara 10 hingga 14 hari kerja setelah kendaraan sasis tiba di workshop kami dan desain layout disetujui. Untuk unit khusus seperti mobile lab custom, berkisar antara 20 hingga 30 hari kerja.',
    },
  ]

  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="py-20 bg-abu-light relative border-b border-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left panel info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold block">
              SUPPORT CENTRE // FAQ SINGKAT
            </span>
            <h2 className="font-oswald text-3xl sm:text-4xl font-extrabold uppercase text-navy">
              Pertanyaan Umum Konsumen
            </h2>
            <div className="w-16 h-1 bg-accent-teal" />
            <p className="text-navy/70 text-sm leading-relaxed font-inter">
              Berikut jawaban singkat untuk pertanyaan mendasar klien kami. Untuk rincian lebih lengkap seputar metode pembayaran dan garansi, silakan buka halaman FAQ lengkap kami.
            </p>
            <Link
              href="/faq"
              className="font-oswald text-xs uppercase tracking-wider text-navy hover:text-accent-teal font-bold flex items-center gap-1.5 transition-colors"
            >
              <span>Buka Halaman FAQ Lengkap</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right panel FAQ accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-navy rounded-[4px] overflow-hidden shadow-solid transition-shadow hover:shadow-solid-teal duration-150"
              >
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 bg-white text-navy font-oswald text-sm font-bold uppercase tracking-wider transition-colors hover:text-accent-teal"
                >
                  <span>{faq.q}</span>
                  <div className="shrink-0 p-1 bg-abu-light border border-navy/20 rounded">
                    {openIdx === idx ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openIdx === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 border-t border-navy/10 font-inter text-xs text-navy/75 leading-relaxed bg-abu-light/30">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

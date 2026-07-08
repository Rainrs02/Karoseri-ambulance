'use client'

import React from 'react'
import { ShieldCheck, Users, Milestone, BadgeCheck } from 'lucide-react'
import { motion } from 'framer-motion'

export default function MengapaKami() {
  const points = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent-teal" />,
      title: 'Legalitas & Sertifikasi Karoseri Resmi',
      desc: 'Kami memegang izin Surat Keputusan Rancang Bangun (SKRB) resmi Dirjen Perhubungan Darat. Unit ambulance terjamin bisa terbit STNK dan lulus uji KIR.',
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-accent-teal" />,
      title: 'Standar Medis Kemenkes RI',
      desc: 'Setiap interior didesain mengikuti Peraturan Menteri Kesehatan RI untuk menjamin kelayakan alat penunjang hidup darurat (life support).',
    },
    {
      icon: <Users className="w-8 h-8 text-accent-teal" />,
      title: 'Tim Engineering Berpengalaman',
      desc: 'Dikerjakan oleh teknisi otomotif kawakan dan spesialis instalasi pipa gas medis untuk menjamin nihil kebocoran oksigen dan korsleting listrik.',
    },
    {
      icon: <Milestone className="w-8 h-8 text-accent-teal" />,
      title: 'Garansi Karoseri & After Sales',
      desc: 'Jaminan garansi fisik pengerjaan karoseri selama 12 bulan. Suku cadang kelistrikan dan sistem oksigen selalu tersedia cepat di workshop kami.',
    },
  ]

  return (
    <section className="py-20 bg-navy text-white relative">
      <div className="absolute inset-0 bg-blueprint opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold">
              QUALITY ASSURANCE // MENGAPA WASILAH
            </span>
            <h2 className="font-oswald text-3xl sm:text-4xl font-extrabold uppercase tracking-wide">
              Komitmen Terhadap <br />Keamanan & Sertifikasi
            </h2>
            <div className="w-16 h-1 bg-accent-teal" />
            <p className="text-abu-light/75 text-sm leading-relaxed font-inter">
              Karoseri ambulance bukan sekadar meletakkan keranda dan tabung oksigen ke dalam mobil. Ini adalah rekayasa ruang penyelamat jiwa yang membutuhkan keahlian teknik elektro-medis dan keselamatan berkendara.
            </p>
            <div className="bg-navy-card border border-accent-teal/20 p-5 rounded-[4px] space-y-2">
              <span className="font-fira text-[10px] text-accent-teal block uppercase">CERTIFICATE REGISTRATION:</span>
              <p className="text-xs text-abu-light/80 leading-relaxed font-inter">
                Wasilah Karoseri diakui resmi oleh asosiasi karoseri Indonesia dan bermitra dengan berbagai ATPM (Agen Tunggal Pemegang Merk) terkemuka.
              </p>
            </div>
          </div>

          {/* Right point lists */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((point, idx) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-navy-card border border-white/10 p-6 rounded-[4px] flex flex-col gap-4"
                >
                  <div className="p-2 bg-navy-dark border border-white/5 rounded w-fit">
                    {point.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-oswald text-sm font-bold uppercase tracking-wider text-white">
                      {point.title}
                    </h3>
                    <p className="text-xs text-abu-light/70 leading-relaxed font-inter">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

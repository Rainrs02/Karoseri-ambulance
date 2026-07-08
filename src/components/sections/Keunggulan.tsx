'use client'

import React from 'react'
import { motion } from 'framer-motion'
import CustomIcon from '../icons/CustomIcon'

export default function Keunggulan() {
  const items = [
    {
      icon: 'gear' as const,
      title: 'Kustomisasi Presisi',
      desc: 'Interior dirancang secara visual untuk memaksimalkan ruang kabin medis sesuai tipe kendaraan Anda.',
    },
    {
      icon: 'oxygen' as const,
      title: 'Sistem Oksigen Terintegrasi',
      desc: 'Instalasi pipa tembaga tersembunyi, regulator otomatis, dan dudukan tabung ganda yang kokoh & aman.',
    },
    {
      icon: 'ekg' as const,
      title: 'Kelistrikan Medis Khusus',
      desc: 'Inverter sinus murni, sistem sekering terpisah, dan backup baterai otomatis untuk menjaga peralatan medis kritis.',
    },
    {
      icon: 'shield' as const,
      title: 'Kabin Anti-Bakteri',
      desc: 'Dinding fiberglass mulus dan lantai vinyl kelas medis yang mudah didekontaminasi serta tahan bahan kimia.',
    },
  ]

  return (
    <section className="py-20 bg-abu-light relative overflow-hidden">
      {/* Decorative technical line */}
      <div className="absolute right-0 top-0 h-full w-[1px] bg-navy/10 pointer-events-none mr-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold">
            ENGINEERING ADVANTAGES // KEUNGGULAN WASILAH
          </span>
          <h2 className="font-oswald text-3xl sm:text-4xl font-extrabold uppercase text-navy">
            Spesifikasi Teknik Berstandar Tinggi
          </h2>
          <div className="w-16 h-1 bg-accent-teal mx-auto" />
          <p className="text-navy/70 text-sm leading-relaxed font-inter">
            Setiap unit ambulance yang kami kerjakan melewati tahap perancangan teknis teruji, memastikan keamanan paramedis dan kenyamanan pasien di jalan raya.
          </p>
        </div>

        {/* 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border-2 border-navy p-6 shadow-solid hover:shadow-solid-teal transition-all duration-200 flex flex-col gap-4 relative group"
            >
              {/* Technical index badge */}
              <div className="absolute top-3 right-3 font-fira text-[9px] text-navy/30 group-hover:text-accent-teal/50 transition-colors">
                [0{idx + 1}]
              </div>

              {/* Icon Frame */}
              <div className="w-12 h-12 bg-navy text-white rounded-[4px] border border-accent-teal flex items-center justify-center shrink-0">
                <CustomIcon name={item.icon} size={22} className="stroke-[2.5]" />
              </div>

              <div className="space-y-2">
                <h3 className="font-oswald text-lg font-bold text-navy uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-navy/75 leading-relaxed font-inter">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

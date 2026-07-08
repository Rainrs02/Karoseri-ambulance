'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Activity, BatteryCharging, Lightbulb, Clipboard, ShieldCheck, RefreshCw } from 'lucide-react'
import CustomIcon from '../icons/CustomIcon'

export default function Layanan() {
  const services = [
    {
      icon: <CustomIcon name="oxygen" size={24} className="text-white" />,
      title: 'Sistem Oksigen Medis',
      desc: 'Instalasi central oxygen dengan pemipaan tembaga, katup pengaman otomatis, tabung ganda, humidifier, serta konektor wall-outlet standar rumah sakit.',
    },
    {
      icon: <BatteryCharging className="w-6 h-6 text-white" />,
      title: 'Kelistrikan & Pengaman',
      desc: 'Instalasi kelistrikan AC/DC terisolasi, sekering otomatis (fuse block), baterai tambahan, inverter sinus murni, dan colokan listrik di berbagai titik strategis.',
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: 'Lighting & Sirine',
      desc: 'Pemasangan lightbar LED oval, sirine multi-suara dengan microphone, lampu sorot luar untuk penerangan darurat, serta lampu LED kabin anti-silau.',
    },
    {
      icon: <CustomIcon name="stretcher" size={24} className="text-white" />,
      title: 'Interior & Cabin Furnishing',
      desc: 'Pembuatan cabinet peralatan medis (acrylic/fiberglass), lemari alkes, bangku paramedis dengan kompartemen, handrail, dan lantai berlapis vinyl medis.',
    },
    {
      icon: <Activity className="w-6 h-6 text-white" />,
      title: 'Eksterior & Branding',
      desc: 'Pemasangan scoop stretcher holder luar, tangga belakang, peninggian atap fiberglass (opsional), stiker reflektif (cutting sticker/digital print) 3M.',
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-white" />,
      title: 'Service & Retrofit Lama',
      desc: 'Restorasi interior ambulance lama yang rusak, penggantian lantai vinyl, upgrade sistem oksigen kuno ke central system, serta penyegaran stiker bodi.',
    },
  ]

  return (
    <section className="py-20 bg-navy relative border-b border-accent-teal/20">
      <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold">
            TECHNICAL SUBSYSTEMS // JASA MODIFIKASI SPESIFIK
          </span>
          <h2 className="font-oswald text-3xl sm:text-4xl font-extrabold uppercase text-white">
            Layanan Modifikasi & Rekayasa Kabin
          </h2>
          <div className="w-16 h-1 bg-accent-teal mx-auto" />
          <p className="text-abu-light/75 text-sm leading-relaxed font-inter">
            Kami membongkar interior standar dan membangun kembali sistem mekanis medis dari dasar dengan perhitungan beban kelistrikan dan keselamatan penumpang yang matang.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-navy-card border border-accent-teal/20 p-6 hover:border-accent-teal transition-colors duration-300 rounded-[4px] flex flex-col gap-4"
            >
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-accent-teal/10 border border-accent-teal/40 rounded-[4px] flex items-center justify-center shrink-0">
                  {service.icon}
                </div>
                <h3 className="font-oswald text-lg font-bold text-white uppercase tracking-wide">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-xs text-abu-light/70 leading-relaxed font-inter">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

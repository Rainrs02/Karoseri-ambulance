'use client'

import React from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function JasaKaroseri() {
  const types = [
    {
      name: 'Ambulance Transport',
      badge: 'STANDARD MEDICAL UNIT',
      desc: 'Modifikasi optimal untuk pemindahan pasien dalam kondisi stabil. Dilengkapi dengan gantungan infus, tabung oksigen sederhana, dan bangku perawat.',
      specs: ['Keranda kurung stainless steel', 'Lampu rotari halogen', 'Lantai plywood berlapis vinyl', '1 Tabung oksigen regulator'],
    },
    {
      name: 'Ambulance Gawat Darurat (AGD)',
      badge: 'ADVANCED LIFE SUPPORT UNIT',
      desc: 'Modifikasi canggih untuk pertolongan pertama pasien kritis. Memiliki instalasi kelistrikan handal untuk monitor jantung, defibrilator, dan ventilator.',
      specs: ['Central Oxygen System ganda', 'Inverter 1000W sinus murni', 'Lemari alkes fiberglass permanen', 'Automatic Roll-in Stretcher'],
    },
    {
      name: 'Ambulance Jenazah',
      badge: 'FUNERAL SERVICE UNIT',
      desc: 'Konversi kendaraan khusus angkutan jenazah dengan desain higienis, mudah dibersihkan, dan dilengkapi rel pengunci keranda otomatis.',
      specs: ['Rel keranda stainless steel & stopper', 'Kabin dilapisi fiberglass mulus', 'Kursi pengiring lipat samping', 'Lampu sorot pemakaman belakang'],
    },
    {
      name: 'Ambulance Custom & Khusus',
      badge: 'SPECIAL PURPOSE VEHICLE',
      desc: 'Modifikasi kendaraan khusus seperti Laboratorium Mobile, PCR Mobile, Klinik Gigi Keliling, atau Ambulance Taktis 4x4 untuk medan berat.',
      specs: ['Desain & Layout Visual kustom', 'Tenda awning eksterior lipat', 'Kelistrikan AC/DC ganda generator', 'Instalasi wastafel air bersih'],
    },
  ]

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold">
              VEHICLE TYPES // SPESIALISASI MODIFIKASI
            </span>
            <h2 className="font-oswald text-3xl sm:text-4xl font-extrabold uppercase text-navy">
              Tipe Karoseri Ambulance
            </h2>
            <div className="w-16 h-1 bg-accent-teal" />
            <p className="text-navy/70 text-sm leading-relaxed font-inter">
              Pilih tipe modifikasi yang sesuai dengan peruntukan operasional institusi kesehatan, klinik, yayasan, atau CSR perusahaan Anda.
            </p>
          </div>
          <Link
            href="/produk-layanan"
            className="font-oswald text-xs uppercase tracking-wider text-accent-teal hover:text-navy border border-accent-teal/30 hover:border-navy px-4 py-2.5 rounded-[4px] font-semibold transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Bandingkan Detail Fitur</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 2x2 Grid of Types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {types.map((type, idx) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-abu-light/50 border-2 border-navy p-8 rounded-[4px] shadow-solid hover:shadow-solid-teal transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <span className="font-fira text-[9px] text-accent-teal font-semibold tracking-wider">
                      {type.badge}
                    </span>
                    <h3 className="font-oswald text-xl font-bold text-navy uppercase tracking-wide">
                      {type.name}
                    </h3>
                  </div>
                  <span className="font-fira text-xs text-navy/20 font-bold">
                    MOD-0{idx + 1}
                  </span>
                </div>

                <p className="text-xs text-navy/70 leading-relaxed font-inter">
                  {type.desc}
                </p>

                {/* Features mini list */}
                <div className="pt-2">
                  <span className="block font-oswald text-[10px] uppercase tracking-wider text-navy font-bold mb-2">
                    Fitur Kunci Kabin:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs font-inter text-navy/80">
                    {type.specs.map((spec) => (
                      <li key={spec} className="flex gap-1.5 items-center">
                        <CheckCircle2 size={13} className="text-accent-teal shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-navy/5 mt-6 flex justify-between items-center">
                <span className="text-[10px] font-fira text-navy/40">PREPARATION TIME: ~14 DAYS</span>
                <Link
                  href="/kontak"
                  className="font-oswald text-xs uppercase tracking-wider text-navy hover:text-accent-teal font-semibold transition-colors flex items-center gap-1"
                >
                  <span>Minta Penawaran</span>
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

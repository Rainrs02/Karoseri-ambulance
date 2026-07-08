'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const UrbanArrow = ({ direction = 'right', className = '' }: { direction?: 'right' | 'left' | 'down', className?: string }) => {
  const rotation = direction === 'right' ? '' : direction === 'left' ? 'rotate-180' : 'rotate-90'
  return (
    <svg 
      viewBox="0 0 42 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${rotation} ${className}`}
    >
      <path d="M0 0H7L19 12L7 24H0L12 12L0 0Z" fill="currentColor" />
      <path d="M12 0H30L42 12L30 24H12L24 12L12 0Z" fill="currentColor" />
    </svg>
  )
}

export default function AlurPengerjaan() {
  const steps = [
    { title: 'Konsultasi Kebutuhan', desc: 'Menentukan spesifikasi ambulance berdasarkan regulasi dan kebutuhan institusi.' },
    { title: 'Survey Kendaraan Klien', desc: 'Pengecekan fisik, dimensi, dan kesiapan sasis kendaraan di workshop kami.' },
    { title: 'Penentuan Spesifikasi', desc: 'Menyusun rincian komponen alkes, material kabin, kelistrikan, dan layout.' },
    { title: 'Penawaran Harga', desc: 'Penerbitan surat penawaran harga (SPH) resmi dan penandatanganan kontrak.' },
    { title: 'Desain & Layout Visual', desc: 'Pembuatan gambar rancangan visual interior sebagai persetujuan layout final.' },
    { title: 'Proses Karoseri', desc: 'Pembongkaran kabin, pengelasan rangka interior, instalasi oksigen, kelistrikan, & panel.' },
    { title: 'Quality Control (QC)', desc: 'Kalibrasi kelistrikan, pengetesan kebocoran pipa oksigen, dan uji jalan.' },
    { title: 'Serah Terima Unit', desc: 'Pengantaran unit kembali ke instansi klien lengkap dengan uji fungsi alat.' },
    { title: 'Garansi & After Sales', desc: 'Jaminan garansi karoseri 1 tahun dan dukungan teknis suku cadang fast-response.' },
  ]

  return (
    <section className="py-20 bg-abu-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold">
            WORKFLOW PIPELINE // ALUR PENGERJAAN
          </span>
          <h2 className="font-oswald text-3xl sm:text-4xl font-extrabold uppercase text-navy">
            9 Tahap Transformasi Kendaraan
          </h2>
          <div className="w-16 h-1 bg-accent-teal mx-auto" />
          <p className="text-navy/70 text-sm leading-relaxed font-inter">
            Alur pengerjaan yang terstruktur memastikan setiap tahap modifikasi dipantau secara ketat demi keandalan unit di lapangan.
          </p>
        </div>

        {/* 9 Step Layout Line */}
        <div className="relative border-l-2 border-dashed border-navy/20 ml-4 md:ml-8 lg:ml-0 lg:border-l-0 lg:grid lg:grid-cols-3 lg:gap-8 gap-y-12 flex flex-col">
          {steps.map((step, idx) => {
            const getOrderClass = (index: number) => {
              switch (index) {
                case 0: return 'lg:order-1';
                case 1: return 'lg:order-2';
                case 2: return 'lg:order-3';
                case 3: return 'lg:order-6'; // swapped
                case 4: return 'lg:order-5'; // swapped
                case 5: return 'lg:order-4'; // swapped
                case 6: return 'lg:order-7';
                case 7: return 'lg:order-8';
                case 8: return 'lg:order-9';
                default: return '';
              }
            };

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`relative pl-8 lg:pl-0 lg:pt-8 flex flex-col gap-2 group ${getOrderClass(idx)}`}
              >
                {/* Desktop Arrows */}
                {(idx === 0 || idx === 1 || idx === 6 || idx === 7) && (
                  <UrbanArrow direction="right" className="hidden lg:block absolute top-1/2 -right-8 -translate-y-1/2 text-navy/30 w-8 h-auto z-20" />
                )}
                {(idx === 2 || idx === 5) && (
                  <UrbanArrow direction="down" className="hidden lg:block absolute -bottom-10 left-1/2 -translate-x-1/2 text-navy/30 w-8 h-auto z-20" />
                )}
                {(idx === 3 || idx === 4) && (
                  <UrbanArrow direction="left" className="hidden lg:block absolute top-1/2 -left-8 -translate-y-1/2 text-navy/30 w-8 h-auto z-20" />
                )}

                {/* Bullet number */}
                <div className="absolute left-[-13px] top-0 lg:left-0 lg:top-[-13px] w-6 h-6 rounded-full bg-navy text-white text-[10px] font-fira flex items-center justify-center border border-accent-teal z-10 group-hover:bg-accent-teal transition-colors">
                  {idx + 1}
                </div>

                <div className="bg-white border border-navy/20 p-5 rounded-[4px] shadow-solid hover:shadow-solid-teal transition-all duration-200 relative z-10">
                  <span className="font-fira text-[9px] text-accent-teal font-semibold block uppercase mb-1">
                    STAGE-0{idx + 1}
                  </span>
                  <h3 className="font-oswald text-sm font-bold text-navy uppercase tracking-wider mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-navy/70 leading-relaxed font-inter">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

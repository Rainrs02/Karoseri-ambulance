'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Info, Eye } from 'lucide-react'

export default function PortofolioTerbaru() {
  const portfolios = [
    {
      id: 1,
      title: 'Toyota Hiace Premio - Ambulance AGD Advance',
      client: 'RSUD Kota Bogor',
      category: 'Gawat Darurat',
      image: '/assets/Ambulance (1).jpg',
      specs: 'Central Oxygen, Infusion Rail, Lemari Fiberglass, Defibrillator Mount, AC Double Blower',
    },
    {
      id: 2,
      title: 'Toyota Hiace Commuter - Ambulance Transport',
      client: 'Klinik Bakti Sehat',
      category: 'Transport',
      image: '/assets/Ambulance (2).jpg',
      specs: 'Standard Stretcher, 1 Tabung Oksigen, Vinyl Floor Medis, Kursi Perawat Lipat',
    },
    {
      id: 3,
      title: 'Suzuki APV Arena - Ambulance Jenazah',
      client: 'Yayasan Husnul Khatimah',
      category: 'Jenazah',
      image: '/assets/Ambulance (3).jpg',
      specs: 'Rel Keranda Stainless Steel, Stopper Keranda, Jok Samping 2 Penumpang, Lampu Sorot Belakang',
    },
    {
      id: 4,
      title: 'Mitsubishi Triton 4x4 - Ambulance Taktis Medan Berat',
      client: 'CSR PT Antam Tbk',
      category: 'Custom 4x4',
      image: '/assets/Ambulance (4).jpg',
      specs: 'Sasis 4WD, Winch Depan, Kabin Box Panel Fiberglass Isolasi Suhu, Shock Breaker Heavy Duty',
    },
  ]

  const [activePort, setActivePort] = useState(portfolios[0])

  return (
    <section className="py-20 bg-white relative">
      {/* Background guide lines */}
      <div className="absolute left-0 bottom-0 top-0 w-[1px] bg-navy/10 ml-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold">
              COMPLETED PROJECTS // PORTOFOLIO TERBARU
            </span>
            <h2 className="font-oswald text-3xl sm:text-4xl font-extrabold uppercase text-navy">
              Armada Penyelamat yang Telah Mengaspal
            </h2>
            <div className="w-16 h-1 bg-accent-teal" />
            <p className="text-navy/70 text-sm leading-relaxed font-inter">
              Lihat beberapa hasil modifikasi fisik kendaraan kosong milik klien yang disulap menjadi unit pertolongan medis siap pakai.
            </p>
          </div>
          <Link
            href="/galeri-portofolio"
            className="font-oswald text-xs uppercase tracking-wider text-accent-teal hover:text-navy border border-accent-teal/30 hover:border-navy px-4 py-2.5 rounded-[4px] font-semibold transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Buka Seluruh Galeri</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Layout: Main Showcase + Thumbnail list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Selected Image Showcase (Left) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-abu-light border-2 border-navy p-5 rounded-[4px] shadow-solid">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px] font-fira text-navy/50 border-b border-navy/10 pb-2">
                <span>PROJECT ID: WLS-PRJ-00{activePort.id}</span>
                <span>STATUS: DELIVERED SUCCESSFUL</span>
              </div>
              
              <div className="relative aspect-[16/10] bg-navy overflow-hidden border border-navy/20 rounded-[4px]">
                <Image
                  src={activePort.image}
                  alt={activePort.title}
                  fill
                  className="object-cover"
                  sizes="(max-w-lg) 100vw, 700px"
                />
                
                {/* Category Tag */}
                <div className="absolute top-3 left-3 bg-navy text-white text-[9px] font-fira uppercase tracking-widest px-2 py-1 border border-accent-teal/40 rounded">
                  {activePort.category}
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <h3 className="font-oswald text-xl font-bold uppercase tracking-wide text-navy">
                {activePort.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-inter text-navy/80">
                <div className="flex gap-1.5 items-start">
                  <Info size={14} className="text-accent-teal shrink-0 mt-0.5" />
                  <span><strong>Instansi Klien:</strong> {activePort.client}</span>
                </div>
                <div className="flex gap-1.5 items-start">
                  <Info size={14} className="text-accent-teal shrink-0 mt-0.5" />
                  <span><strong>Sub-System Modifikasi:</strong> {activePort.specs}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Thumbnail Selector (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="font-oswald text-xs uppercase tracking-wider text-navy/50 font-bold block mb-1">
              Pilih Unit Karoseri:
            </span>
            <div className="flex-grow grid grid-cols-1 gap-3">
              {portfolios.map((port) => (
                <button
                  key={port.id}
                  onClick={() => setActivePort(port)}
                  className={`text-left p-4 border-2 rounded-[4px] flex items-center gap-4 transition-all duration-150 ${
                    activePort.id === port.id
                      ? 'border-accent-teal bg-navy text-white shadow-solid-teal translate-x-[-2px] translate-y-[-2px]'
                      : 'border-navy bg-white text-navy hover:bg-abu-light'
                  }`}
                >
                  <div className="relative w-20 aspect-video bg-navy/20 shrink-0 border border-navy/10 overflow-hidden rounded-[2px]">
                    <Image
                      src={port.image}
                      alt={port.title}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  
                  <div className="space-y-1 overflow-hidden">
                    <span className={`block font-fira text-[8px] uppercase tracking-wider ${activePort.id === port.id ? 'text-accent-teal' : 'text-navy/40'}`}>
                      UNIT-0{port.id}
                    </span>
                    <h4 className="font-oswald text-xs font-semibold uppercase tracking-wide truncate max-w-[260px]">
                      {port.title}
                    </h4>
                    <p className={`text-[10px] truncate ${activePort.id === port.id ? 'text-white/60' : 'text-navy/50'}`}>
                      Klien: {port.client}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

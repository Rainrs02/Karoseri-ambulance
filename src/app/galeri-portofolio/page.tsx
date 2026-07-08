'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Play, Eye, Calendar, User, Layers } from 'lucide-react'

export default function GaleriPortofolio() {
  const [filter, setFilter] = useState<'all' | 'proses' | 'selesai' | 'serah-terima' | 'video'>('all')

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      src: '/assets/Ambulance (1).jpg',
      category: 'selesai',
      title: 'Toyota Hiace Premio AGD - Selesai Pengerjaan',
      desc: 'Unit Ambulance Gawat Darurat pesanan RSUD Kota Bogor.',
    },
    {
      id: 2,
      type: 'image',
      src: '/assets/Ambulance (2).jpg',
      category: 'selesai',
      title: 'Toyota Hiace Commuter - Unit Transport Medis',
      desc: 'Modifikasi interior standard dengan partisi dan vinyl lantai medis.',
    },
    {
      id: 3,
      type: 'image',
      src: '/assets/Ambulance (3).jpg',
      category: 'selesai',
      title: 'Suzuki APV Arena - Ambulance Jenazah',
      desc: 'Konversi khusus unit kedukaan dengan rel keranda otomatis.',
    },
    {
      id: 4,
      type: 'image',
      src: '/assets/Ambulance (4).jpg',
      category: 'proses',
      title: 'Pemasangan Insulasi Kabin & Rangka Lemari',
      desc: 'Tahap pengelasan bracket tabung gas oksigen di sasis Mitsubishi Triton.',
    },
    {
      id: 5,
      type: 'video',
      src: '/assets/videos/Vidio%20Demo%20(1).MOV',
      category: 'video',
      title: 'Video Demo Unit 1',
      desc: 'Pengujian eksterior dan interior kabin.',
    },
    {
      id: 6,
      type: 'video',
      src: '/assets/videos/Vidio%20Demo%20(1).mp4',
      category: 'video',
      title: 'Video Demo Unit 2',
      desc: 'Pengujian eksterior dan interior kabin.',
    },
    {
      id: 7,
      type: 'video',
      src: '/assets/videos/Vidio%20Demo%20(2).MOV',
      category: 'video',
      title: 'Video Demo Unit 3',
      desc: 'Pengujian kelengkapan teknis ambulance.',
    },
    {
      id: 8,
      type: 'video',
      src: '/assets/videos/Vidio%20Demo%20(2).mp4',
      category: 'video',
      title: 'Video Demo Unit 4',
      desc: 'Pengujian kelengkapan teknis ambulance.',
    },
    {
      id: 9,
      type: 'video',
      src: '/assets/videos/Vidio%20Demo%20(3).MOV',
      category: 'video',
      title: 'Video Demo Unit 5',
      desc: 'Demonstrasi fitur medis.',
    },
    {
      id: 10,
      type: 'video',
      src: '/assets/videos/Vidio%20Demo%20(3).mp4',
      category: 'video',
      title: 'Video Demo Unit 6',
      desc: 'Demonstrasi fitur medis.',
    },
    {
      id: 11,
      type: 'video',
      src: '/assets/videos/Vidio%20Demo%20(4).MOV',
      category: 'video',
      title: 'Video Demo Unit 7',
      desc: 'Review hasil modifikasi.',
    },
    {
      id: 12,
      type: 'video',
      src: '/assets/videos/Vidio%20Demo%20(5).MOV',
      category: 'video',
      title: 'Video Demo Unit 8',
      desc: 'Review hasil modifikasi.',
    },
    {
      id: 13,
      type: 'video',
      src: '/assets/videos/Vidio%20Demo%20(6).MOV',
      category: 'video',
      title: 'Video Demo Unit 9',
      desc: 'Pengecekan final unit.',
    },
    {
      id: 14,
      type: 'image',
      src: '/assets/IMG_1713.JPG',
      category: 'serah-terima',
      title: 'Dokumentasi Serah Terima Unit RSUD',
      desc: 'Serah terima kunci dan uji fungsi kelistrikan medis di lokasi klien.',
    },
    {
      id: 15,
      type: 'image',
      src: '/assets/IMG_1714.JPG',
      category: 'proses',
      title: 'Instalasi Pipa Gas Oksigen Tembaga',
      desc: 'Proses pemipaan central oxygen system tersembunyi bertekanan tinggi.',
    },
    {
      id: 16,
      type: 'image',
      src: '/assets/IMG_1715.JPG',
      category: 'serah-terima',
      title: 'Serah Terima Armada Yayasan Sosial',
      desc: 'Unit Suzuki APV jenazah diserahterimakan kepada panitia masjid.',
    }
  ]

  const filteredItems = filter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === filter)

  // Data Before & After
  const beforeAfterData = [
    {
      title: 'Suzuki APV Arena Conversion',
      before: '/assets/Ambulance (4).jpg', // as proxy for empty shell
      after: '/assets/Ambulance (3).jpg',  // as final funeral unit
      desc: 'Restorasi kabin kosong tak bersekat menjadi unit ambulance jenazah lengkap dengan rel keranda dan lapis dinding fiberglass higienis.'
    },
    {
      title: 'Toyota Hiace Premio Conversion',
      before: '/assets/IMG_1714.JPG', // proxy for raw piping process
      after: '/assets/Ambulance (1).jpg',  // final AGD unit
      desc: 'Mengubah sasis kosong bodi mentah menjadi kabin Intensive Care Emergency Unit dengan Central Oxygen ganda dan panel kelistrikan AC/DC.'
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <section className="bg-blueprint text-white py-16 relative border-b border-accent-teal/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,19,38,0.9))] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold block">
            MEDIA GALLERY // GALERI & PORTOFOLIO
          </span>
          <h1 className="font-oswald text-4xl sm:text-5xl font-extrabold uppercase tracking-wide">
            Galeri Rekayasa Konstruksi
          </h1>
          <div className="w-16 h-1 bg-accent-teal mx-auto" />
          <p className="font-inter text-xs sm:text-sm text-abu-light/80 max-w-xl mx-auto leading-relaxed">
            Dokumentasi nyata proses produksi, serah terima unit, dan video pengujian instrumen kelistrikan & sirene karoseri kami.
          </p>
        </div>
      </section>

      {/* Before & After Modifikasi */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l-4 border-accent-teal pl-4 space-y-2 mb-12">
          <h2 className="font-oswald text-2xl font-bold uppercase text-navy">
            Before & After Modifikasi Kabin
          </h2>
          <p className="text-xs text-navy/70 font-inter">
            Perbandingan visual sebelum modifikasi sasis dan sesudah disulap menjadi unit medis lengkap:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {beforeAfterData.map((item, idx) => (
            <div
              key={idx}
              className="bg-abu-light/30 border-2 border-navy p-6 rounded-[4px] shadow-solid space-y-4 flex flex-col justify-between"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="block font-fira text-[9px] text-navy/40 uppercase">BEFORE // SASIS KOSONG</span>
                  <div className="relative aspect-video bg-navy overflow-hidden border border-navy/15 rounded">
                    <Image
                      src={item.before}
                      alt="Sebelum Modifikasi"
                      fill
                      className="object-cover"
                      sizes="(max-w-md) 50vw, 300px"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="block font-fira text-accent-teal text-[9px] uppercase font-bold">AFTER // AMBULANCE JADI</span>
                  <div className="relative aspect-video bg-navy overflow-hidden border border-accent-teal/40 rounded">
                    <Image
                      src={item.after}
                      alt="Sesudah Modifikasi"
                      fill
                      className="object-cover"
                      sizes="(max-w-md) 50vw, 300px"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-oswald text-sm font-bold uppercase text-navy">
                  {item.title}
                </h3>
                <p className="text-xs text-navy/75 leading-relaxed font-inter">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter Selector */}
      <section className="bg-abu-light border-y border-navy/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-3 flex-wrap">
          {(['all', 'proses', 'selesai', 'serah-terima', 'video'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 font-oswald text-[11px] uppercase tracking-wider border rounded-[4px] transition-all font-bold ${
                filter === cat
                  ? 'bg-navy text-white border-accent-teal'
                  : 'bg-white text-navy border-navy/20 hover:bg-navy/5'
              }`}
            >
              {cat === 'all' && 'Semua Media'}
              {cat === 'proses' && 'Proses Pengerjaan'}
              {cat === 'selesai' && 'Unit Selesai'}
              {cat === 'serah-terima' && 'Serah Terima'}
              {cat === 'video' && 'Video Demo'}
            </button>
          ))}
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="border border-navy/20 p-4 rounded-[4px] bg-white hover:border-accent-teal transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="relative aspect-video bg-navy overflow-hidden rounded border border-navy/10 flex items-center justify-center">
                    {item.type === 'video' ? (
                      <div className="w-full h-full relative">
                        <video 
                          src={item.src} 
                          controls 
                          className="w-full h-full object-cover"
                          preload="metadata"
                        />
                        <div className="absolute top-2 right-2 bg-cta-orange text-white p-1 rounded-full pointer-events-none">
                          <Play size={10} className="fill-white" />
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-w-md) 100vw, 400px"
                      />
                    )}
                  </div>

                  <div className="space-y-1">
                    <span className="font-fira text-[8px] text-accent-teal uppercase tracking-widest block font-semibold">
                      {item.category.replace('-', ' ')}
                    </span>
                    <h3 className="font-oswald text-xs font-bold uppercase tracking-wider text-navy">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-navy/70 leading-relaxed font-inter">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}

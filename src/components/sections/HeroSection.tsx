'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import CustomIcon from '../icons/CustomIcon'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-blueprint flex items-center justify-center py-16 overflow-hidden border-b border-accent-teal/30">
      {/* Blueprint decorative lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,19,38,0.85))] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Technical Info & Headlines */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="font-fira text-xs text-accent-teal uppercase tracking-widest border border-accent-teal/30 bg-navy-card/85 px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <span className="text-yellow-400">⚡</span> MODIFIKASI TERSTANDARISASI & BERGARANSI
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-wide uppercase leading-tight"
            >
              Transformasi Presisi <br />
              <span className="text-accent-teal">Karoseri Ambulance</span> <br />
              Standar Medis Nasional
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-abu-light/80 text-sm sm:text-base font-inter leading-relaxed max-w-xl"
            >
              Kami memodifikasi kendaraan Anda (Toyota Hiace, Suzuki APV, Mitsubishi Triton, dll) menjadi unit ambulance tangguh, higienis, dan terintegrasi sistem kelistrikan & oksigen bersertifikasi resmi. 
              <span className="text-accent-teal font-semibold"> *Perusahaan tidak menjual mobil, hanya memodifikasi bodi interior/eksterior.</span>
            </motion.p>

            {/* Micro technical details box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 border-y border-accent-teal/20 py-4 max-w-lg text-white"
            >
              <div className="flex flex-col gap-1">
                <span className="font-fira text-xs text-accent-teal">SPEC-STD:</span>
                <span className="font-oswald text-sm font-semibold uppercase">KEMENKES RI</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-fira text-xs text-accent-teal">ISO-CERT:</span>
                <span className="font-oswald text-sm font-semibold uppercase">9001:2015</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-fira text-xs text-accent-teal">MATERIAL:</span>
                <span className="font-oswald text-sm font-semibold uppercase">HEAVY DUTY VINYL</span>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link href="/kontak" className="btn-mech-primary flex items-center gap-2">
                <CustomIcon name="wrench" size={16} />
                <span>Mulai Modifikasi</span>
              </Link>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Wasilah%20Ambulance,%20saya%20ingin%20konsultasi%20mengenai%20modifikasi%20karoseri%20ambulance."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-oswald uppercase tracking-wider bg-[#25D366] text-white px-6 py-3 border border-[#1ebd59] rounded-[4px] shadow-[4px_4px_0px_0px_#128C7E] transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#128C7E] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[#22c35e]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.747 1.451 5.436.002 9.858-4.417 9.86-9.86.002-2.638-1.023-5.118-2.884-6.98-1.861-1.862-4.341-2.887-6.983-2.889-5.442 0-9.863 4.42-9.865 9.864-.001 1.702.451 3.361 1.309 4.808L1.656 22.09l4.991-1.31c.046-.012.08-.01.121-.005zM17.487 14.39c-.27-.136-1.602-.79-1.852-.882-.25-.093-.432-.136-.614.137-.182.273-.705.882-.864 1.064-.16.182-.318.205-.588.069-.27-.136-1.14-.42-2.172-1.34-0.803-.717-1.345-1.603-1.502-1.876-.159-.273-.017-.42.119-.556.122-.122.27-.318.405-.477.136-.16.182-.273.273-.455.09-.182.046-.341-.023-.477-.07-.136-.614-1.477-.84-2.023-.222-.533-.443-.46-.614-.469-.159-.009-.341-.01-.523-.01-.182 0-.477.069-.727.341-.25.273-.954.932-.954 2.273s.977 2.636 1.114 2.818c.137.182 1.922 2.935 4.657 4.116.65.281 1.157.449 1.554.576.653.208 1.248.179 1.718.109.523-.078 1.602-.655 1.83-1.282.228-.627.228-1.164.159-1.282-.07-.118-.25-.182-.523-.318z"/>
                </svg>
                <span>Hubungi WhatsApp</span>
              </a>
            </motion.div>
          </div>

          {/* Right Side: Asymmetrical Image Grid Showcase */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[480px] mx-auto pb-10"
            >
              {/* Radial glow background behind images */}
              <div className="absolute -inset-4 bg-accent-teal/15 rounded-full filter blur-3xl pointer-events-none" />
              
              {/* Grid Container */}
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {/* Left column - Tall Image */}
                <div className="col-span-1">
                  <div className="relative aspect-[3/5] rounded-[24px] overflow-hidden border border-white/10 shadow-2xl group">
                    <Image
                      src="/assets/HeroImage.jpg"
                      alt="Wasilah Karoseri Ambulance"
                      fill
                      sizes="(max-w-md) 50vw, 240px"
                      priority
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Right column - Stacked Images */}
                <div className="col-span-1 flex flex-col gap-4">
                  {/* Top Image */}
                  <div className="relative aspect-square rounded-[24px] overflow-hidden border border-white/10 shadow-2xl group">
                    <Image
                      src="/assets/Ambulance (2).jpg"
                      alt="Wasilah Karoseri Ambulance Interior"
                      fill
                      sizes="(max-w-md) 50vw, 240px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  </div>
                  
                  {/* Bottom Image */}
                  <div className="relative aspect-square rounded-[24px] overflow-hidden border border-white/10 shadow-2xl group">
                    <Image
                      src="/assets/Ambulance (3).jpg"
                      alt="Wasilah Karoseri Ambulance Unit"
                      fill
                      sizes="(max-w-md) 50vw, 240px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              {/* Star Rating Badge (Top Right) */}
              <div className="absolute top-4 right-4 bg-navy/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-yellow-500/30 flex items-center gap-1.5 z-20 shadow-xl">
                <span className="text-yellow-400 font-bold text-sm">★ 5.0</span>
                <span className="text-[10px] text-white/90 font-semibold tracking-wider uppercase font-oswald">Rating Klien</span>
              </div>

              {/* Bottom Pill Badges Container */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] bg-white/95 backdrop-blur-md border border-white/20 rounded-[16px] py-2 px-3 shadow-xl z-20 flex justify-around items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-green-600 font-bold text-xs">✓</span>
                  <span className="text-[9px] font-bold text-navy uppercase tracking-wider font-oswald">Kemenkes Approved</span>
                </div>
                <div className="h-3 w-[1px] bg-navy/10" />
                <div className="flex items-center gap-1">
                  <span className="text-green-600 font-bold text-xs">✓</span>
                  <span className="text-[9px] font-bold text-navy uppercase tracking-wider font-oswald">Garansi 1 Tahun</span>
                </div>
                <div className="h-3 w-[1px] bg-navy/10" />
                <div className="flex items-center gap-1">
                  <span className="text-green-600 font-bold text-xs">✓</span>
                  <span className="text-[9px] font-bold text-navy uppercase tracking-wider font-oswald">Teknisi Ahli</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
